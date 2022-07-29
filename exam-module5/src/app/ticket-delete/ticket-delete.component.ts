import {Component, OnInit} from '@angular/core';
import {TicketService} from '../ticket.service';
import {Iticket} from '../iticket';

@Component({
  selector: 'app-ticket-delete',
  templateUrl: './ticket-delete.component.html',
  styleUrls: ['./ticket-delete.component.css']
})
export class TicketDeleteComponent implements OnInit {

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

  constructor(private ticketService: TicketService) {
  }

  ngOnInit(): void {
    this.checkData();
  }

  checkData() {
    this.ticketService.checkData.subscribe(value => {
      if (value !== undefined) {
        this.data = value;
        if (this.data.has('delete') !== undefined) {
          this.ticket = this.data.get('delete');

        }
      }
    });
  }

  sendData(key: string, value: any) {
    this.ticketService.sendData(key, value);
  }

  delete() {
    this.ticketService.deleteTicket(this.ticket).subscribe(value => {
      this.sendData('list', 'Xóa thành công');
    });
  }
}
