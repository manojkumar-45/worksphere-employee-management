package com.ems.ems_backend.service;

import com.ems.ems_backend.model.Employee;
import com.ems.ems_backend.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeService {

    @Autowired
    private EmployeeRepository repo;

    public List<Employee> getAll() {
        return repo.findAll();
    }

    public Employee add(Employee emp) {
        return repo.save(emp);
    }

    public Employee update(int id, Employee newEmp) {
        return repo.findById(id).map(emp -> {
            emp.setName(newEmp.getName());
            emp.setRole(newEmp.getRole());
            emp.setSalary(newEmp.getSalary());
            emp.setPhoneno(newEmp.getPhoneno());
            return repo.save(emp);
        }).orElse(null);
    }


    public void delete(int id) {
        repo.deleteById(id);
    }
}
