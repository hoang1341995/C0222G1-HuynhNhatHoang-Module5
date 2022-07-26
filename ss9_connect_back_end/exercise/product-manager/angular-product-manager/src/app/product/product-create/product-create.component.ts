import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ProductService} from "../../service/product.service";
import {ProductType} from "../../model/product-type";
import {Router} from "@angular/router";

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  productTypeList: ProductType[];

  productForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
    productType: new FormControl('')
  });

  constructor(private productService: ProductService,
              private router : Router) {
  }

  ngOnInit(): void {
    this.productService.getAllCatalog().subscribe(value => {
      this.productTypeList = value;
    })
  }

  submit() {
    const product = this.productForm.value;
    console.log(product);
    this.productService.saveProduct(product).subscribe();
    this.productForm.reset();
    this.router.navigateByUrl('list');
  }
}
