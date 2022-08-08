package com.codegym.controller;

import com.codegym.models.Account;
import com.codegym.models.Message;
import com.codegym.service.AccountService;
import com.codegym.service.MessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/message")
public class MessageAPI {
    @Autowired
    AccountService accountService;
    @Autowired
    MessageService messageService;

    @GetMapping("/friend/{id}")
    public List<Message> friendMessageByFriend(@PathVariable long id) {
        UserDetails userDetails = (UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        Account admin = accountService.findByEmail(userDetails.getUsername());
        Account friend = accountService.findByID(id);
        List<Message> messageList = messageService.findMessageByFriend(admin.getId(), friend.getId());
        return messageList;
    }
}
