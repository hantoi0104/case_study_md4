package com.codegym.repository;

import com.codegym.models.Comment;
import com.codegym.models.Post;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.List;

public interface ICommentRepository  extends PagingAndSortingRepository<Comment,Long> {

    Page<Comment> findAllByPostOrderByDateDesc(Post post, Pageable pageable);

    ArrayList<Comment> findAllByPost(Post post);
    List<Comment> findAllByCommentOrderByDateAsc(Comment comment);

    int countCommentByComment(Comment comment);
    int countCommentByPost(Post post);
}
