import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginAndCustomerScreenRoutingModule } from './login-and-customer-screen-routing.module';
import { LoginComponent } from './login/login.component';
import { CustomerScreenComponent } from './customer-screen/customer-screen.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [LoginComponent, CustomerScreenComponent],
    imports: [
        CommonModule,
        LoginAndCustomerScreenRoutingModule,
        ReactiveFormsModule
    ]
})
export class LoginAndCustomerScreenModule { }
