import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-contract',
  templateUrl: './create-contract.component.html',
  styleUrls: ['./create-contract.component.css']
})
export class CreateContractComponent implements OnInit {
  contractForm: FormGroup;

  constructor() {
    this.contractForm = new FormGroup(
      {
        id: new FormControl('', Validators.required),
        startDay: new FormControl('', Validators.required),
        endDay: new FormControl('', Validators.required),
        deposits: new FormControl('', Validators.required),
        total: new FormControl('', Validators.required),
        employee: new FormControl('', Validators.required),
        customer: new FormControl('', Validators.required),
        service: new FormControl('', Validators.required)
      }
    );
  }

  ngOnInit(): void {
  }

}
