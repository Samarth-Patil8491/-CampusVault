package com.campusvault.service;

import com.campusvault.dto.AuthResponse;
import com.campusvault.dto.RegisterRequest;

public interface AuthService {

    AuthResponse register(RegisterRequest request);

}