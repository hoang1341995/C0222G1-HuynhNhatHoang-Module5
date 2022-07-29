import {Component, OnInit} from '@angular/core';
import {Iticket} from '../iticket';
import {TicketService} from '../ticket.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent implements OnInit {

  totalLength: any;
  page = 1;
  ticketList: Iticket[] = [];

  constructor(private ticketService: TicketService, private toartrs: ToastrService) {
  }

  ngOnInit(): void {
    this.getListFromSearch();
    this.getListTicket();
    this.reloadList();
  }

  getListTicket() {
    this.ticketService.getListTicket().subscribe(value => {
      this.ticketList = value;
      this.totalLength = value.length;
    });
  }

  reloadList() {
    this.ticketService.dataChannelLoadList.subscribe(value => {
      if (value !== undefined) {
        this.toartrs.success(value, 'THÔNG BÁO');
        this.getListTicket();
      }
    });
  }

  sendDataForOrder(tickets: Iticket) {
    this.ticketService.dataFormListToOrder(tickets);
  }

  getListFromSearch() {
    this.ticketService.dataSearchForList.subscribe(value => {
      if (value !== undefined) {
        if (value.length == 0) {
          this.toartrs.error('Không tìm thấy');
          this.getListTicket();
        } else {
          this.ticketList = value;
        }
      }
    });
  }
}
