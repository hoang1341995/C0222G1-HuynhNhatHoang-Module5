import {Component, OnInit} from '@angular/core';
import {Iticket} from '../iticket';
import {TicketService} from '../ticket.service';
import {ToastrService} from 'ngx-toastr';
import {any} from 'codelyzer/util/function';
import {TicketDeleteComponent} from '../ticket-delete/ticket-delete.component';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent implements OnInit {

  totalLength: any;
  page = 1;
  ticketList: Iticket[] = [];
  data: Map<string, any> = new Map<string, any>();


  constructor(private ticketService: TicketService, private toartrs: ToastrService) {
  }

  ngOnInit(): void {
    this.checkData();
    this.getListTicket();
  }

  checkData() {
    this.ticketService.checkData.subscribe(value => {
      if (value !== undefined) {
        this.data = value;
        if (this.data.has('list')) {
          this.toartrs.success(this.data.get('list'), 'THÔNG BÁO');
          this.getListTicket();
        }

        if (this.data.has('search')) {
          if (this.data.get('search').length == 0) {
            this.toartrs.error('Không tìm thấy', 'THÔNG BÁO');
            this.getListTicket();
          } else {
            this.ticketList = this.data.get('search');
          }
        }
      }
    });
  }

  sendData(key: string, value: any) {
    this.ticketService.sendData(key , value);
  }

  getListTicket() {
    this.ticketService.getListTicket().subscribe(value => {
      this.ticketList = value;
      this.totalLength = value.length;
    });
  }

}
