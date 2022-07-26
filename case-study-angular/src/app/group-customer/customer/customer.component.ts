import {Component, OnInit} from '@angular/core';
import {Icustomer} from "../icustomer";

import {CustomerService} from "../customer.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit{

  customer : Icustomer = {
    id: 0,
    code:"",
    name:"",
    customerType: {
      id: 0,
      name: ""
    },
    birthday:"",
    gender:0,
    idCard:"",
    phone:"",
    email:"",
    address:""
  };

  customerForm: FormGroup;

  customers : Icustomer[]=[];

  // @ts-ignore
  customerType: {
    id:number;
    name:string;
  }[];


  constructor(private customerService: CustomerService) {
    this.customerForm = new FormGroup({
      id: new FormControl(0),
      code: new FormControl('',[Validators.required, Validators.pattern('^KH(\\-)[0-9]{4}$')]),
      name: new FormControl('',Validators.required),
      customerType: new FormGroup({
        id: new FormControl(0,Validators.required),
        name: new FormControl('')
      }),
      birthday: new FormControl('',Validators.required),
      gender: new FormControl(0,Validators.required),
      idCard: new FormControl('',[Validators.required,Validators.minLength(9)]),
      phone: new FormControl('',[Validators.required,Validators.minLength(10)]),
      email: new FormControl('',[Validators.required,Validators.email]),
      address: new FormControl('',Validators.required),
    })
  }

  ngOnInit(): void {
    this.getListCustomer()
    this.getListCustomerType()
  }

  addNewCustomer(){
    console.log(this.customerForm)
    // @ts-ignore
    this.customerService.addNewCustomer(this.customerForm.value).subscribe(
      res => {
        this.getListCustomer();
        alert("Thêm thành công");
      },
      err => {
        alert("Lỗi thêm mới khách hàng. lỗi: " + err.status);
      }
    );
  }

  getListCustomer() {
    this.customerService.getListCustomer().subscribe(listCustomer => {
      this.customers = listCustomer;
    })
  };
  getListCustomerType() {
    this.customerService.getListCustomerType().subscribe(listCustomerType => {
      this.customerType = listCustomerType;
    })
  };

  removeCustomer(){
    this.customerService.removeCustomer(this.customer).subscribe(
      res => {
        this.getListCustomer();
        alert("Thêm thành công");
      },
      err => {
        alert("Lỗi thêm mới khách hàng. lỗi: " + err.status);
      }
    );
  }


  loadList(value: any) {
    this.getListCustomer()
  }


}
