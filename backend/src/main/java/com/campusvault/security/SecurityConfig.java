package com.campusvault.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

    @Bean
    BCryptPasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {

        System.out.println("===== SECURITY CONFIG LOADED =====");

        http
                .csrf(csrf -> csrf.disable())
                .authorizeHttpRequests(auth -> auth

                        // Health endpoint for Kubernetes
                        .requestMatchers("/actuator/health").permitAll()

                        // Public APIs
                        .requestMatchers("/api/auth/**").permitAll()
                        .requestMatchers("/api/notes/**").permitAll()
                        .requestMatchers("/api/files/**").permitAll()

                        // Everything else requires login
                        .anyRequest().authenticated()
                )
                .httpBasic(Customizer.withDefaults());

        return http.build();
    }
}