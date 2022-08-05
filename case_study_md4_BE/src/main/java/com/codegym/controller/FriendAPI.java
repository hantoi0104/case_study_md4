package com.codegym.controller;

import com.codegym.models.Account;
import com.codegym.service.AccountService;
import com.codegym.service.RelationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/user")
public class FriendAPI {
//    @Autowired
//    RelationService relationService;
//
//    @Autowired
//    AccountService accountService;
//    UserDetails userDetails = (UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
//
//    @GetMapping
//    public List<Account> getFriendOfAccount() {
//        return relationService.findFriendOfAccount(accountService.findByEmail(userDetails.getUsername()));
//    }
}
