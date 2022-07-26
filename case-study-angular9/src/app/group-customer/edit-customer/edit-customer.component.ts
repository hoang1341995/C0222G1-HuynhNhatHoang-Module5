import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Icustomer} from '../icustomer';
import {FormControl, FormGroup} from '@angular/forms';
import {CustomerService} from '../customer.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {

  customerForm: FormGroup;
  // @ts-ignore
  @Input() idCustomerEdit: string ;
  @Output() eventEmitter = new EventEmitter();
  @Output() eventSendIdCustomerEdit = new EventEmitter();
  customerEdit: Icustomer = {
    id: 0,
    code: '',
    name: '',
    customerType: {
      id: 0,
      name: ''
    },
    birthday: '',
    gender: 0,
    idCard: '',
    phone: '',
    email: '',
    address: ''
  };

  // @ts-ignore
  customerType: {
    id: number;
    name: string;
  }[];


  constructor(private customerService: CustomerService, private router: Router) {
    this.customerForm = new FormGroup({
      id: new FormControl(),
      code: new FormControl(),
      name: new FormControl(),
      customerType: new FormGroup({
        id: new FormControl(),
        name: new FormControl('')
      }),
      birthday: new FormControl(),
      gender: new FormControl(),
      idCard: new FormControl(),
      phone: new FormControl(),
      email: new FormControl(),
      address: new FormControl(),
    });
  }

  ngOnInit(): void {
    this.getListCustomerType();
  }

  async getIdCustomerEdit(id: string) {
    this.eventSendIdCustomerEdit.emit(id);
  }

  getListCustomerType() {
    this.customerService.getListCustomerType().subscribe(listCustomerType => {
      this.customerType = listCustomerType;
    });
  }

}
