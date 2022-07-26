import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {CaseStudyRoutingModule} from './case-study/case-study-routing.module';
import { FacilityListComponent } from './facility/facility-list/facility-list.component';
import { FuramaComponent } from './furama/furama.component';
import { EditFacilityComponent } from './facility/edit-facility/edit-facility.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CreateFacilityComponent } from './facility/create-facility/create-facility.component';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import { EditCustomerComponent } from './customer/edit-customer/edit-customer.component';
import { CreateCustomerComponent } from './customer/create-customer/create-customer.component';
import { ContractListComponent } from './contract/contract-list/contract-list.component';
import { CreateContractComponent } from './contract/create-contract/create-contract.component';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FacilityListComponent,
    FuramaComponent,
    EditFacilityComponent,
    CreateFacilityComponent,
    CustomerListComponent,
    EditCustomerComponent,
    CreateCustomerComponent,
    ContractListComponent,
    CreateContractComponent,
  ],
  imports: [
    BrowserModule,
    CaseStudyRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
