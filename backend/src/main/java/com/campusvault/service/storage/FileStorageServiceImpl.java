package com.campusvault.service.storage;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
public class FileStorageServiceImpl implements FileStorageService {

    @Value("${file.upload-dir}")
    private String uploadDir;

    @Override
    public String storeFile(MultipartFile file) throws Exception {

        Path path = Paths.get(uploadDir);

        if (!Files.exists(path)) {
            Files.createDirectories(path);
        }

        String fileName = file.getOriginalFilename();

        Files.copy(
                file.getInputStream(),
                path.resolve(fileName),
                StandardCopyOption.REPLACE_EXISTING);

        return fileName;
    }

    @Override
    public Resource loadFile(String fileName) throws Exception {

        Path path = Paths.get(uploadDir).resolve(fileName);

        Resource resource = new UrlResource(path.toUri());

        if (resource.exists() && resource.isReadable()) {
            return resource;
        }

        throw new RuntimeException("File not found: " + fileName);
    }
}