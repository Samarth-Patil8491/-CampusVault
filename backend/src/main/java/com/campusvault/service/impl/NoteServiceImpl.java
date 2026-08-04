package com.campusvault.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.campusvault.dto.NoteResponse;
import com.campusvault.entity.Note;
import com.campusvault.repository.NoteRepository;
import com.campusvault.service.NoteService;
import com.campusvault.service.storage.FileStorageService;

@Service
public class NoteServiceImpl implements NoteService {

    private final NoteRepository noteRepository;
    private final FileStorageService fileStorageService;

    public NoteServiceImpl(
            NoteRepository noteRepository,
            FileStorageService fileStorageService) {

        this.noteRepository = noteRepository;
        this.fileStorageService = fileStorageService;
    }

    // ==========================
    // Upload Note
    // ==========================

    @Override
    public NoteResponse uploadNote(
            String title,
            String subject,
            String department,
            Integer semester,
            String uploadedBy,
            MultipartFile file) throws Exception {

        String fileName = fileStorageService.storeFile(file);

        Note note = Note.builder()
                .title(title)
                .subject(subject)
                .department(department)
                .semester(semester)
                .uploadedBy(uploadedBy)
                .fileName(fileName)
                .build();

        noteRepository.save(note);

        return new NoteResponse("Note Uploaded Successfully");
    }

    // ==========================
    // Get All Notes
    // ==========================

    @Override
    public List<Note> getAllNotes() {
        return noteRepository.findAll();
    }

    // ==========================
    // Get Notes Uploaded By User
    // ==========================

    @Override
    public List<Note> getNotesByUploader(String email) {
        return noteRepository.findByUploadedBy(email);
    }

    // ==========================
    // Search Notes
    // ==========================

    @Override
    public List<Note> searchNotes(
            String department,
            Integer semester,
            String subject) {

        if (department != null && semester != null) {
            return noteRepository.findByDepartmentAndSemester(
                    department,
                    semester);
        }

        if (department != null) {
            return noteRepository.findByDepartment(department);
        }

        if (semester != null) {
            return noteRepository.findBySemester(semester);
        }

        if (subject != null) {
            return noteRepository.findBySubject(subject);
        }

        return noteRepository.findAll();
    }

    // ==========================
    // Update Note
    // ==========================

    @Override
    public Note updateNote(Long id, Note updatedNote) {

        Note note = noteRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Note Not Found"));

        note.setTitle(updatedNote.getTitle());
        note.setSubject(updatedNote.getSubject());
        note.setDepartment(updatedNote.getDepartment());
        note.setSemester(updatedNote.getSemester());

        return noteRepository.save(note);
    }

    // ==========================
    // Delete Note
    // ==========================

    @Override
    public void deleteNote(Long id) {

        if (!noteRepository.existsById(id)) {
            throw new RuntimeException("Note Not Found");
        }

        noteRepository.deleteById(id);
    }

}