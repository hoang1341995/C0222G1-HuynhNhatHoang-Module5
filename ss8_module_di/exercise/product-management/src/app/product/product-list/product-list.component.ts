import {Component, OnInit} from '@angular/core';
import {Product} from '../../model/product';
import {ProductService} from '../../service/product.service';
import {Category} from '../../model/category';
import {CategoryService} from '../../service/category.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  idToDelete: number;
  nameToDelete: string;
  p = 1;

  constructor(private productService: ProductService
  ) {
  }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct() {
    this.productService.getProduct().subscribe(products => {
      this.products = products;
    });
  }

  deleteProduct() {
    this.productService.deleteProduct(this.idToDelete).subscribe((data) => {
      this.getProduct();
    });
  }

  showMess(id: any, name: any) {
    this.idToDelete = id;
    this.nameToDelete = name;
  }
}
