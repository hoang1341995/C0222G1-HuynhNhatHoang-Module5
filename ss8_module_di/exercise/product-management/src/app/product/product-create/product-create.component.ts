import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../service/product.service';
import {Product} from '../../model/product';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Category} from '../../model/category';
import {Router} from '@angular/router';
import {CategoryService} from '../../service/category.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  productForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required, Validators.pattern('[+]?\\d+')]),
    description: new FormControl('', [Validators.required]),
    category: new FormControl('', [Validators.required]),
  });
  categories: Category[] = [];

  constructor(private productService: ProductService,
              private router: Router,
              private categoryService: CategoryService) {
  }

  ngOnInit(): void {
    this.getCategory();
  }

  submit() {
    const product = this.productForm.value;
    this.productService.saveProduct(product).subscribe(() => {
      this.productForm.reset();
      this.router.navigateByUrl('/product/list');
    }, e => console.log(e));
  }

  getCategory() {
    this.categoryService.getCategory().subscribe(categories => {
      this.categories = categories;
    });
  }
}
