import {Component, OnInit} from '@angular/core';
import {Icustomer} from '../icustomer';

import {CustomerService} from '../customer.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Title} from '@angular/platform-browser';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {


  customer: Icustomer = {
    id: 0,
    code:  '',
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

  customerForm: FormGroup;
  customerEditForm: FormGroup;

  customers: Icustomer[] = [];

  // @ts-ignore
  customerType: {
    id: number;
    name: string;
  }[];


  constructor(private customerService: CustomerService, private title: Title) {

    this.customerForm = new FormGroup({
      id: new FormControl(0),
      code: new FormControl('', [Validators.required, Validators.pattern('^KH(\\-)[0-9]{4}$')]),
      name: new FormControl('', [Validators.required, Validators.minLength(4)]),
      customerType: new FormGroup({
        id: new FormControl(1),
        name: new FormControl('')
      }),
      birthday: new FormControl('', [Validators.required, this.customerService.check18Age]),
      gender: new FormControl(0, Validators.required),
      idCard: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{9}$')]),
      phone: new FormControl('', [Validators.required, Validators.pattern('^(84|0[3|5|7|8|9])+([0-9]{8})$')]),
      email: new FormControl('', [Validators.required, Validators.email]),
      address: new FormControl('', [Validators.required, Validators.minLength(4)])
    });

    this.customerEditForm = new FormGroup({
      id: new FormControl(0),
      code: new FormControl('', [Validators.required, Validators.pattern('^KH(\\-)[0-9]{4}$')]),
      name: new FormControl('', [Validators.required, Validators.minLength(4)]),
      customerType: new FormGroup({
        id: new FormControl(1),
        name: new FormControl('')
      }),
      birthday: new FormControl('', [Validators.required, this.customerService.check18Age]),
      gender: new FormControl(0, Validators.required),
      idCard: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{9}$')]),
      phone: new FormControl('', [Validators.required, Validators.pattern('^(84|0[3|5|7|8|9])+([0-9]{8})$')]),
      email: new FormControl('', [Validators.required, Validators.email]),
      address: new FormControl('', [Validators.required, Validators.minLength(4)])
    });
  }

  ngOnInit(): void {
    this.title.setTitle('Khách hàng Furama Đà Nẵng');
    this.getListCustomer();
    this.getListCustomerType();
  }


  addNewCustomer() {
    console.log(this.customerForm);
    // @ts-ignore
    this.customerService.addNewCustomer(this.customerForm.value).subscribe(
      res => {
        this.loadList('addNew');
        alert('Thêm mới thành công');
      },
      err => {
        alert('Lỗi thêm mới khách hàng. lỗi: ' + err.status);
      }
    );
  }

  getListCustomer() {
    this.customerService.getListCustomer().subscribe(listCustomer => {
      this.customers = listCustomer;
    });
  }

  getListCustomerType() {
    this.customerService.getListCustomerType().subscribe(listCustomerType => {
      this.customerType = listCustomerType;
    });
  }

  loadList(_: any) {
    this.getListCustomer();
  }

  search(value: any) {
    this.customerService.searchCustomer(value).subscribe(listCustomer => {
      this.customers = listCustomer.content;
    });
  }

  getIdCustomerEdit(value: any) {
    // tslint:disable-next-line:radix
    this.customerService.getCustomerById(parseInt(value)).subscribe(customerById => {
      this.customerEdit = customerById;

      this.customerEditForm = new FormGroup({
        id: new FormControl(this.customerEdit.id),
        code: new FormControl(this.customerEdit.code, [Validators.required, Validators.pattern('^KH(\\-)[0-9]{4}$')]),
        name: new FormControl(this.customerEdit.name, [Validators.required, Validators.minLength(4)]),
        customerType: new FormGroup({
          id: new FormControl(this.customerEdit.customerType.id),
          name: new FormControl('')
        }),
        birthday: new FormControl(this.customerEdit.birthday, [Validators.required, this.customerService.check18Age]),
        gender: new FormControl(this.customerEdit.gender, Validators.required),
        idCard: new FormControl(this.customerEdit.idCard, [Validators.required, Validators.pattern('^[0-9]{9}$')]),
        phone: new FormControl(this.customerEdit.phone, [Validators.required, Validators.pattern('^(84|0[3|5|7|8|9])+([0-9]{8})$')]),
        email: new FormControl(this.customerEdit.email, [Validators.required, Validators.email]),
        address: new FormControl(this.customerEdit.address, [Validators.required, Validators.minLength(4)])
      });
    });
  }

  saveCustomer() {
    this.customerService.saveCustomer(this.customerEditForm.value).subscribe(
      res => {
        this.getListCustomer();
        alert('Sửa thành công');
      },
      err => {
        alert('Lỗi sửa khách hàng. lỗi: ' + err.status);
      }
    );
  }
}
