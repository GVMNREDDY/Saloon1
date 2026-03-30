package com.salon.management.models;

import com.salon.management.repository.RoleRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class DatabaseInitializer {
    @Bean
    CommandLineRunner initDatabase(RoleRepository roleRepository) {
        return args -> {
            if (roleRepository.count() == 0) {
                roleRepository.save(new Role(ERole.ROLE_CUSTOMER));
                roleRepository.save(new Role(ERole.ROLE_STAFF));
                roleRepository.save(new Role(ERole.ROLE_ADMIN));
            }
        };
    }
}
