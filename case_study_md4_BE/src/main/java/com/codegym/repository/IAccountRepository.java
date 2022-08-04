package com.codegym.repository;

import com.codegym.models.Account;
import org.springframework.data.repository.CrudRepository;

public interface IAccountRepository extends CrudRepository<Account, Long> {
    Account findByEmail(String email);
}
