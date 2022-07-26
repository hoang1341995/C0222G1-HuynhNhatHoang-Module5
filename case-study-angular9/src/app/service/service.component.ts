import { Component, OnInit } from '@angular/core';
import {Iservice} from "./iservice";
import {HttpClient} from "@angular/common/http";
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
  // @ts-ignore
  services: Iservice[];

  constructor(private http: HttpClient, private title: Title) { }

  ngOnInit(): void {
    this.title.setTitle('Dịch vụ Furama Đà Nẵng');
    this.getListService();
    }

  getListService(): void {
    this.http.get<any>('http://localhost:8080/service/getServiceList').subscribe(data => {
      this.services = data;
      console.log(this.services);
      return data;
    });
  }

}
