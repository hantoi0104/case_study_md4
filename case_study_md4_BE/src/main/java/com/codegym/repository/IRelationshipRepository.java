package com.codegym.repository;

import com.codegym.models.Account;
import com.codegym.models.Relationship;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface IRelationshipRepository extends CrudRepository<Relationship, Long> {
    @Query(value = "select account1_id from relationship where account2_id =:id  \n" +
            "UNION \n" +
            "select  account2_id from relationship where account1_id =:id",nativeQuery = true)
    List<Long> findFriendOfAccount(@Param("id") long id);
}
