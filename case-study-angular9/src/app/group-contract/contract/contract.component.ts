import { Component, OnInit } from '@angular/core';
import {Icontract} from '../icontract';
import {ContractService} from '../contract.service';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.css']
})
export class ContractComponent implements OnInit {

  contracts: Icontract[] = [];

  constructor(private contractService: ContractService, private title: Title) {
  }

  ngOnInit(): void {
    this.title.setTitle('Hợp đồng Furama Đà Nẵng');
    this.getContractList();
  }

  getContractList(): void {
    this.contractService.getListContract().subscribe(listContract => {
      this.contracts = listContract;
      console.log(this.contracts);
    });
  }



}
