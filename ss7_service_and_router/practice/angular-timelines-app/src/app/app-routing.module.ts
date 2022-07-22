import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TimelinesComponent} from './timelines/timelines.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'timelines',
    component: TimelinesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
