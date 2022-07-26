import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../service/product.service";
import {Product} from "../../model/product";
import {ProductType} from "../../model/product-type";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  productTypeList : ProductType[];

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.getAll();
    this.productService.getAllCatalog().subscribe(value => {
      this.productTypeList = value;
    });
  }

  getAll() {
    this.productService.getAll().subscribe(value => {
      this.products = value;
    });
  }

}
