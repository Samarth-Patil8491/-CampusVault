package com.campusvault.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.campusvault.entity.User;

public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findByEmail(String email);

    Optional<User> findByUsn(String usn);

    boolean existsByEmail(String email);

    boolean existsByUsn(String usn);
}