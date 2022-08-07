package com.codegym.controller;

import com.codegym.models.Account;
import com.codegym.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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

    @GetMapping("/api/register")
    public List<Account> getAll(){
        return accountService.getAll();
    }

    @GetMapping ("/api/register/search")
        public List<Account> search(@RequestParam(defaultValue = "") String fullName){
        return accountService.finByFullName(fullName);
    }


}
