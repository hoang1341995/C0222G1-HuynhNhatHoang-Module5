package com.example.springexammodule5.controller;

import com.example.springexammodule5.model.Car;
import com.example.springexammodule5.model.Ticket;
import com.example.springexammodule5.service.ICarService;
import com.example.springexammodule5.service.ITicketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:4200")
public class TicketRestController {

    @Autowired
    private ITicketService iTicketService;

    @Autowired
    private ICarService iCarService;


    @GetMapping(value = "/findAllTicket")
    public ResponseEntity<?> findAllTicket() {
        List<Ticket> list = iTicketService.findAll();
        return new ResponseEntity<>(list, HttpStatus.OK);
    }

    @GetMapping(value = "/findAllCar")
    public ResponseEntity<?> findAllCar() {
        List<Car> list = iCarService.findAll();
        return new ResponseEntity<>(list, HttpStatus.OK);
    }

    @PostMapping(value = "/createTicket")
    public ResponseEntity<?> createTicket(@RequestBody Ticket ticket) {
        iTicketService.save(ticket);
        List<Ticket> list = iTicketService.findAll();
        return new ResponseEntity<>(list, HttpStatus.OK);
    }

    @PutMapping(value = "/orderTicket")
    public ResponseEntity<?> orderTicket(@RequestBody Ticket ticket) {
        iTicketService.save(ticket);
        List<Ticket> list = iTicketService.findAll();
        return new ResponseEntity<>(list, HttpStatus.OK);
    }

    @GetMapping(value = "/search")
    public ResponseEntity<?> search(@RequestParam(defaultValue = "") String startPoint,
                                    @RequestParam(defaultValue = "") String endPoint,
                                    @RequestParam(defaultValue = "") String startDate,
                                    @RequestParam(defaultValue = "") String endDate) {
        List<Ticket> list = iTicketService.search(startPoint,endPoint,startDate,endDate);
        return new ResponseEntity<>(list, HttpStatus.OK);
    }

    @DeleteMapping(value = "/deleteTicket/{id}")
    public ResponseEntity<?> delete(@PathVariable Integer id){
        System.out.println(id);
        iTicketService.remove(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }


}
