import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Icustomer} from "./icustomer";
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  URL_API:string = 'http://localhost:8080/';


  constructor(private http:HttpClient) { }

  getListCustomer():Observable<Icustomer[]>{
    return this.http.get<Icustomer[]>(this.URL_API+'customer/customerList');
  }

  getListCustomerType():Observable<any>{
    return this.http.get<any>(this.URL_API+'customer/customerTypeList')
  }

  addNewCustomer(customer:Icustomer) {
    return this.http.post(this.URL_API+'customer/addNewCustomer',customer)
  }

  saveCustomer(customer:Icustomer) {
    return this.http.post(this.URL_API+'customer/saveCustomer',customer)
  }

  removeCustomer(customer:Icustomer) {
    return this.http.post(this.URL_API+'customer/removeCustomer',customer)
  }

  getCustomerById(id: number):Observable<any>{
    return this.http.get<any>(this.URL_API+'customer/findCustomer/'+id)
  }
}
