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
@RequestMapping("/api/friend")
public class FriendAPI {
    @Autowired
    RelationService relationService;

    @Autowired
    AccountService accountService;

    @GetMapping
    public List<Account> getFriendOfAccount() {
        UserDetails userDetails = (UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        List<Account> accounts = relationService.findFriendOfAccount(accountService.findByEmail(userDetails.getUsername()));
        System.out.println(accounts);
        return accounts;
    }
}
