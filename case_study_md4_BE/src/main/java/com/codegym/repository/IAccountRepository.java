package com.codegym.repository;

import com.codegym.models.Account;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface IAccountRepository extends CrudRepository<Account, Long> {
    Account findByEmail(String email);

    @Query(nativeQuery = true, value = "SELECT * FROM case_study_md4.account where full_name like concat('%', :full_name,'%');")
    List<Account> findAllByFullNameContaining(String fullName);
}
