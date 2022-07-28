import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProductRoutingModule} from './product-routing.module';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductCreateComponent} from './product-create/product-create.component';
import {ReactiveFormsModule} from '@angular/forms';
import {ProductEditComponent} from './product-edit/product-edit.component';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [ProductListComponent, ProductCreateComponent, ProductEditComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ]
})
export class ProductModule {
}
