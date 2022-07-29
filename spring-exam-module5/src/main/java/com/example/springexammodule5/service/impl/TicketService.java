package com.example.springexammodule5.service.impl;

import com.example.springexammodule5.model.Ticket;
import com.example.springexammodule5.repository.ITicketRepository;
import com.example.springexammodule5.service.ITicketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;
import java.util.Optional;

@Service
public class TicketService implements ITicketService {

    @Autowired
    private ITicketRepository iTicketRepository;

    @Override
    public List<Ticket> findAll() {
        return iTicketRepository.findAll();
    }

    @Override
    public void save(Ticket ticket) {
        iTicketRepository.save(ticket);
    }

    @Override
    public Optional<Ticket> findById(Integer id) {
        return iTicketRepository.findById(id);
    }

    @Override
    public void update(Ticket ticket) {
        iTicketRepository.save(ticket);
    }

    @Override
    public void remove(Integer id) {
        iTicketRepository.deleteById(id);
    }

    @Override
    public List<Ticket> search(@RequestParam(defaultValue = "") String startPoint,
                               @RequestParam(defaultValue = "") String endPoint,
                               @RequestParam(defaultValue = "") String startDate,
                               @RequestParam(defaultValue = "") String endDate) {
        if (startDate.equals("")){
            startDate = "1900-01-01";
        }
        if (endDate.equals("")){
            endDate = "3000-01-01";
        }
        return iTicketRepository.search("%"+startPoint+"%","%"+endPoint+"%",startDate,endDate);
    }
}
