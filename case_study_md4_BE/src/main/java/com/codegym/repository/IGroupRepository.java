package com.codegym.repository;

import com.codegym.models.Account;
import com.codegym.models.Group;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface IGroupRepository extends CrudRepository<Group,Long> {
//    @Query(nativeQuery = true, value = "select * from groupsss where admin_id =:id;")
//    List<Group> asdasd(@Param("id") long id);

    List<Group> getGroupsByAdmin(Account account);

    @Query(nativeQuery = true, value = "SELECT * FROM case_study_md4.groupsss;")
    List<Group> getAllGroup();

    @Query(nativeQuery = true, value = "SELECT * FROM case_study_md4.groupsss where group_name like concat('%',:name,'%');")
    List<Group> findAllByNameContaining(String name);
}
