package com.salon.management.repository;

import com.salon.management.models.SalonService;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface SalonServiceRepository extends JpaRepository<SalonService, Long> {
    List<SalonService> findByCategoryId(Long categoryId);
}
