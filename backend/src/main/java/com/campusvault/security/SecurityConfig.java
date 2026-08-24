package com.campusvault.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
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

                        .requestMatchers("/actuator/health").permitAll()

                        .requestMatchers("/api/auth/**").permitAll()

                        .requestMatchers("/api/notes/**").permitAll()

                        .requestMatchers("/api/files/**").permitAll()

                        .anyRequest().permitAll()
                )

                // IMPORTANT:
                // Do NOT enable HTTP Basic authentication.
                .httpBasic(httpBasic -> httpBasic.disable())

                // Disable browser login page authentication as well.
                .formLogin(form -> form.disable());

        return http.build();
    }
}