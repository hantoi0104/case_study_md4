package com.codegym.models;

import lombok.Data;
import javax.persistence.*;
import java.sql.Date;
import java.util.List;

@Entity
@Data
public class Group {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private  long id;
    @ManyToOne
    private Account admin;
    private String groupName;
    @ManyToMany(fetch = FetchType.EAGER)
    private List<Account> account;
    private String coverImg;
    private Date createDay;
}
