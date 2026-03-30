package com.salon.management.payload.request;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;
import java.time.LocalDate;

@Getter
@Setter
public class BookingRequest {
    @NotNull
    private Long serviceId;

    @NotNull
    private LocalDate date;

    @NotBlank
    private String timeSlot;

    private String stylist;
    
    private String coupon;
}
