package com.codegym.models;

import lombok.Data;

import javax.persistence.*;
import java.sql.Date;

@Entity
@Data
public class Comment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @ManyToOne
    private Account account;
    @ManyToOne
    private Post post;
    @ManyToOne
    private Comment comment;
    @Column(length = 10000000)
    private String content;
    private Date date;

}
