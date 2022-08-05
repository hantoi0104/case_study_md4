package com.codegym.repository;

import com.codegym.models.Comment;
import com.codegym.models.Post;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.lang.reflect.Array;
import java.util.ArrayList;

public interface ICommentRepository  extends PagingAndSortingRepository<Comment,Long> {

    Page<Comment> findAllByPostOrderByDateDesc(Post post, Pageable pageable);

    ArrayList<Comment> findAllByPost(Post post);
    Page<Comment> findAllByCommentOrderByDateDesc(Comment comment, Pageable pageable);

    int countCommentByComment(Comment comment);
    int countCommentByPost(Post post);
}
