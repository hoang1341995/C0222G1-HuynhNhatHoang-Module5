import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Iticket} from './iticket';
import {Icar} from './icar';
import {Student} from './student';

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

  URL_API = 'http://localhost:3000/';

  constructor(private httpClient: HttpClient) { }


  getListTicket(): Observable<Iticket[]> {
    return this.httpClient.get<Iticket[]>(this.URL_API + 'ticket');
  }

  // @ts-ignore
  getListCar(): Observable<Icar[]> {
    return this.httpClient.get<Icar[]>(this.URL_API + 'car');
  }

  createTicket(itickets: Iticket): Observable<Iticket> {
    return this.httpClient.post<Iticket>(this.URL_API + 'ticket', itickets);
  }

  loadListTicket(message: string) {
    this.dataChannelLoadList.next(message);
  }

  dataFormListToOrder(tickets: Iticket) {
    this.data.next(tickets);
  }

  // @ts-ignore
  oderCar(ticket: Iticket): Observable<Iticket> {
    return this.httpClient.patch<Iticket>(this.URL_API + 'ticket/' + ticket.id, ticket);
  }

  searchTicket(key: string) {
    return this.httpClient.get<Student[]>(this.URL_API + 'student?name_like=' + key);
  }

}
