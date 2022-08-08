package com.codegym.models;
import lombok.Data;

import javax.persistence.*;
import java.util.Date;

@Entity
@Data
public class Message{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @ManyToOne
    private Account sender;
    @ManyToOne
    private Account receiver;
    @Column(length = 10000000)
    private String message;
    private Date date;
}
