package com.campusvault.controller;

import java.util.List;

import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import com.campusvault.dto.NoteResponse;
import com.campusvault.entity.Note;
import com.campusvault.service.NoteService;

@RestController
@RequestMapping("/api/notes")
@CrossOrigin("*")
public class NoteController {

    private final NoteService noteService;

    public NoteController(NoteService noteService) {
        this.noteService = noteService;
    }

    @PostMapping("/upload")
    public NoteResponse uploadNote(
            @RequestParam String title,
            @RequestParam String subject,
            @RequestParam String department,
            @RequestParam Integer semester,
            @RequestParam String uploadedBy,
            @RequestParam("file") MultipartFile file) throws Exception {

        return noteService.uploadNote(
                title,
                subject,
                department,
                semester,
                uploadedBy,
                file);
    }

    @GetMapping
    public List<Note> getAllNotes() {
        return noteService.getAllNotes();
    }

    @GetMapping("/search")
    public List<Note> searchNotes(
            @RequestParam(required = false) String department,
            @RequestParam(required = false) Integer semester,
            @RequestParam(required = false) String subject) {

        return noteService.searchNotes(department, semester, subject);
    }
}