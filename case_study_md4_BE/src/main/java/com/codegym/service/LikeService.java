package com.codegym.service;

import com.codegym.models.Likes;
import com.codegym.models.Post;
import com.codegym.repository.ILikeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LikeService {
    @Autowired
    ILikeRepository iLikeRepository;
    @Autowired
    PostService postService;
    public void save(Likes like){
        iLikeRepository.save(like);
    }
    public void check(Likes likes){
        Likes likes1=iLikeRepository.findLikesByAccountAndPost(likes.getAccount(),postService.findById(likes.getPost().getId()));

        if (likes1==null){
            save(likes);
        }else
        {
            remove(likes1);
        }

    }

    public void remove(Likes likes){
        iLikeRepository.delete(likes);
    }
    public int countbyPost(Post post){
        return iLikeRepository.countLikesByPost(post);
    }
}
