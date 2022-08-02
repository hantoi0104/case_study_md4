package com.codegym.models;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
public class Account {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String email;
    private String fullName;
    private String passWord;
    @Column(length = 10000000)
    private String avatar;
    private boolean status;
}
