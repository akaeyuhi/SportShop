import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/app/model/product/product.model';
import { Observable } from 'rxjs';
import { Order } from 'src/app/model/order/order.model';
const PROTOCOL = 'http';
const PORT = 3500;
@Injectable({
  providedIn: 'root'
})
export class RestService {
  baseUrl: string;
  constructor(private http: HttpClient) {
    this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
  }
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl + 'products');
  }
  saveOrder(order: Order): Observable<Order> {
    return this.http.post<Order>(this.baseUrl + 'orders', order);
  }
}
