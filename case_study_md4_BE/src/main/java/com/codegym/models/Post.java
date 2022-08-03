package com.codegym.models;

import lombok.Data;

import javax.persistence.*;
import java.sql.Date;

import static java.time.LocalTime.now;

@Entity
@Data
public class Post  {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @ManyToOne
    private Account account;

    @Column(length = 10000000)
    private String content;
    @Column(length = 10000000)
    private String img;
    private boolean status=true;
    private Date datePost;

}
