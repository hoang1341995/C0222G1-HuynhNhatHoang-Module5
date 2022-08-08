import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'index',
    // tslint:disable-next-line:max-line-length
    loadChildren: () => import('./login-and-customer-screen/login-and-customer-screen.module').then(module => module.LoginAndCustomerScreenModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
