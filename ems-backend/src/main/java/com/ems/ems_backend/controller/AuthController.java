package com.ems.ems_backend.controller;

import com.ems.ems_backend.config.JwtUtil;
import com.ems.ems_backend.model.Admin;
import com.ems.ems_backend.service.AdminService;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
@CrossOrigin(origins = "http://localhost:5173")
public class AuthController {

    @Autowired
    private AdminService service;

    @Autowired
    private JwtUtil jwtUtil;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest req) {

        Admin admin = service.findByUsername(req.getUsername());

        if (admin == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid username");
        }

        if (!service.checkPassword(req.getPassword(), admin.getPassword())) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid password");
        }

        String token = jwtUtil.generateToken(admin.getUsername());

        return ResponseEntity.ok(token);
    }




}

@Data
class LoginRequest {
    private String username;
    private String password;
}
