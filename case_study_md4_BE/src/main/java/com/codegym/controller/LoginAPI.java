package com.codegym.controller;

import com.codegym.models.Account;
import com.codegym.service.JwtService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("*")
public class LoginAPI {
    @Autowired
    JwtService jwtService;

    @Autowired
    private AuthenticationManager authenticationManager;

    @PostMapping("/api/login")
    public String login(@RequestBody Account account){
        try {
            // Tạo ra 1 đối tượng Authentication.
            Authentication authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(account.getEmail(),account.getPassWord()));
            SecurityContextHolder.getContext().setAuthentication(authentication);
            String token = jwtService.createToken(authentication);
            return token;
        } catch (Exception e) {

            return e.getMessage();
        }

    }
}
