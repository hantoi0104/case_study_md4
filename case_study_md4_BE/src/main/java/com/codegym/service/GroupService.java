package com.codegym.service;

import com.codegym.models.Account;
import com.codegym.models.Group;
import com.codegym.repository.IGroupRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GroupService {
    @Autowired
    IGroupRepository iGroupRepository;
    public List<Group> getAllByAcc(Account account){
        List<Group> groups=iGroupRepository.getGroupsByAdmin(account);
        return groups;
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
        return iGroupRepository.findAllByNameContaining(name);
    }
}
