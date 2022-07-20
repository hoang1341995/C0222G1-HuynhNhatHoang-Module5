import { Component, OnInit } from '@angular/core';
import {Icustomer} from "./icustomer";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customers : Icustomer[]=[];

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.getListCustomer();
  }

  // @ts-ignore
  getListCustomer():void{
    this.http.get<any>('http://localhost:8080/customer/customerList').subscribe(data => {
      this.customers = data;
      console.log(this.customers)
    })

  }

}
