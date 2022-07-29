package com.example.springexammodule5.service.impl;

import com.example.springexammodule5.model.Car;
import com.example.springexammodule5.repository.ICarRepository;
import com.example.springexammodule5.service.ICarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class CarService implements ICarService {

    @Autowired
    private ICarRepository iCarRepository;

    @Override
    public List<Car> findAll() {
        return iCarRepository.findAll();
    }
}
