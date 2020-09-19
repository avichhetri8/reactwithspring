package com.example.springwithreact.controller;



import com.example.springwithreact.modal.Employee;
import com.example.springwithreact.services.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;


import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class EmployeeController {

    @Autowired
    private EmployeeService employeeService;

    @GetMapping(value = "/show")
    public List<Employee> showEmployee(){
       return employeeService.getEmployees();
    }


    @PostMapping(value = "/add")
    public Employee saveEmployee(@RequestBody Employee employee){
        return employeeService.saveEmployee(employee);
    }

    @PutMapping(value = "/update/{id}")
    public Employee updateEmployee(@PathVariable Long id,  @RequestBody Employee employee){

        return employeeService.updateEmployee(id, employee);
    }

    @DeleteMapping(value = "/dalete/{id}")
    public List<Employee> deleteEmployee(@PathVariable Long id ){
        return employeeService.deleteEmployee(id);
    }

    @GetMapping(value = "/employee/{id}")
    public Employee getEmployeeById(@PathVariable Long id ){
        return employeeService.getEmployeeById(id);
    }
}
