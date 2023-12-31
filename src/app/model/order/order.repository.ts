import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from 'src/app/model/order/order.model';
import { StaticDataSource } from 'src/app/model/static.datasource';
@Injectable()
export class OrderRepository {
  private orders: Order[] = [];
  constructor(private dataSource: StaticDataSource) {}
  getOrders(): Order[] {
    return this.orders;
  }
  saveOrder(order: Order): Observable<Order> {
    return this.dataSource.saveOrder(order);
  }
}
