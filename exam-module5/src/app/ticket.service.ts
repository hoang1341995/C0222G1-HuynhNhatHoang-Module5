import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Iticket} from './iticket';
import {Icar} from './icar';
import {City} from './city';

@Injectable({
  providedIn: 'root'
})
export class TicketService {


  // @ts-ignore
  data = new BehaviorSubject<Map<string, any>>();
  checkData = this.data.asObservable();


  URL_API = 'http://localhost:8080/api/';

  constructor(private httpClient: HttpClient) {
  }


  sendData(key: string, value: any) {
    const dataMap: Map<string, any> = new Map<string, any>();
    dataMap.set(key, value);
    this.data.next(dataMap);
  }

  getVietNam(): Observable<City[]> {
    return this.httpClient.get<City[]>('https://provinces.open-api.vn/api/?depth=3');
  }

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

  // @ts-ignore
  oderCar(ticket: Iticket): Observable<Iticket> {
    return this.httpClient.put<Iticket>(this.URL_API + 'orderTicket', ticket);
  }

  searchTicket(startPoint: string, endPoint: string, startDate: string, endDate: string): Observable<Iticket[]> {
    // tslint:disable-next-line:max-line-length
    return this.httpClient.get<Iticket[]>(this.URL_API + `search?startPoint=${startPoint}&endPoint=${endPoint}&startDate=${startDate}&endDate=${endDate}`);
  }

  // @ts-ignore
  deleteTicket(ticket: Iticket): Observable<Iticket> {
    return this.httpClient.delete<Iticket>(this.URL_API + 'deleteTicket/' + ticket.id);
  }
}
