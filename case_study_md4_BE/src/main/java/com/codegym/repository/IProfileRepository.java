package com.codegym.repository;

import com.codegym.models.Account;
import com.codegym.models.Message;
import com.codegym.models.Profile;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface IProfileRepository extends CrudRepository<Profile, Long> {

}
