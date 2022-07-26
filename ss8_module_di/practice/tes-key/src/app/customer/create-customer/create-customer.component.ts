import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ServiceService} from '../../service.service';
import {Icustomer} from '../icustomer';
import {Router} from '@angular/router';
import {ItypeCustomer} from '../itype-customer';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {
  customerForm: FormGroup;
  customerAddNew: Icustomer;
  customerType: ItypeCustomer[] = [];

  constructor(private service: ServiceService, private router: Router) {
    this.customerForm = new FormGroup(
      {
        code: new FormControl('', [Validators.required, Validators.pattern('^KH-[0-9]{4}$')]),
        fullName: new FormControl('', [Validators.required, Validators.pattern('^[A-Za-z ]+$')]),
        birthDay: new FormControl('', [Validators.required]),
        gender: new FormControl(1, [Validators.required]),
        idCard: new FormControl('', [Validators.required, Validators.pattern('^([0-9]{9}|[0-9]{12})$')]),
        phone: new FormControl('', [Validators.required, Validators.pattern('^(090|091|\\(84\\)\\+90|\\(84\\)\\+91)[0-9]{7}$')]),
        email: new FormControl('', [Validators.required, Validators.pattern('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$')]),
        address: new FormControl('', [Validators.required]),
        // typeCustomer: new FormControl()
        typeCustomer: new FormGroup({
          id: new FormControl(),
          name: new FormControl('default'),
        })
      });
    console.log(this.customerForm);
  }

  ngOnInit(): void {
    this.getType();
  }

  addNew() {
    this.customerAddNew = this.customerForm.value;

    for (const values of this.customerType) {
      if (values.id === this.customerAddNew.typeCustomer.id) {
        this.customerAddNew.typeCustomer.name = values.name;
        break;
      }
    }

    console.log(this.customerAddNew);
    this.service.save(this.customerAddNew).subscribe(res => {
      this.router.navigateByUrl('/customerList');
    }, error => {
    });
  }

  getType() {
    this.service.getCustomerType().subscribe(value => {
      this.customerType = value;
    });
  }
}
