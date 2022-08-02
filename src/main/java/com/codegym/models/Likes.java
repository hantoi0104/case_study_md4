package com.codegym.models;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
public class Likes {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToOne
    private Account account;
    @ManyToOne
    private Post post;
    @ManyToOne
    private Comment comment;
    @ManyToOne
    private Message message;



}
