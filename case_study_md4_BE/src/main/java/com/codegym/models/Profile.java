package com.codegym.models;

import lombok.Data;

import javax.persistence.*;
import java.sql.Date;

@Entity
@Data
public class Profile {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @OneToOne Account account;
    private Date dateOfBirth;
    private String gender;
    private String coverImg;

    private int phoneNumber;
    private String country;
    private Date createDay;
}
