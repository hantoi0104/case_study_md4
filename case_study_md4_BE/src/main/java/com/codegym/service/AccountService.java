package com.codegym.service;

import com.codegym.models.Account;
import com.codegym.repository.IAccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class AccountService implements UserDetailsService {
    @Autowired
    IAccountRepository iAccountRepository;
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
       Account account = iAccountRepository.findByEmail(username);
       return  new User(account.getEmail(), account.getPassWord(), account.getRoles());
    }

    public Account findByEmail(String email){
        return iAccountRepository.findByEmail(email);
    }

    public List<Account> getAll(){
        return (List<Account>) iAccountRepository.findAll();
    }
    public Account save(Account account){
        return iAccountRepository.save(account);
    }

    public List<Account> finByFullName(String fullName){
        return iAccountRepository.findAllByFullNameContaining(fullName);
    }
}
