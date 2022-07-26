import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Icustomer} from "../icustomer";
import {FormControl, FormGroup} from "@angular/forms";
import {CustomerService} from "../customer.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {

  customerForm: FormGroup;
  // @ts-ignore
  @Input() idCustomerEdit: string ;
  @Output()
  eventEmitter = new EventEmitter();
  customerEdit : Icustomer = {
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

  // @ts-ignore
  customerType: {
    id:number;
    name:string;
  }[];


  constructor(private customerService: CustomerService,private router: Router) {
    this.customerForm = new FormGroup({
      id: new FormControl(),
      code: new FormControl(),
      name: new FormControl(),
      customerType: new FormGroup({
        id: new FormControl(),
        name: new FormControl('')
      }),
      birthday: new FormControl(),
      gender: new FormControl(),
      idCard: new FormControl(),
      phone: new FormControl(),
      email: new FormControl(),
      address: new FormControl(),
    })
  }

  ngOnInit(): void {
    this.getListCustomerType()
  }

  async getIdCustomerEdit(id: string) {
    console.log(this.idCustomerEdit)
    this.customerService.getCustomerById(parseInt(id)).subscribe(customerById => {
      this.customerEdit = customerById;
      console.log(this.customerEdit)
      this.customerForm = new FormGroup({
        id: new FormControl(this.customerEdit.id),
        code: new FormControl(this.customerEdit.code),
        name: new FormControl('this.customerEdit.name'),
        customerType: new FormGroup({
          id: new FormControl(this.customerEdit.customerType.id),
          name: new FormControl('')
        }),
        birthday: new FormControl(this.customerEdit.birthday),
        gender: new FormControl(this.customerEdit.gender),
        idCard: new FormControl(this.customerEdit.idCard),
        phone: new FormControl(this.customerEdit.phone),
        email: new FormControl(this.customerEdit.email),
        address: new FormControl(this.customerEdit.address),
      })
      console.log(this.customerForm)
    })

  }

  getListCustomerType() {
    this.customerService.getListCustomerType().subscribe(listCustomerType => {
      this.customerType = listCustomerType;
    })
  };

  saveCustomer(){
    this.customerService.saveCustomer(this.customerForm.value).subscribe(
      res => {
        // this.getListCustomer();
        alert("Sửa thành công")
        this.eventEmitter.emit(this.customerForm.value.id);
        // this.router.navigateByUrl('/contract');
      },
      err => {
        alert("Lỗi sửa khách hàng. lỗi: " + err.status);
      }
    );
  }

}
