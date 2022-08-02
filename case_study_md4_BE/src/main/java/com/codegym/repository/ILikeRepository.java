package com.codegym.repository;

import com.codegym.models.Likes;
import org.springframework.data.repository.CrudRepository;

public interface ILikeRepository extends CrudRepository<Likes, Long> {
}
