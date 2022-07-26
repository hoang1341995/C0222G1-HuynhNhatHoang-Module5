import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CustomerService} from '../customer.service';

@Component({
  selector: 'app-search-customer',
  templateUrl: './search-customer.component.html',
  styleUrls: ['./search-customer.component.css']
})
export class SearchCustomerComponent implements OnInit {

  keyWork = '';
  @Output() eventEmitter = new EventEmitter();


  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {

  }

  searchCustomer() {
    this.eventEmitter.emit(this.keyWork);
  }

}
