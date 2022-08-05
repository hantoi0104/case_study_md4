package com.codegym.repository;

import com.codegym.models.Account;
import com.codegym.models.Likes;
import com.codegym.models.Post;
import org.springframework.data.repository.CrudRepository;

public interface ILikeRepository extends CrudRepository<Likes, Long> {
    Likes findLikesByAccountAndPost(Account account, Post post);
    int countLikesByPost(Post post);
}
