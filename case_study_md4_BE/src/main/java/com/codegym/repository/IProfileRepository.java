package com.codegym.repository;

import com.codegym.models.Profile;

import java.util.List;

public interface IProfileRepository  {

    Profile findById(Long id);
    List<Profile> getAll();
Profile save(Profile profile);
    void delete(Long id);
}
