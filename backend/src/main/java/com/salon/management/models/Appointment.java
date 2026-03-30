package com.salon.management.models;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Getter
@Setter
public class Appointment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "user_id")
    private User customer;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "service_id")
    private SalonService service;

    @NotNull
    private LocalDate appointmentDate;

    // E.g. "10:00 AM" or "14:30"
    @NotBlank
    private String timeSlot;

    private String preferredStylist;

    @Enumerated(EnumType.STRING)
    @Column(length = 20)
    private EBookingStatus status = EBookingStatus.PENDING;

    private LocalDateTime createdAt = LocalDateTime.now();
    
    // Optional applied discount code or final price
    private String couponCode;
    private Double finalPrice;
}
