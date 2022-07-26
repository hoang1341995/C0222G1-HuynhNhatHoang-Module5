import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Icustomer} from './customer/icustomer';
import {ItypeCustomer} from './customer/itype-customer';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private baseUrl = 'http://localhost:3000/';

  constructor(private httpClient: HttpClient) {
  }

  getAllCustomer(): Observable<Icustomer[]> {
    return this.httpClient.get<Icustomer[]>(this.baseUrl + 'customerList');
  }

  delete(id: number): Observable<Icustomer> {
    return this.httpClient.delete<Icustomer>(this.baseUrl + 'customerList/' + id);
  }

  save(customer: Icustomer): Observable<Icustomer> {
    return this.httpClient.post<Icustomer>(this.baseUrl + 'customerList', customer);
  }

  getCustomerType(): Observable<ItypeCustomer[]> {
    return this.httpClient.get<ItypeCustomer[]>(this.baseUrl + 'typeCustomerList');
  }
}
