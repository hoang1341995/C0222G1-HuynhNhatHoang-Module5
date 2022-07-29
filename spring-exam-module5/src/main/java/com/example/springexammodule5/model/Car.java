package com.example.springexammodule5.model;
import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;
import java.util.Set;

@Entity(name = "car")
public class Car {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "car_code")
    private Integer code;

    @Column(name = "car_name")
    private String name;

    @OneToMany(mappedBy = "car")
    @JsonBackReference(value = "car")
    private Set<Ticket> tickets;

    public Car() {
    }

    public Car(Integer code, String name, Set<Ticket> tickets) {
        this.code = code;
        this.name = name;
        this.tickets = tickets;
    }

    public Integer getCode() {
        return code;
    }

    public void setCode(Integer code) {
        this.code = code;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Set<Ticket> getTickets() {
        return tickets;
    }

    public void setTickets(Set<Ticket> tickets) {
        this.tickets = tickets;
    }
}
