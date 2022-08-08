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
import java.util.List;


@RestController
@CrossOrigin("*")
@RequestMapping("/groups")
public class GroupAPI {
    @Autowired
    GroupService groupService;
    @Autowired
    UserAPI userAPI;

    @GetMapping("/GroupAcc")
    public List<Group> getAllByUser() {
        Account account=userAPI.getAccount();
        return groupService.getAllByAcc(account);
    }
    @GetMapping
    public List<Group> getAllGroup() {
        return groupService.getAllGroup();
    }

    @PostMapping
    public void save(@RequestBody Group group){
        group.setAdmin(userAPI.getAccount());
        groupService.save(group);
    }

    @PostMapping("/coverGroupImg")
    public String coverGroupImg(@RequestParam MultipartFile file){
        String name = file.getOriginalFilename();
        try {
            FileCopyUtils.copy(file.getBytes(),new File("/mnt/54805B1C158071A5/JetBrain-CodeGym/CodeGym_AllModule_Courseware/Module4_CG/Week4/case_study_md4/case_study_md4_FE/assets/img/imgGroup/" + name));
        }catch (IOException e){
            e.printStackTrace();
        }
        return "/case_study_md4_FE/assets/img/imgGroup/"+name;
    }

    @GetMapping("/delete/{id}")
    public void delete(@PathVariable long id){
        groupService.delete(id);
    }

    @GetMapping("/{id}")
    public Group finById(@PathVariable long id){
        return groupService.findById(id);
    }

    @PostMapping("/edit")
    public void edit(@RequestBody Group group){
        group.setAdmin(userAPI.getAccount());
        groupService.save(group);
    }

    @GetMapping("/search")
    public List<Group> findByName(@RequestParam(defaultValue = "") String name){
        return groupService.findByName(name);
    }
}

