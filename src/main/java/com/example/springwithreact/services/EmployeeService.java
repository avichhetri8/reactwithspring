package com.example.springwithreact.services;



import com.example.springwithreact.modal.Employee;
import com.example.springwithreact.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeService {

    @Autowired
    private EmployeeRepository employeeRepository;

    public List<Employee> addEmployee(Employee employee){
        employeeRepository.save(employee);
        return employeeRepository.findAll();
    }

    public Employee getEmployeeById(Long id){
        return employeeRepository.findById(id).get();
    }


    public List<Employee> getEmployees() {

        return employeeRepository.findAll();
    }

    public Employee saveEmployee(Employee employee) {
        return employeeRepository.save(employee);
    }

    public Employee updateEmployee(Long id, Employee employee) {
        Employee employee1 = employeeRepository.findById(id).get();
        employee1.setFirstName(employee.getFirstName());
        employee1.setLastName(employee.getLastName());
        employee1.setEmailId(employee.getEmailId());

        employeeRepository.save(employee1);
        return employeeRepository.findById(id).get();
    }

    public List<Employee> deleteEmployee(Long id) {
        employeeRepository.deleteById(id);
        return employeeRepository.findAll();
    }
}
