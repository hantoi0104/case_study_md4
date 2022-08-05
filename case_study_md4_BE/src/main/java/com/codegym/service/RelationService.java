package com.codegym.service;

import com.codegym.models.Account;
import com.codegym.repository.IRelationshipRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class RelationService {
    @Autowired
    IRelationshipRepository iRelationshipRepository;
     public List<Account> findFriendOfAccount (Account account){
         return iRelationshipRepository.findFriendOfAccount(account);
     }
}
