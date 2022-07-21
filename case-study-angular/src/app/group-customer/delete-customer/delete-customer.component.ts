import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-delete-customer',
  templateUrl: './delete-customer.component.html',
  styleUrls: ['./delete-customer.component.css']
})
export class DeleteCustomerComponent implements OnInit {

  @Input() idCustomerDelete : number = 0

  constructor() { }

  ngOnInit(): void {
  }

}
