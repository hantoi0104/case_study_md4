package com.codegym.service;

import com.codegym.models.Account;
import com.codegym.models.Profile;
import com.codegym.repository.IProfileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class ProfileService  {
    @Autowired
    IProfileRepository iProfileRepository ;

    public Profile getProFileOfAccount(Account account){
        return iProfileRepository.findProfileByAccount( account);
    }

}