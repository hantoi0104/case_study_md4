package com.codegym.service;

import com.codegym.controller.UserAPI;
import com.codegym.models.Account;
import com.codegym.models.Group;
import com.codegym.repository.IGroupRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class GroupService {
    @Autowired
    IGroupRepository iGroupRepository;
    @Autowired
    UserAPI userAPI;

    public List<Group> getAllByAcc(Account account){
        List<Group> groups=iGroupRepository.getGroupsByAdmin(account);
        return groups;
    }
    public List<Group> getAllGroupByAcc(){
        return iGroupRepository.getAllGroup();
    }
    public List<Group> getAllGroup(){
        return iGroupRepository.getAllGroup();
    }

    public void save(Group group){
        iGroupRepository.save(group);
    }

    public void delete(long id){
        iGroupRepository.deleteById(id);
    }

    public Group findById(long id){
        return iGroupRepository.findById(id).get();
    }

    public List<Group> findByName(String name) {
        return iGroupRepository.findAllByGroupNameContainingIgnoreCase(name);
    }

    public boolean check(Group group){
        long    idG=group.getAdmin().getId();
        long    idAcc=userAPI.getAccount().getId();
            if (idG==idAcc){
                return false;
            }else {
                List<Group> groups=iGroupRepository.findGroupsByAccounts(userAPI.getAccount());
                for (Group g :
                        groups) {
                    if (g.getId()==idG){
                        return false;
                    }
                }
            }
        return true;

    }



}
