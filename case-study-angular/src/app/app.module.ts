import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CustomerComponent } from './group-customer/customer/customer.component';
import { ServiceComponent } from './service/service.component';
import { ContractComponent } from './contract/contract.component';
import {FormsModule} from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { EditCustomerComponent } from './group-customer/edit-customer/edit-customer.component';
import { DeleteCustomerComponent } from './group-customer/delete-customer/delete-customer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CustomerComponent,
    ServiceComponent,
    ContractComponent,
    EditCustomerComponent,
    DeleteCustomerComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
      HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
