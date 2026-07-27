package com.campusvault.service.impl;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.campusvault.dto.AuthResponse;
import com.campusvault.dto.RegisterRequest;
import com.campusvault.entity.User;
import com.campusvault.repository.UserRepository;
import com.campusvault.service.AuthService;

@Service
public class AuthServiceImpl implements AuthService {

    private final UserRepository userRepository;
    private final BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    public AuthServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public AuthResponse register(RegisterRequest request) {

        if (userRepository.existsByEmail(request.getEmail())) {
            return new AuthResponse("Email already exists");
        }

        if (userRepository.existsByUsn(request.getUsn())) {
            return new AuthResponse("USN already exists");
        }

        User user = User.builder()
                .fullName(request.getFullName())
                .usn(request.getUsn())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .university(request.getUniversity())
                .department(request.getDepartment())
                .semester(request.getSemester())
                .section(request.getSection())
                .role(request.getRole())
                .build();

        userRepository.save(user);

        return new AuthResponse("User Registered Successfully");
    }
}