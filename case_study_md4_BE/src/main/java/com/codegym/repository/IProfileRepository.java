package com.codegym.repository;

import com.codegym.models.Profile;
import org.springframework.data.repository.CrudRepository;

public interface IProfileRepository extends CrudRepository<Profile, Long> {

}
