import { Injectable } from '@angular/core';
import {Product} from '../model/product';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private router: Router) { }

  products: Product[] = [{
    id: 1,
    name: 'IPhone 12',
    price: 2400000,
    description: 'New'
  }, {
    id: 2,
    name: 'IPhone 11',
    price: 1560000,
    description: 'Like new'
  }, {
    id: 3,
    name: 'IPhone X',
    price: 968000,
    description: '97%'
  }, {
    id: 4,
    name: 'IPhone 8',
    price: 7540000,
    description: '98%'
  }, {
    id: 5,
    name: 'IPhone 11 Pro',
    price: 1895000,
    description: 'Like new'
  }];

  getAll() {
    return this.products;
  }

  saveProduct(product) {
    this.products.push(product);
    console.log(this.products);
  }

  deleteProduct(id: number): void {
     const index = this.products.findIndex(d => d.id === id);
     this.products.splice(index, 1);
     this.router.navigateByUrl('/product/list');
  }

  editProduct(pd: Product): void {
    const index = this.products.findIndex( d => d.id === pd.id);
    this.products[index] = pd;
    this.router.navigateByUrl('/product/list');
  }

  findById(id: number): Product {
    return this.products.find( d => d.id === id);
  }

}
