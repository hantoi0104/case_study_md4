package com.codegym.service;

import com.codegym.models.Account;
import com.codegym.models.Post;
import com.codegym.repository.IPostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class PostService {
    @Autowired
    IPostRepository iPostRepository;

    public void save(Post post){
        iPostRepository.save(post);

    }
    public Post findById(long id){
        return iPostRepository.findById(id).get();
    }
    public Page<Post> findAllByAcc( Account account,Pageable pageable){
        return iPostRepository.findAllByAccountOrderByDatePostDesc(account,pageable);
    }

    public Page<Post> loadHome( Account account,Pageable pageable){
        return iPostRepository.findAllByAccountOrderByDatePostDesc(account,pageable);
    }


}
