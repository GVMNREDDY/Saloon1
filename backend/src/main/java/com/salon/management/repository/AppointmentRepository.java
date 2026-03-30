package com.salon.management.repository;

import com.salon.management.models.Appointment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface AppointmentRepository extends JpaRepository<Appointment, Long> {
    List<Appointment> findByCustomer_Id(Long customerId);
    
    // Check conflicts for stylist or generic slot
    boolean existsByAppointmentDateAndTimeSlotAndPreferredStylist(LocalDate date, String timeSlot, String stylist);
    
    boolean existsByAppointmentDateAndTimeSlot(LocalDate date, String timeSlot);
}
