package com.campusvault.dto;

import com.campusvault.entity.Role;
import lombok.Data;

@Data
public class RegisterRequest {

    private String fullName;
    private String usn;
    private String email;
    private String password;
    private String university;
    private String department;
    private Integer semester;
    private String section;
    private Role role;
}