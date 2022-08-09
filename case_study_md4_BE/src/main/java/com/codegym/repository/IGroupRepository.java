package com.codegym.repository;

import com.codegym.models.Account;
import com.codegym.models.Group;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface IGroupRepository extends CrudRepository<Group,Long> {

    List<Group> getGroupsByAdmin(Account account);

    @Query(nativeQuery = true, value = "SELECT * FROM case_study_md4.groupsss;")
    List<Group> getAllGroup();

    List<Group> findAllByGroupNameContainingIgnoreCase(String name);

    List<Group> findGroupsByAccounts(Account account);

}
