package com.example.springexammodule5.model;

import javax.persistence.*;

@Entity(name = "ticket")
public class Ticket {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ticket_id")
    private Integer id;

    @Column(name = "ticket_price")
    private Integer price;

    @Column(name = "ticket_startPoint")
    private String startPoint;

    @Column(name = "ticket_endPoint")
    private String endPoint;

    @Column(name = "ticket_startDate", columnDefinition = "date")
    private String startDate;

    @Column(name = "ticket_startTime")
    private String startTime;

    @ManyToOne
    @JoinColumn(name = "car_code")
    private Car car;

    @Column(name = "ticket_count")
    private Integer count;

    public Ticket() {
    }

    public Ticket(Integer id, Integer price, String startPoint, String endPoint,
                  String startDate, String startTime, Car car, Integer count) {
        this.id = id;
        this.price = price;
        this.startPoint = startPoint;
        this.endPoint = endPoint;
        this.startDate = startDate;
        this.startTime = startTime;
        this.car = car;
        this.count = count;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getPrice() {
        return price;
    }

    public void setPrice(Integer price) {
        this.price = price;
    }

    public String getStartPoint() {
        return startPoint;
    }

    public void setStartPoint(String startPoint) {
        this.startPoint = startPoint;
    }

    public String getEndPoint() {
        return endPoint;
    }

    public void setEndPoint(String endPoint) {
        this.endPoint = endPoint;
    }

    public String getStartDate() {
        return startDate;
    }

    public void setStartDate(String startDate) {
        this.startDate = startDate;
    }

    public String getStartTime() {
        return startTime;
    }

    public void setStartTime(String startTime) {
        this.startTime = startTime;
    }

    public Car getCar() {
        return car;
    }

    public void setCar(Car car) {
        this.car = car;
    }

    public Integer getCount() {
        return count;
    }

    public void setCount(Integer count) {
        this.count = count;
    }
}
