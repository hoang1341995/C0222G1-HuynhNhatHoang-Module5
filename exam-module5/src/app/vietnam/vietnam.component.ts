import {Component, OnInit} from '@angular/core';
import {TicketService} from '../ticket.service';
import {City} from '../city';
import {Districts} from '../districts';
import {Wards} from '../wards';
import {any} from 'codelyzer/util/function';

@Component({
  selector: 'app-vietnam',
  templateUrl: './vietnam.component.html',
  styleUrls: ['./vietnam.component.css']
})
export class VietnamComponent implements OnInit {

  cityList: City[] = [];
  city = '';
  // tslint:disable-next-line:max-line-length
  districtsList: any[] = [];
  districts = '';

  wardsList: any[] = [];
  ward = '';

  constructor(private ticketService: TicketService) {
  }

  ngOnInit(): void {
    this.getVietNam();
  }

  getVietNam() {
    this.ticketService.getVietNam().subscribe(value => {
      if (value !== undefined) {
        this.cityList = value;
      }
    });
  }


  getDistricts() {
    this.districtsList = undefined;
    this.wardsList = undefined;
    this.districtsList =  this.cityList.find( values => values.name === this.city).districts;
  }

  getWard() {
    this.wardsList =   this.districtsList.find( values => values.name === this.districts).wards;
  }
}
