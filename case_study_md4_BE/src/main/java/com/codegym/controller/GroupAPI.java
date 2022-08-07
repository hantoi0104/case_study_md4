package com.codegym.controller;

import com.codegym.models.Account;
import com.codegym.models.Group;
import com.codegym.service.GroupService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.Date;
import java.util.List;


@RestController
@CrossOrigin("*")
@RequestMapping("/groups")
public class GroupAPI {
    @Autowired
    GroupService groupService;
    @Autowired
    UserAPI userAPI;

    @GetMapping
    public List<Group> getAllByUser() {
        Account account=userAPI.getAccount();
        return groupService.getAllByAcc(account);
    }

    @PostMapping
    public void save(@RequestBody Group group){
        group.setAdmin(userAPI.getAccount());
        Date date=new Date();
        group.setGCreate(date);
        groupService.save(group);
    }

    @PostMapping("/coverGroupImg")
    public String coverGroupImg(@RequestParam MultipartFile file){
        String name = file.getOriginalFilename();
        try {
            FileCopyUtils.copy(file.getBytes(),new File("/home/hauhc1203/Desktop/case_study_md4/case_study_md4_FE/assets/img/imgGroup/" + name));
        }catch (IOException e){
            e.printStackTrace();
        }
        return "../assets/img/imgGroup/"+name;
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable long id){
        groupService.delete(id);
    }

    @GetMapping("/{id}")
    public Group finById(@PathVariable long id){
        return groupService.findById(id);
    }

    @PutMapping
    public void edit(@RequestBody Group group){
        groupService.save(group);
    }

    @GetMapping("/search")
    public List<Group> findByName(@RequestParam(defaultValue = "") String name){
        return groupService.findByName(name);
    }
}

