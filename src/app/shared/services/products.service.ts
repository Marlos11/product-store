import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Product } from '../interfaces/Products.interface';
import { ProductPayload } from '../interfaces/payload-products.interface';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  httpClient = inject(HttpClient)

  getAll() {
    return this.httpClient.get<Product[]>('/api/products')

  }

  post(payload: ProductPayload) {
    return this.httpClient.post('/api/products', payload)
  }

}
