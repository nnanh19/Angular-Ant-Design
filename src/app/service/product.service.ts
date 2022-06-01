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

  api = "http://localhost:3000/products/"

  getProducts(): Observable<IProduct[]>{
    const products = this.http.get<IProduct[]>(this.api)
    return products
  }
  getProduct(id : number): Observable<IProduct>{
    const product = this.http.get<IProduct>(this.api + id)
    return product
  }
  createProduct(data : IProduct): Observable<IProduct>{
    const product = this.http.post<IProduct>(this.api , data)
    return product
  }
  removeProduct(id : number): Observable<IProduct>{
    const product = this.http.delete<IProduct>(this.api + id)
    return product
  }
  updateProduct(data : IProduct): Observable<IProduct>{
    const product = this.http.put<IProduct>(this.api + data.id, data )
    return product
  }
}
