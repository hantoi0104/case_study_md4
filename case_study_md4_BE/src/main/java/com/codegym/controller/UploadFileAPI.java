package com.codegym.controller;

import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;

@RestController
@CrossOrigin("*")
@RequestMapping("/upfile")
public class UploadFileAPI {
    @PostMapping
    public String upImg(@RequestParam MultipartFile file){
        String name = file.getOriginalFilename();
        try {
            FileCopyUtils.copy(file.getBytes(),new File("/home/hauhc1203/Desktop/case_study_md4/case_study_md4_FE/assets/img/post" + name));
        } catch (IOException e) {
            e.printStackTrace();
        }
        return "../img/post/"+name;
    }
}
