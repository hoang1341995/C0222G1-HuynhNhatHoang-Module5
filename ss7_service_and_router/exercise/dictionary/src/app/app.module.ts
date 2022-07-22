import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DictionaryPageComponent } from './dictionary-page/dictionary-page.component';
import { DictionaryDetailComponent } from './dictionary-detail/dictionary-detail.component';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {DictionaryRoutingModule} from './dictionary-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    DictionaryPageComponent,
    DictionaryDetailComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule,
    DictionaryRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
