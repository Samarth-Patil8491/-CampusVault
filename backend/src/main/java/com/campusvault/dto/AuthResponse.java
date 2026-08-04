package com.campusvault.dto;

import com.campusvault.entity.Role;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class AuthResponse {

    private String message;

    private String token;

    private String email;

    private String fullName;

    private Role role;

    private String department;

    private Integer semester;

}