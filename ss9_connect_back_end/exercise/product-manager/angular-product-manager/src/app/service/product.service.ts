import {Injectable} from '@angular/core';
import {Product} from '../model/product';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ProductType} from "../model/product-type";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private URL_API = "http://localhost:3000/productList";
  private URL_API_PRODUCT_TYPE = "http://localhost:3000/productType";
  products: Product[];
  productType: ProductType[];

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.URL_API);
  }

  getAllCatalog() : Observable<ProductType[]> {
    return this.httpClient.get<ProductType[]>(this.URL_API_PRODUCT_TYPE);
  }

  saveProduct(product:Product) : Observable<void> {
    return  this.httpClient.post<void>(this.URL_API, product);
  }

  findById(id: number): Observable<Product> {
    return this.httpClient.get<Product>(this.URL_API + "/" + id);
  }

  remove(id: number): Observable<void> {
    return this.httpClient.delete<void>(this.URL_API + "/" + id);
  }

  edit(product: Product): Observable<void> {
    return this.httpClient.patch<void>(this.URL_API + "/" + product.id, product);
  }
}
