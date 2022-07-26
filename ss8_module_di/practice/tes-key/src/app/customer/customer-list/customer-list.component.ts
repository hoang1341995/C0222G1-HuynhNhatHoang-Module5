import {Component, OnInit} from '@angular/core';
import {Icustomer} from '../icustomer';
import {ServiceService} from '../../service.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customers: Icustomer[] = [];
  customerDelete: Icustomer = {
    id: 0,
    code: '',
    fullName: '',
    birthDay: '',
    gender: 0,
    idCard: '',
    phone: '',
    email: '',
    address: '',
    typeCustomer: {
      id: 1,
      name: 'Platinum'
    }
  };

  constructor(private service: ServiceService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.service.getAllCustomer().subscribe(value => {
      this.customers = value;
    });
  }
  deleteCustomer(id: number) {
    this.service.delete(id).subscribe(res => {
      this.getAll();
    });
  }

  getCustomerDelete(customer: Icustomer) {
    this.customerDelete = customer;
  }
}
