import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "../../service/product.service";

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  constructor(private route : ActivatedRoute,
              private productService : ProductService,
              private router : Router) { }

  ngOnInit(): void {
    let id =  this.route.snapshot.params.id;
    console.log(this.productService.findById(id));
    this.productService.remove(id).subscribe();
    this.router.navigateByUrl('list');
  }
}
