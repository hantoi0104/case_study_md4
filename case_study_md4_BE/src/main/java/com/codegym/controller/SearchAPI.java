package com.codegym.controller;

import com.codegym.models.Account;
import com.codegym.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.persistence.Column;
import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/search")
public class SearchAPI {
    @Autowired
    AccountService accountService;
    @GetMapping("/acc/{name}")
    public List<Account>  searchAcc(@PathVariable String name){
        return accountService.searchByName(name);
    }


}
