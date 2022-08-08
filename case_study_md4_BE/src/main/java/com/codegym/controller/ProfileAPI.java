package com.codegym.controller;

import com.codegym.models.Account;
import com.codegym.models.Profile;
import com.codegym.service.AccountService;
import com.codegym.service.ProfileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/profile")
public class ProfileAPI {
    @Autowired
    AccountService accountService;
    @Autowired
    ProfileService profileService;

    @GetMapping()
    public Profile getProfileOfAccount (){
        UserDetails userDetails = (UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        Account account = accountService.findByEmail(userDetails.getUsername());
        Profile profile = profileService.getProFileOfAccount(account);
        return profile;
    }

}