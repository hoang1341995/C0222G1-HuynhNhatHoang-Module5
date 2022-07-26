import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Icustomer} from "../icustomer";
import {CustomerService} from "../customer.service";

@Component({
  selector: 'app-delete-customer',
  templateUrl: './delete-customer.component.html',
  styleUrls: ['./delete-customer.component.css']
})
export class DeleteCustomerComponent implements OnInit {

  // @ts-ignore
  @Input() customerDelete: Icustomer = {
    id: 0,
    code:"",
    name:"",
    customerType: {
      id: 0,
      name: ""
    },
    birthday:"",
    gender:0,
    idCard:"",
    phone:"",
    email:"",
    address:""
  };

  @Output()
  eventEmitter = new EventEmitter();

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
  }

  removeCustomer(){
    this.customerService.removeCustomer(this.customerDelete).subscribe(
      res => {
        // this.getListCustomer();
        // alert("Xóa thành công")
        this.eventEmitter.emit(this.customerDelete.id);
        // this.router.navigateByUrl('/contract');
      },
      err => {
        alert("Lỗi xóa khách hàng. lỗi: " + err.status);
      }
    );
  }
}
