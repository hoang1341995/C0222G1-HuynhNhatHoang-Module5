import {Component, OnInit} from '@angular/core';
import {Icontract} from './icontract';

@Component({
  selector: 'app-contract-list',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.css']
})
export class ContractListComponent implements OnInit {

  contracts: Icontract[] = [
    {
      id: 1,
      startDay: '2022-07-01 00:00:00',
      endDay: '2022-08-02 00:00:00',
      deposits: 2000,
      total: 5000,
      employee: 'Trần Khánh Huyền',
      customer: 'Nguyễn Thanh Hải',
      service: 'Villa'
    },
    {
      id: 2,
      startDay: '2022-07-10 00:00:00',
      endDay: '2022-08-05 00:00:00',
      deposits: 3000,
      total: 6000,
      employee: 'Nguyễn Ngọc Lan',
      customer: 'Trương Viết Huy',
      service: 'House'
    },
    {
      id: 3,
      startDay: '2022-09-03 00:00:00',
      endDay: '2022-10-10 00:00:00',
      deposits: 4000,
      total: 8000,
      employee: 'Mai Văn Toàn',
      customer: 'Nguyễn Hà Phương',
      service: 'Villa'
    },
    {
      id: 4,
      startDay: '2022-07-01 00:00:00',
      endDay: '2022-08-02 00:00:00',
      deposits: 5000,
      total: 10000,
      employee: 'Đinh Lệ Hằng',
      customer: 'Nguyễn Duy Trung',
      service: 'House'
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
