package com.codegym.models;
import lombok.Data;
import javax.persistence.*;

@Entity
@Data
public class Relationship {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @ManyToOne
    private Account account1;
    @ManyToOne
    private Account account2;
    private String relation;
}
