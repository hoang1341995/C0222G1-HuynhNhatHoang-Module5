import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Icontract} from './icontract';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContractService {
  URL_API = 'http://localhost:8080/';
  constructor(private http: HttpClient) { }

  getListContract(): Observable<Icontract[]> {
    return this.http.get<Icontract[]>(this.URL_API + 'contract/getListContract');
  }
}
