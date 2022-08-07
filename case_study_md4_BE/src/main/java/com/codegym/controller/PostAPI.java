package com.codegym.controller;

import com.codegym.models.Post;
import com.codegym.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.web.bind.annotation.*;



import java.util.Date;

@RestController
@CrossOrigin("*")
@RequestMapping("/post")
public class PostAPI {
    @Autowired
    UserAPI userAPI;
    @Autowired
    PostService postService;
    @PostMapping
    public void  createPost(@RequestBody Post post){
        Date date=new Date();
        post.setAccount(userAPI.getAccount());
        post.setDatePost(date);
        postService.save(post);


    }
    @GetMapping
    public Page<Post> getAllPost(){
        Page<Post> posts=postService.findAllByAcc(userAPI.getAccount(), PageRequest.of(0,5));
        return posts;
    }
    @GetMapping("/home/{sizeHome}")
    public Page<Post> loadPostforHome(@PathVariable int sizeHome){
        Page<Post> posts=postService.loadHome(userAPI.getAccount(), PageRequest.of(0,sizeHome));
        return posts;
    }

}
