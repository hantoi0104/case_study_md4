package com.codegym.repository;

import com.codegym.models.Account;
import com.codegym.models.Relationship;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface IRelationshipRepository extends CrudRepository<Relationship, Long> {
    @Query(value = "select account1 from relationship where account2 =: account \n" +
            "UNION \n" +
            "select  account2 from relationship where account1 =:account",nativeQuery = true)
    List<Account> findFriendOfAccount(@Param("account") Account account);
}
