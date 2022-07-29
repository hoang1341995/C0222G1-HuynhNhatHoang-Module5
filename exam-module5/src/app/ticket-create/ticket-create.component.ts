import {Component, OnInit} from '@angular/core';
import {TicketService} from '../ticket.service';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {Icar} from '../icar';
import {Iticket} from '../iticket';

@Component({
  selector: 'app-ticket-create',
  templateUrl: './ticket-create.component.html',
  styleUrls: ['./ticket-create.component.css']
})
export class TicketCreateComponent implements OnInit {

  carList: Icar[] = [];
  tickerForm: FormGroup;
  data: Map<string, any> = new Map<string, any>();
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

  constructor(private ticketService: TicketService) {
  }

  ngOnInit(): void {
    this.getListCar();
    this.tickerForm = new FormGroup({
      id: new FormControl(),
      price: new FormControl('', [Validators.required, this.checkNumber]),
      startPoint: new FormControl('', [Validators.required]),
      endPoint: new FormControl('', [Validators.required]),
      startDate: new FormControl('', [Validators.required, this.checkDate]),
      startTime: new FormControl('', [Validators.required]),
      car: new FormGroup({
        code: new FormControl(1),
        name: new FormControl()
      }),
      count: new FormControl('', [Validators.required, this.checkNumber])
    });
  }

  getListCar() {
    this.ticketService.getListCar().subscribe(value => {
      this.carList = value;
    });
  }

  saveTicket() {
    this.ticket = this.tickerForm.value;
    for (const cars of this.carList) {
      if (cars.code == this.ticket.car.code) {
        this.ticket.car.name = cars.name;
        break;
      }
    }
    this.ticketService.createTicket(this.ticket).subscribe(value => {
      this.ticketService.sendData('list', 'Thêm mới thành công');
    });
  }

  checkNumber(abstractControl: AbstractControl): any {
    return abstractControl.value > 0 ? null : {numbererror: true};
  }

  checkDate(abstractControl: AbstractControl): any {
    const date = new Date(abstractControl.value);
    const now = new Date();
    if (date > now) {
      return null;
    } else {
      return {date: true};
    }
  }

}
