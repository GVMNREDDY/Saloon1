package com.salon.management.controllers;

import com.salon.management.models.SalonService;
import com.salon.management.repository.SalonServiceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/services")
public class ServiceController {

    @Autowired
    private SalonServiceRepository serviceRepository;

    @GetMapping
    public List<SalonService> getAllServices() {
        return serviceRepository.findAll();
    }

    @PostMapping
    @PreAuthorize("hasRole('ADMIN')")
    public SalonService createService(@RequestBody SalonService service) {
        return serviceRepository.save(service);
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public void deleteService(@PathVariable Long id) {
        serviceRepository.deleteById(id);
    }
}
