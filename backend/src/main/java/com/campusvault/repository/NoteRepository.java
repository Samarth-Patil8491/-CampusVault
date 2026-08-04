package com.campusvault.repository;

import com.campusvault.entity.Note;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface NoteRepository extends JpaRepository<Note, Long> {

    List<Note> findByDepartment(String department);

    List<Note> findBySemester(Integer semester);

    List<Note> findBySubject(String subject);

    List<Note> findByDepartmentAndSemester(String department, Integer semester);

List<Note> findByUploadedBy(String uploadedBy);
}