package com.ems.ems_backend.service;

import com.ems.ems_backend.model.Admin;
import com.ems.ems_backend.repository.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AdminService {

    @Autowired
    private AdminRepository repo;

    @Autowired
    private PasswordEncoder encoder;

    public Admin findByUsername(String username) {
        return repo.findByUsername(username);
    }

    public boolean checkPassword(String raw, String encoded) {
        return encoder.matches(raw, encoded);
    }
}
