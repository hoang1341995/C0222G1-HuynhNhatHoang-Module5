// @ts-ignore
import { NgModule } from '@angular/core';
// @ts-ignore
import { CommonModule } from '@angular/common';
import {ImgSliderComponent} from './img-slider.component';
import {ImgSlideComponent} from './img-slide/img-slide.component';

// @ts-ignore
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ImgSliderComponent, ImgSlideComponent],
  exports: [ImgSliderComponent, ImgSlideComponent]
})
export class ImgSliderModule { }
