import { Component, OnInit } from '@angular/core';
import {Icontract} from "./icontract";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.css']
})
export class ContractComponent implements OnInit {

  contracts: Icontract[] = [];

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.getContractList()
  }

  getContractList():void{
    this.http.get<any>('http://localhost:8080/contract/contractList').subscribe(data => {
      this.contracts = data;
      console.log(this.contracts)

    })
  }

}
