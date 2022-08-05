package com.codegym.models;

import lombok.Data;

import javax.persistence.*;
import java.util.Set;

@Entity
@Data
@Table(name = "groupsss")
public class Group {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @ManyToOne

    private Account admin;
    private String groupName;
    private String status;
    private String coverGroupImg;
    //    private Date gCreate;
    @Column(columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
    private java.sql.Timestamp gCreate;
    @ManyToMany(fetch = FetchType.EAGER)
    private Set<Account> accounts;
}
