package com.example.springexammodule5.repository;

import com.example.springexammodule5.model.Car;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ICarRepository extends JpaRepository<Car, Integer> {

    List<Car> findAll();
}
