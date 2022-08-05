package com.codegym.service;

import com.codegym.models.Comment;
import com.codegym.models.Post;
import com.codegym.repository.ICommentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.lang.reflect.Array;
import java.util.ArrayList;

@Service
public class CommentService {
    @Autowired
    ICommentRepository iCommentRepository;


    public void save(Comment comment){
        iCommentRepository.save(comment);
    }


    public Page<Comment> findByPost(Post post, Pageable pageable){
        Page<Comment> comments=iCommentRepository.findAllByPostOrderByDateDesc(post,pageable);
        return comments;
    }
    public Comment findByID(long id){
        return iCommentRepository.findById(id).get();
    }

    public Page<Comment> findbyCMT(Comment comment, Pageable pageable){
        Page<Comment> comments=iCommentRepository.findAllByCommentOrderByDateDesc(comment,pageable);
        return comments;
    }

    public int countCMT(Post post){
        ArrayList<Comment> comments=iCommentRepository.findAllByPost(post);
        int tongcmt=comments.size();
        for (Comment c:comments
             ) {
            tongcmt+=countCMTbyCMT(c);
        }

        return  tongcmt;
    }
    public int countCMTbyCMT(Comment comment){
        return  iCommentRepository.countCommentByComment(comment);
    }
}
