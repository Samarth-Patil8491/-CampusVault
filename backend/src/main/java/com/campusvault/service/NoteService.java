package com.campusvault.service;

import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.campusvault.dto.NoteResponse;
import com.campusvault.entity.Note;

public interface NoteService {

    NoteResponse uploadNote(
            String title,
            String subject,
            String department,
            Integer semester,
            String uploadedBy,
            MultipartFile file) throws Exception;

    List<Note> getAllNotes();

    List<Note> searchNotes(String department, Integer semester, String subject);
}