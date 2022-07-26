import {Component, OnInit} from '@angular/core';
import {Ifacility} from './ifacility';

@Component({
  selector: 'app-facility-list',
  templateUrl: './facility-list.component.html',
  styleUrls: ['./facility-list.component.css']
})
export class FacilityListComponent implements OnInit {
  facility: Ifacility[] = [
    {
      id: 1,
      nameFacility: 'Villa',
      area: 30,
      rentalCosts: 5000,
      numberPeople: 5,
      rentalType: 'Theo Ngày',
      url: 'https://q-xx.bstatic.com/xdata/images/hotel/840x460/206966159.jpg?k=0e58f255ce4cff15910e017f5bdba1cb3b04febf22f1b0b1c69fe6856db6d6f3&o='
    },
    {
      id: 1,
      nameFacility: 'Villa',
      area: 30,
      rentalCosts: 5000,
      numberPeople: 5,
      rentalType: 'Theo Ngày',
      // tslint:disable-next-line:max-line-length
      url: 'https://q-xx.bstatic.com/xdata/images/hotel/840x460/206966048.jpg?k=7921878d7c76294674862c3cccece9b436fc4dfc4be0d6b10b8e6b0328d4c6c6&o='
    },
    {
      id: 1,
      nameFacility: 'Villa',
      area: 30,
      rentalCosts: 5000,
      numberPeople: 5,
      rentalType: 'Theo Ngày',
      // tslint:disable-next-line:max-line-length
      url: 'https://q-xx.bstatic.com/xdata/images/hotel/840x460/206744855.jpg?k=8bd8700a7a922106ca04e5545d125f1f59f9d3158d372e2def0950e2a69f37dd&o='
    },
    {
      id: 1,
      nameFacility: 'Villa',
      area: 30,
      rentalCosts: 5000,
      numberPeople: 5,
      rentalType: 'Theo Ngày',
      // tslint:disable-next-line:max-line-length
      url: 'https://q-xx.bstatic.com/xdata/images/hotel/840x460/206966012.jpg?k=f89a85c680136eab1c9c411b9d0faa40fb451f08bd49e187b32509713787a147&o='
    },
    {
      id: 1,
      nameFacility: 'Villa',
      area: 30,
      rentalCosts: 5000,
      numberPeople: 5,
      rentalType: 'Theo Ngày',
      // tslint:disable-next-line:max-line-length
      url: 'https://q-xx.bstatic.com/xdata/images/hotel/840x460/206966065.jpg?k=c4bc49e1e4d59aa0f8125baa36c3682df614748b7bd9024cd0f3bb8d39a1505d&o='
    },
    {
      id: 1,
      nameFacility: 'Villa',
      area: 30,
      rentalCosts: 5000,
      numberPeople: 5,
      rentalType: 'Theo Ngày',
      // tslint:disable-next-line:max-line-length
      url: 'https://q-xx.bstatic.com/xdata/images/hotel/840x460/207137441.jpg?k=ade4cff246549906f3e60f931024846450bfedbb596f6153499d2fb93bebfc74&o='
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
