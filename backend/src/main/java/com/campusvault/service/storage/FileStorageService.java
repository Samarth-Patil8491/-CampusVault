package com.campusvault.service.storage;

import org.springframework.core.io.Resource;
import org.springframework.web.multipart.MultipartFile;

public interface FileStorageService {

    String storeFile(MultipartFile file) throws Exception;

    Resource loadFile(String fileName) throws Exception;
}