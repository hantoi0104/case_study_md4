package com.codegym.service;

import com.codegym.models.Account;
import com.codegym.repository.IRelationshipRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class RelationService {
    @Autowired
    AccountService accountService;
    @Autowired
    IRelationshipRepository iRelationshipRepository;

     public List<Account> findFriendOfAccount (Account account){
         List<Account>  accounts = new ArrayList<>();
        List<Long> ids = iRelationshipRepository.findFriendOfAccount(account.getId());
         System.out.println(ids);
         for (long id:ids) {
            accounts.add(accountService.findByID(id));
             System.out.println(accountService.findByID(id));
         }
         System.out.println(accounts);
        return accounts;
     }
}
