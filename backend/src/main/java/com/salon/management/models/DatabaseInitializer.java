package com.salon.management.models;

import com.salon.management.repository.RoleRepository;
import com.salon.management.repository.ServiceCategoryRepository;
import com.salon.management.repository.SalonServiceRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import java.util.Arrays;

@Configuration
public class DatabaseInitializer {
    @Bean
    CommandLineRunner initDatabase(RoleRepository roleRepository, ServiceCategoryRepository categoryRepo, SalonServiceRepository serviceRepo) {
        return args -> {
            if (roleRepository.count() == 0) {
                roleRepository.save(new Role(ERole.ROLE_CUSTOMER));
                roleRepository.save(new Role(ERole.ROLE_STAFF));
                roleRepository.save(new Role(ERole.ROLE_ADMIN));
            }

            if (categoryRepo.count() == 0) {
                ServiceCategory hair = new ServiceCategory(); hair.setName("Hair");
                ServiceCategory skin = new ServiceCategory(); skin.setName("Skin");
                ServiceCategory makeup = new ServiceCategory(); makeup.setName("Makeup");
                ServiceCategory spa = new ServiceCategory(); spa.setName("Spa & massage");
                categoryRepo.saveAll(Arrays.asList(hair, skin, makeup, spa));

                SalonService s1 = new SalonService(); s1.setCategory(hair); s1.setName("Hair Cut"); s1.setDescription("Precision cut and styling."); s1.setPrice(45.0); s1.setDurationMinutes(30);
                SalonService s2 = new SalonService(); s2.setCategory(hair); s2.setName("Styling"); s2.setDescription("Professional blow-dry and styling."); s2.setPrice(35.0); s2.setDurationMinutes(45);
                SalonService s3 = new SalonService(); s3.setCategory(hair); s3.setName("Coloring"); s3.setDescription("Full hair coloring with premium products."); s3.setPrice(120.0); s3.setDurationMinutes(120);

                SalonService s4 = new SalonService(); s4.setCategory(skin); s4.setName("Facials"); s4.setDescription("Deep cleansing facial treatment."); s4.setPrice(80.0); s4.setDurationMinutes(60);
                SalonService s5 = new SalonService(); s5.setCategory(skin); s5.setName("Cleanup"); s5.setDescription("Quick skin cleanup and glow."); s5.setPrice(40.0); s5.setDurationMinutes(30);

                SalonService s6 = new SalonService(); s6.setCategory(makeup); s6.setName("Bridal Makeup"); s6.setDescription("Complete bridal makeup package."); s6.setPrice(250.0); s6.setDurationMinutes(180);
                SalonService s7 = new SalonService(); s7.setCategory(makeup); s7.setName("Party Makeup"); s7.setDescription("Light makeup for parties and events."); s7.setPrice(85.0); s7.setDurationMinutes(60);

                SalonService s8 = new SalonService(); s8.setCategory(spa); s8.setName("Deep Tissue Massage"); s8.setDescription("Relieve tension and soothe muscles."); s8.setPrice(120.0); s8.setDurationMinutes(60);

                serviceRepo.saveAll(Arrays.asList(s1, s2, s3, s4, s5, s6, s7, s8));
            }
        };
    }
}
