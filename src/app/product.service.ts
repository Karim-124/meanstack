import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from "./products";
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  
  products: IProduct[] = []

  url = 'mongodb+srv://karim12345:Karim20202020@cluster0.uuwnfmf.mongodb.net/?retryWrites=true&w=majority'

  constructor(private http: HttpClient) { }
  getProducts(): Observable<any> {
    return this.http.get<any>('http://localhost:3000/getProducts');
  }
  getProductById(productId: string): Observable<any> {
    return this.http.get(`mongodb+srv://karim12345:Karim20202020@cluster0.uuwnfmf.mongodb.net/${productId}?retryWrites=true&w=majority`)
  }

}