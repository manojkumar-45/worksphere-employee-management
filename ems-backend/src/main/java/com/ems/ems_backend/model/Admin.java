package com.ems.ems_backend.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@Table(name = "admins")
@NoArgsConstructor      // <-- REQUIRED BY HIBERNATE
@AllArgsConstructor     // <-- OPTIONAL BUT OK
public class Admin {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(nullable = false)
    private String username;

    @Column(nullable = false)
    private String password;


    public Admin(String username, String password) {
        this.username = username;
        this.password = password;
    }
}
