package com.campusvault.service;

import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.campusvault.dto.NoteResponse;
import com.campusvault.entity.Note;

public interface NoteService {

    // Upload Note
    NoteResponse uploadNote(
            String title,
            String subject,
            String department,
            Integer semester,
            String uploadedBy,
            MultipartFile file) throws Exception;

    // Get All Notes
    List<Note> getAllNotes();

    // Search Notes
    List<Note> searchNotes(
            String department,
            Integer semester,
            String subject);

    // Get Notes Uploaded By User
    List<Note> getNotesByUploader(String email);

    // Update Note
    Note updateNote(Long id, Note note);

    // Delete Note
    void deleteNote(Long id);

}