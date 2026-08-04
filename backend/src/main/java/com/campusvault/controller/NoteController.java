package com.campusvault.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
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

    // ==========================
    // Upload Note
    // ==========================

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

    // ==========================
    // Get All Notes
    // ==========================

    @GetMapping
    public List<Note> getAllNotes() {
        return noteService.getAllNotes();
    }

    // ==========================
    // Get Notes Uploaded By User
    // ==========================

    @GetMapping("/my/{email}")
    public ResponseEntity<List<Note>> getMyNotes(
            @PathVariable String email) {

        return ResponseEntity.ok(
                noteService.getNotesByUploader(email)
        );
    }

    // ==========================
    // Search Notes
    // ==========================

    @GetMapping("/search")
    public List<Note> searchNotes(
            @RequestParam(required = false) String department,
            @RequestParam(required = false) Integer semester,
            @RequestParam(required = false) String subject) {

        return noteService.searchNotes(
                department,
                semester,
                subject
        );
    }

    // ==========================
    // Update Note
    // ==========================

    @PutMapping("/{id}")
    public ResponseEntity<Note> updateNote(
            @PathVariable Long id,
            @RequestBody Note note) {

        return ResponseEntity.ok(
                noteService.updateNote(id, note)
        );
    }

    // ==========================
    // Delete Note
    // ==========================

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteNote(
            @PathVariable Long id) {

        noteService.deleteNote(id);

        return ResponseEntity.ok("Note Deleted Successfully");
    }

}