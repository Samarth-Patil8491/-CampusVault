package com.campusvault.service.impl;

import com.campusvault.dto.AuthResponse;
import com.campusvault.dto.LoginRequest;
import com.campusvault.dto.RegisterRequest;
import com.campusvault.entity.User;
import com.campusvault.repository.UserRepository;
import com.campusvault.service.AuthService;
import com.campusvault.util.JwtUtil;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthServiceImpl implements AuthService {

    private final UserRepository userRepository;
    private final JwtUtil jwtUtil;
    private final BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    public AuthServiceImpl(UserRepository userRepository, JwtUtil jwtUtil) {
        this.userRepository = userRepository;
        this.jwtUtil = jwtUtil;
    }

    @Override
    public AuthResponse register(RegisterRequest request) {

        if (userRepository.existsByEmail(request.getEmail())) {
            return new AuthResponse("Email already exists", null);
        }

        if (userRepository.existsByUsn(request.getUsn())) {
            return new AuthResponse("USN already exists", null);
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

        String token = jwtUtil.generateToken(user.getEmail());

        return new AuthResponse("User Registered Successfully", token);
    }

    @Override
    public AuthResponse login(LoginRequest request) {

        User user = userRepository.findByEmail(request.getEmail()).orElse(null);
        System.out.println("Login Email: " + request.getEmail());
        System.out.println("User Found: " + user);

        if (user == null) {
            return new AuthResponse("Invalid Email", null);
        }

        if (!passwordEncoder.matches(request.getPassword(), user.getPassword())) {
            return new AuthResponse("Invalid Password", null);
        }

        String token = jwtUtil.generateToken(user.getEmail());

        return new AuthResponse("Login Successful", token);
    }
}