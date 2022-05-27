import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../model/Product';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http: HttpClient
  ) { }

  getProducts(): Observable<IProduct[]>{
    const products = this.http.get<IProduct[]>('http://localhost:3000/products')
    return products
  }
  getProduct(id : number): Observable<IProduct>{
    const product = this.http.get<IProduct>('http://localhost:3000/products/'+ id)
    return product
  }
  createProduct(data : IProduct): Observable<IProduct>{
    const product = this.http.post<IProduct>('http://localhost:3000/products/', data)
    return product
  }
  removeProduct(id : number): Observable<IProduct>{
    const product = this.http.delete<IProduct>('http://localhost:3000/products/'+ id)
    return product
  }
  updateProduct(data : IProduct): Observable<IProduct>{
    const product = this.http.put<IProduct>('http://localhost:3000/products/'+ data.id, data )
    return product
  }
}
