package com.salon.management.controllers;

import com.salon.management.models.Appointment;
import com.salon.management.models.EBookingStatus;
import com.salon.management.models.SalonService;
import com.salon.management.models.User;
import com.salon.management.payload.request.BookingRequest;
import com.salon.management.payload.response.MessageResponse;
import com.salon.management.repository.AppointmentRepository;
import com.salon.management.repository.SalonServiceRepository;
import com.salon.management.repository.UserRepository;
import com.salon.management.security.services.UserDetailsImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/appointments")
public class AppointmentController {

    @Autowired
    private AppointmentRepository appointmentRepository;

    @Autowired
    private SalonServiceRepository serviceRepository;

    @Autowired
    private UserRepository userRepository;

    private User getAuthenticatedUser() {
        UserDetailsImpl userDetails = (UserDetailsImpl) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        return userRepository.findById(userDetails.getId()).orElseThrow(() -> new RuntimeException("User not found"));
    }

    // Customer books an appointment
    @PostMapping("/book")
    @PreAuthorize("hasRole('CUSTOMER') or hasRole('ADMIN')")
    public ResponseEntity<?> bookAppointment(@Valid @RequestBody BookingRequest request) {
        
        // Anti-double booking logic
        boolean conflict = request.getStylist() != null && !request.getStylist().isEmpty() ?
                appointmentRepository.existsByAppointmentDateAndTimeSlotAndPreferredStylist(request.getDate(), request.getTimeSlot(), request.getStylist()) :
                appointmentRepository.existsByAppointmentDateAndTimeSlot(request.getDate(), request.getTimeSlot());

        if (conflict) {
            return ResponseEntity.badRequest().body(new MessageResponse("Error: Time slot is already booked for this date/stylist!"));
        }

        Optional<SalonService> serviceOpt = serviceRepository.findById(request.getServiceId());
        if (serviceOpt.isEmpty()) {
            return ResponseEntity.badRequest().body(new MessageResponse("Error: Service not found!"));
        }

        Appointment appt = new Appointment();
        appt.setCustomer(getAuthenticatedUser());
        appt.setService(serviceOpt.get());
        appt.setAppointmentDate(request.getDate());
        appt.setTimeSlot(request.getTimeSlot());
        appt.setPreferredStylist(request.getStylist());
        appt.setCouponCode(request.getCoupon());
        
        // Mock price calculation
        double finalPrice = serviceOpt.get().getPrice();
        if (request.getCoupon() != null && request.getCoupon().equalsIgnoreCase("WELCOME10")) {
            finalPrice = finalPrice * 0.90; // 10% off
        }
        appt.setFinalPrice(finalPrice);

        appointmentRepository.save(appt);

        // TODO: Fire Email Notification Event here later

        return ResponseEntity.ok(new MessageResponse("Appointment booked successfully! Status is PENDING."));
    }

    // Customer sees their own history
    @GetMapping("/me")
    @PreAuthorize("hasRole('CUSTOMER')")
    public ResponseEntity<List<Appointment>> getMyBookings() {
        List<Appointment> myBookings = appointmentRepository.findByCustomer_Id(getAuthenticatedUser().getId());
        return ResponseEntity.ok(myBookings);
    }

    // Admin sees all history
    @GetMapping("/all")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<List<Appointment>> getAllBookings() {
        return ResponseEntity.ok(appointmentRepository.findAll());
    }

    // Admin change status
    @PutMapping("/{id}/status")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<?> updateStatus(@PathVariable Long id, @RequestParam EBookingStatus status) {
        Optional<Appointment> apptOpt = appointmentRepository.findById(id);
        if (apptOpt.isPresent()) {
            Appointment appt = apptOpt.get();
            appt.setStatus(status);
            appointmentRepository.save(appt);
            return ResponseEntity.ok(new MessageResponse("Booking status updated to " + status));
        }
        return ResponseEntity.notFound().build();
    }
    
    // User cancels their own booking
    @DeleteMapping("/{id}/cancel")
    @PreAuthorize("hasRole('CUSTOMER')")
    public ResponseEntity<?> cancelBooking(@PathVariable Long id) {
        Optional<Appointment> apptOpt = appointmentRepository.findById(id);
        if (apptOpt.isPresent()) {
            Appointment appt = apptOpt.get();
            if(!appt.getCustomer().getId().equals(getAuthenticatedUser().getId())) {
                 return ResponseEntity.badRequest().body(new MessageResponse("Error: Unauthorized!"));
            }
            appt.setStatus(EBookingStatus.CANCELLED);
            appointmentRepository.save(appt);
            return ResponseEntity.ok(new MessageResponse("Booking cancelled!"));
        }
        return ResponseEntity.notFound().build();
    }

    // User pays for booking (Razorpay Mock)
    @PostMapping("/{id}/pay")
    @PreAuthorize("hasRole('CUSTOMER')")
    public ResponseEntity<?> payForBooking(@PathVariable Long id) {
        Optional<Appointment> apptOpt = appointmentRepository.findById(id);
        if (apptOpt.isPresent()) {
            Appointment appt = apptOpt.get();
            if(!appt.getCustomer().getId().equals(getAuthenticatedUser().getId())) {
                 return ResponseEntity.badRequest().body(new MessageResponse("Error: Unauthorized!"));
            }
            appt.setStatus(EBookingStatus.CONFIRMED);
            appointmentRepository.save(appt);
            return ResponseEntity.ok(new MessageResponse("Payment successful! Booking confirmed via Razorpay mock."));
        }
        return ResponseEntity.notFound().build();
    }
}
