package com.codegym.controller;

import com.codegym.models.Comment;
import com.codegym.service.CommentService;
import com.codegym.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/comment")
public class CommentAPI {
    @Autowired
    UserAPI userAPI;
    @Autowired
    CommentService commentService;

    @Autowired
    PostService postService;

    @PostMapping
    public Comment addCMT(@RequestBody Comment comment){
        comment.setAccount(userAPI.getAccount());
        Date timeCMT=new Date();
        comment.setDate(timeCMT);
        commentService.save(comment);
        return comment;
    }

    @GetMapping("/{id}")
    public Page<Comment> getCMTbyPost(@PathVariable long id,@RequestParam int size){
        return commentService.findByPost(postService.findById(id), PageRequest.of(0,size));
    }

    @GetMapping("/recmt/{id}")
    public List<Comment> getCMTbyCMT(@PathVariable long id){
        List<Comment> comments=commentService.findbyCMT(commentService.findByID(id));
        return comments;
    }
    @GetMapping("/dembl/{id}")
    public int countCMTBypost(@PathVariable long id){
        return commentService.countCMT(postService.findById(id));
    }
    @GetMapping("/dembl/cmt/{id}")
    public int countCMTByCMT(@PathVariable long id){
        return commentService.countCMTbyCMT(commentService.findByID(id));
    }
    @GetMapping("/demblver2/{id}")
    public int countCMTBypostVer2(@PathVariable long id){
        return commentService.countCMTByPost(postService.findById(id));
    }

}
