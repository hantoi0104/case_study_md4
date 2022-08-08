package com.codegym.service;

import com.codegym.models.Profile;
import com.codegym.repository.IProfileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service

public class ProfileService implements IProfileRepository {
    @Autowired
IProfileRepository iprofile ;


    @Override
    public Profile findById(Long id) {
        return iprofile.findById(id);
    }

    @Override
    public List<Profile> getAll() {
        return (List<Profile>) iprofile.getAll();
    }

    @Override
    public Profile save(Profile profile) {
     return iprofile.save(profile);

    }

    @Override
    public void delete(Long id) {
iprofile.delete(id);
    }
}
