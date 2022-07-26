import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "../../service/product.service";
import {FormControl, FormGroup} from "@angular/forms";
import {ProductType} from "../../model/product-type";
import {Product} from "../../model/product";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  productTypeList: ProductType[];

  productForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
    productType: new FormGroup({
      idType: new FormControl(),
      nameType: new FormControl()
    })
  });

  constructor(private route: ActivatedRoute,
              private productService: ProductService,
              private router : Router) {
    const id =  this.route.snapshot.params.id;
    this.productService.findById(id).subscribe(value => {
      console.log(value);
      this.productForm.patchValue(value);
      // this.productForm.controls.id.setValue(value.id);
      // this.productForm.controls.name.setValue(value.name);
      // this.productForm.controls.price.setValue(value.price);
      // this.productForm.controls.description.setValue(value.description);
      // this.productForm.controls.productType.value.idType.setValue(value.productType.idType);
      // this.productForm.controls.productType.value.idType.setValue(value.productType.nameType);
    })
  }

  ngOnInit(): void {

    this.productService.getAllCatalog().subscribe(value => {
      this.productTypeList = value;
    })
  }

  submit() {
    const product = this.productForm.value;
    // console.log(product.productType);
    // console.log(product.productType.idType);

    this.productTypeList.forEach(items => {
      if (Number(product.productType.idType) == items.idType) {
        // console.log(items);
        product.productType = items;
      }
    })
    this.productService.edit(product).subscribe();
    this.router.navigateByUrl('list')
  }
}
