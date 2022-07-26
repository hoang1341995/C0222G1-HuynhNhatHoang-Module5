import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-edit-facility',
  templateUrl: './edit-facility.component.html',
  styleUrls: ['./edit-facility.component.css']
})
export class EditFacilityComponent implements OnInit {
 facilityForm: FormGroup;
  constructor() {
    this.facilityForm = new FormGroup(
      {nameFacility: new FormControl('', [Validators.required, Validators.pattern('^[A-Za-z ]+$')]),
      area: new FormControl('', [Validators.required, Validators.pattern('^[1-9]\\d*$')]),
      rentalCost: new FormControl('', [Validators.required]),
      numberPeople: new FormControl('', [Validators.required]),
      rentalType: new  FormControl('', [Validators.required])}
    );
  }

  ngOnInit(): void {
  }

}
