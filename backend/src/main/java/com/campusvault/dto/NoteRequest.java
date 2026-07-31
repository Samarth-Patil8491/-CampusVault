package com.campusvault.dto;

import lombok.Data;

@Data
public class NoteRequest {

    private String title;
    private String subject;
    private String department;
    private Integer semester;
    private String fileName;
    private String uploadedBy;
}