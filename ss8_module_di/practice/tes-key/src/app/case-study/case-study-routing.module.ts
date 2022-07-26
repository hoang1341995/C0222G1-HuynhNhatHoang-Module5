import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FacilityListComponent} from '../facility/facility-list/facility-list.component';
import {FuramaComponent} from '../furama/furama.component';
import {EditFacilityComponent} from '../facility/edit-facility/edit-facility.component';
import {CreateFacilityComponent} from '../facility/create-facility/create-facility.component';
import {CustomerListComponent} from '../customer/customer-list/customer-list.component';
import {CreateCustomerComponent} from '../customer/create-customer/create-customer.component';
import {EditCustomerComponent} from '../customer/edit-customer/edit-customer.component';
import {ContractListComponent} from '../contract/contract-list/contract-list.component';
import {CreateContractComponent} from '../contract/create-contract/create-contract.component';


const routes: Routes = [
  {path: '', component: FuramaComponent},
  {path: 'facility', component: FacilityListComponent},
  {path: 'editFacility', component: EditFacilityComponent},
  {path: 'createFacility', component: CreateFacilityComponent},
  {path: 'customerList', component: CustomerListComponent},
  {path: 'createCustomer', component: CreateCustomerComponent},
  {path: 'editCustomer', component: EditCustomerComponent},
  {path: 'createContract', component: CreateContractComponent},
  {path: 'contract', component: ContractListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CaseStudyRoutingModule {
}
