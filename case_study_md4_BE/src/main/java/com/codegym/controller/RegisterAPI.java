package com.codegym.controller;

import com.codegym.models.Account;
import com.codegym.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin("*")

public class RegisterAPI {
    @Autowired
    AccountService accountService;
    @PostMapping("/api/register")
    public Account save(@RequestBody Account account){
        return accountService.save(account);
    }
}
