package com.codegym.controller;

import com.codegym.models.Likes;
import com.codegym.service.LikeService;
import com.codegym.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
@RequestMapping("/like")
public class LikeAPI {
    @Autowired
    LikeService likeService;
    @Autowired
    UserAPI userAPI;
    @Autowired
    PostService postService;

    @PostMapping
    public void likeObject(@RequestBody Likes likes){
        likes.setAccount(userAPI.getAccount());
        likeService.check(likes);
    }


    @GetMapping("/{id}")
    public int count(@PathVariable long id){
        return likeService.countbyPost(postService.findById(id));
    }

}
