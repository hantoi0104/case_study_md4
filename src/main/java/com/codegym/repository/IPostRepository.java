package com.codegym.repository;

import com.codegym.models.Post;
import org.springframework.data.repository.CrudRepository;

public interface IPostRepository extends CrudRepository<Post, Long> {
}
