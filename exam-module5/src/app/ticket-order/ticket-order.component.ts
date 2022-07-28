import {Component, OnInit} from '@angular/core';
import {TicketService} from '../ticket.service';
import {Iticket} from '../iticket';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-ticket-order',
  templateUrl: './ticket-order.component.html',
  styleUrls: ['./ticket-order.component.css']
})
export class TicketOrderComponent implements OnInit {

  ticket: Iticket = {
    id: 0,
    price: 0,
    startPoint: '',
    endPoint: '',
    startDate: '',
    startTime: '',
    car: {
      code: 1,
      name: ''
    },
    count: 0
  };

  constructor(private ticketService: TicketService, private toartrs: ToastrService) {
  }

  ngOnInit(): void {
    this.getDataFromList();
  }


  getDataFromList() {
    this.ticketService.obserData.subscribe(data => {
      if (data !== undefined) {
        this.ticket = data;
      }
    });
  }

  confirmOrder() {
    if (this.ticket.count < 1) {
      this.toartrs.error('Đã hết vé', 'THÔNG BÁO');
    } else {
      this.ticket.count = this.ticket.count - 1;
      this.ticketService.oderCar(this.ticket).subscribe(value => {
        this.ticketService.loadListTicket('Đặt vé Thành công');
      });
    }

  }
}
