package com.codegym.service;
import com.codegym.models.Account;
import com.codegym.repository.IAccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AccountService implements UserDetailsService {
    @Autowired
    IAccountRepository iAccountRepository;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
       Account account = iAccountRepository.findByEmail(email);
        return new User(account.getEmail(), account.getPassWord(), account.getRoles());
    }

    public List<Account> getAll(){
        return (List<Account>) iAccountRepository.findAll();
    }
}