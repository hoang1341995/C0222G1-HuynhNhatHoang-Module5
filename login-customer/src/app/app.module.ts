import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {LoginAndCustomerScreenModule} from './login-and-customer-screen/login-and-customer-screen.module';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginAndCustomerScreenModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
