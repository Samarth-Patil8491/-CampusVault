package com.campusvault.service;

import com.campusvault.dto.AuthResponse;
import com.campusvault.dto.LoginRequest;
import com.campusvault.dto.RegisterRequest;

public interface AuthService {

    AuthResponse register(RegisterRequest request);

    AuthResponse login(LoginRequest request);

}