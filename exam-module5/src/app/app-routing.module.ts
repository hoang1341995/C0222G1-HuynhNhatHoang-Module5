import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TicketListComponent} from './ticket-list/ticket-list.component';
import {VietnamComponent} from './vietnam/vietnam.component';


const routes: Routes = [
  {path: '' , component: TicketListComponent},
  {path: 'vn' , component: VietnamComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
