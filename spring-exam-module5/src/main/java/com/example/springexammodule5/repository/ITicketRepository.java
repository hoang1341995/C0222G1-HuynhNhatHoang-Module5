package com.example.springexammodule5.repository;

import com.example.springexammodule5.model.Ticket;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ITicketRepository  extends JpaRepository<Ticket, Integer> {

    @Query(value = "SELECT * FROM ticket WHERE ticket_start_point LIKE :startPoint and ticket_end_point LIKE :endPoint and " +
                                              " ticket_start_date BETWEEN :startDate and :endDate"
                                                    , nativeQuery = true)
    List<Ticket> search(@Param("startPoint") String startPoint,
                        @Param("endPoint") String endPoint,
                        @Param("startDate") String startDate,
                        @Param("endDate") String endDate);

}
