import {Component, OnInit} from '@angular/core';
import {Register} from '../register';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {logger} from 'codelyzer/util/logger';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() {
  }
  listCountry: any[] = [{
    id: '1',
    name: 'Việt nam'
  }, {
    id: '2',
    name: 'Hàn Quốc'
  }, {
    id: '3',
    name: 'Nhật Bản'
  }];

  register: Register = {
    email: '',
    password: '',
    confirmPassword: '',
    country: '',
    age: 0,
    gender: 0,
    phone: ''
  };

  registerForm: FormGroup;

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
        password: new FormControl('', [Validators.required, Validators.minLength(6)]),
        confirmPassword: new FormControl('', [Validators.required, Validators.minLength(6)]),
      country: new FormControl('', Validators.required),
      age: new FormControl('', [Validators.required, this.check18Age]),
      gender: new FormControl('', Validators.requiredTrue),
      phone: new FormControl('', [Validators.required, Validators.pattern('^(84|0[3|5|7|8|9])+([0-9]{8})$')])
    }, this.checkPassword);
    console.log(this.registerForm);
  }

  checkPassword(abstractControl: AbstractControl): any{
    return abstractControl.value.password === abstractControl.value.confirmPassword ? null : {errorpassword : true};
  }

  check18Age(abstractControl: AbstractControl): any {
    return abstractControl.value >= 18 ? null : {not18age: true};
  }

  functionSubmit(): void {
    console.log(this.register);
  }


  submitForm() {
    alert('Thành công');
  }
}
