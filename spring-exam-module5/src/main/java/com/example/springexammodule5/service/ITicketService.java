package com.example.springexammodule5.service;

import com.example.springexammodule5.model.Ticket;

import java.util.List;
import java.util.Optional;

public interface ITicketService {

    List<Ticket> findAll();

    void save(Ticket customer);

    Optional<Ticket> findById(Integer id);

    void update(Ticket ticket);

    void remove(Integer id);

    List<Ticket> search(String startPoint,
                        String endPoint,
                        String startDate,
                        String endDate);
}
