package com.example.demo.modal;


import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@Entity
@Table(name ="Emp_Qualification")
public class EmployeeQualification {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String marks;

    @ManyToOne
    @JoinColumn(name = "q_id", referencedColumnName = "id")
    private Qualification qualification;

    public EmployeeQualification() {
    }

    public EmployeeQualification(String marks) {
        this.marks = marks;
    }

    public String getMarks() {
        return marks;
    }

    public void setMarks(String marks) {
        this.marks = marks;
    }


    public Qualification getQualification() {
        return qualification;
    }

    public void setQualification(Qualification qualification) {
        this.qualification = qualification;
    }
}
