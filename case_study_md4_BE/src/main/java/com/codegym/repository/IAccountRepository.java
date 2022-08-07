package com.codegym.repository;

import com.codegym.models.Account;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface IAccountRepository extends CrudRepository<Account, Long> {
    Account findByEmail(String email);
    List<Account> findAllByFullNameContainingIgnoreCase(String name);
}
