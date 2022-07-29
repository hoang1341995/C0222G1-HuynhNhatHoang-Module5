import {Component, OnInit} from '@angular/core';
import {TicketService} from '../ticket.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-ticket-search',
  templateUrl: './ticket-search.component.html',
  styleUrls: ['./ticket-search.component.css']
})
export class TicketSearchComponent implements OnInit {

  startPoint = '';
  endPoint = '';
  startDate = '';
  endDate = '';

  constructor(private ticketService: TicketService) {

  }

  ngOnInit(): void {
  }

  search() {
    console.log(this.startPoint);
    console.log(this.endPoint);
    console.log(this.startDate);
    console.log(this.endDate);
    this.ticketService.searchTicket(this.startPoint, this.endPoint, this.startDate, this.endDate).subscribe(value => {
      this.ticketService.dataSearchToList(value);
    });
  }

}