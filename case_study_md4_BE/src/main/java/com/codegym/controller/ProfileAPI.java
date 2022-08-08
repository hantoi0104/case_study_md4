package com.codegym.controller;

import com.codegym.models.Profile;
import com.codegym.service.ProfileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;

@RestController
@CrossOrigin("*")
@RequestMapping("/profile")
public class ProfileAPI  {
    @Autowired
    ProfileService profileService;
@PutMapping
    public Profile edit(@RequestBody Profile profile){
        return profileService.save(profile);
    }
    @DeleteMapping("/{id}")
    public void delete(@PathVariable long id){
    profileService.delete(id);
    }
    @GetMapping("/{id}")
    public Profile findById(@PathVariable long id){
    return profileService.findById(id);
    }
    @PostMapping("/upImg")
    public String upImg(@RequestParam MultipartFile file){
        String name = file.getOriginalFilename();
        try {
            FileCopyUtils.copy(file.getBytes(),new File("//" + name));
        } catch (IOException e) {
            e.printStackTrace();
        }
        return "/Demo/img/"+name;
    }

    }

