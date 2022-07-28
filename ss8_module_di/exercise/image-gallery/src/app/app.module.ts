import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ImgSliderComponent } from './img-slider/img-slider.component';
import { ImgSlideComponent } from './img-slider/img-slide/img-slide.component';
import {ImgSliderModule} from './img-slider/image-slider.module';

@NgModule({
  declarations: [
    AppComponent,
    // ImgSliderComponent,
    // ImgSlideComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ImgSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
