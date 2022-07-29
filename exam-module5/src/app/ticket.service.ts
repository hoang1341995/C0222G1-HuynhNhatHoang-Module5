import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Iticket} from './iticket';
import {Icar} from './icar';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  // @ts-ignore
  data = new BehaviorSubject<Iticket>();
  obserData = this.data.asObservable();

  // @ts-ignore
  dataChannelLoadList = new BehaviorSubject<string>();
  channelLoadList = this.dataChannelLoadList.asObservable();

  // @ts-ignore
  dataSearchForList = new BehaviorSubject<Iticket[]>();
  channelSearchForList = this.dataSearchForList.asObservable();

  URL_API = 'http://localhost:8080/api/';

  constructor(private httpClient: HttpClient) { }


  getListTicket(): Observable<Iticket[]> {
    return this.httpClient.get<Iticket[]>(this.URL_API + 'findAllTicket');
  }

  // @ts-ignore
  getListCar(): Observable<Icar[]> {
    return this.httpClient.get<Icar[]>(this.URL_API + 'findAllCar');
  }

  createTicket(itickets: Iticket): Observable<Iticket> {
    return this.httpClient.post<Iticket>(this.URL_API + 'createTicket', itickets);
  }

  loadListTicket(message: string) {
    this.dataChannelLoadList.next(message);
  }

  dataFormListToOrder(tickets: Iticket) {
    this.data.next(tickets);
  }

  dataSearchToList(tickets: Iticket[]) {
    this.dataSearchForList.next(tickets);
  }

  // @ts-ignore
  oderCar(ticket: Iticket): Observable<Iticket> {
    return this.httpClient.put<Iticket>(this.URL_API + 'orderTicket', ticket);
  }

  searchTicket(startPoint: string, endPoint: string, startDate: string, endDate: string): Observable<Iticket[]> {
    // tslint:disable-next-line:max-line-length
    return this.httpClient.get<Iticket[]>(this.URL_API + `search?startPoint=${startPoint}&endPoint=${endPoint}&startDate=${startDate}&endDate=${endDate}`);
  }

}
