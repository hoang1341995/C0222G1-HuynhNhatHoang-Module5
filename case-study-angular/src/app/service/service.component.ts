import { Component, OnInit } from '@angular/core';
import {Iservice} from "./iservice";

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  // @ts-ignore
  service: Iservice = {};
  services : Iservice[] = [
    { name: "PHÒNG SUPERIOR HƯỚNG VƯỜN",
      area: 50,
      url: "assets/img/service/img1.jpg"},
    { name: "PHÒNG STUDIO SUITE HƯỚNG BIỂN",
      area: 40,
      url: "assets/img/service/img2.jpg"},
    { name: "PHÒNG DELUXE HƯỚNG VƯỜN",
      area: 43,
      url: "assets/img/service/img3.jpg"},
    { name: "PHÒNG PRESIDENTIAL SUITE",
      area: 130,
      url: "assets/img/service/img4.jpg"}
  ];
  constructor() { }

  ngOnInit(): void {
  }

  addNewService(){
    this.services.push(this.service);
    console.log(this.services)
  }

}
