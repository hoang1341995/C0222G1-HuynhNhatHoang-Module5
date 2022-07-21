import {Component, OnInit} from '@angular/core';
import {Icustomer} from "../icustomer";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit{

  ModalAddNew: boolean = false;

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

  customers : Icustomer[]=[];

  // @ts-ignore
  customerType: {
    id:number;
    name:string;
  }[];

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.getListCustomer();
    this.getListCustomerType()
  }

  // @ts-ignore
  getListCustomer():void{
    this.http.get<any>('http://localhost:8080/customer/customerList').subscribe(data => {
      this.customers = data;
      console.log(this.customers)
    })
  }
  getListCustomerType():void{
    this.http.get<any>('http://localhost:8080/customer/customerTypeList').subscribe(data => {
      this.customerType = data;
      console.log(this.customerType)
    })
  }

  addNewCustomer() {
    this.http.post('http://localhost:8080/customer/addNewCustomer',this.customer).subscribe(
      res => {
        this.getListCustomer();
        alert("Thêm thành công");
      },
      err => {
        alert("Lỗi thêm mới khách hàng. lỗi: " + err.status);
      }
    );
  }

}
