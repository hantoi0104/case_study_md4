package com.codegym.repository;

import com.codegym.models.Account;
import com.codegym.models.Post;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface IPostRepository extends PagingAndSortingRepository<Post, Long> {
    Page<Post> findAllByAccountOrderByDatePostDesc(Account account, Pageable pageable);


}
