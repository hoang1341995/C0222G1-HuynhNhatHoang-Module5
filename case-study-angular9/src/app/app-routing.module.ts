import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ServiceComponent} from './service/service.component';
import {CustomerComponent} from './group-customer/customer/customer.component';
import {ContractComponent} from './group-contract/contract/contract.component';

const routes: Routes = [
  {path: '', component: ServiceComponent},
  {path: 'service', component: ServiceComponent},
  {path: 'customer', component: CustomerComponent},
  {path: 'contract', component: ContractComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
