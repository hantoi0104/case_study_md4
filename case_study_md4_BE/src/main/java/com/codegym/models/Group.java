package com.codegym.models;

import lombok.Data;
import javax.persistence.*;
import java.sql.Date;
import java.util.Set;

@Entity
@Data
@Table(name = "groupsss")
public class Group {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private  long id;
    @ManyToOne
    private Account acc_admin;
    private String groupName;
    @ManyToMany(fetch = FetchType.EAGER)
    private Set<Account> accounts;
    private String coverGroupImg;
    private Date gCreate;
}
