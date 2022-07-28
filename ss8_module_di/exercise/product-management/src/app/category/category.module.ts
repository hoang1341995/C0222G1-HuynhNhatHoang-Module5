import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';

import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryCreateComponent } from './category-create/category-create.component';
import {ReactiveFormsModule} from '@angular/forms';
import { CategoryEditComponent } from './category-edit/category-edit.component';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [ CategoryListComponent, CategoryCreateComponent, CategoryEditComponent],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ]
})
export class CategoryModule { }
