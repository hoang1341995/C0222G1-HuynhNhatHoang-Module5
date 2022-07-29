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
  data: Map<string, any> = new Map<string, any>();

  constructor(private ticketService: TicketService, private toartrs: ToastrService) {
  }

  ngOnInit(): void {
    this.checkData();
  }

  checkData() {
    this.ticketService.checkData.subscribe(value => {
      if (value !== undefined) {
        this.data = value;
        if (this.data.has('order')) {
          this.ticket = this.data.get('order');
        }
      }
    });
  }

  sendData(key: string, value: any) {
    this.ticketService.sendData(key, value);
  }

  confirmOrder() {
    console.log(this.ticket);
    if (this.ticket.count < 1) {
      this.toartrs.error('Đã hết vé', 'THÔNG BÁO');
    } else {
      this.ticket.count = this.ticket.count - 1;
      this.ticketService.oderCar(this.ticket).subscribe(value => {
        this.sendData('list', 'Đặt vé thành công');
      });
    }

  }
}
