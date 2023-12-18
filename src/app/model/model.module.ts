import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRepository } from 'src/app/model/product/product.repository';
import { StaticDataSource } from 'src/app/model/static.datasource';
import { Cart } from 'src/app/model/cart/cart.model';
import { Order } from './order/order.model';
import { OrderRepository } from 'src/app/model/order/order.repository';
import { RestService } from 'src/app/model/rest.service';

@NgModule({
  providers: [
    ProductRepository,
    StaticDataSource,
    Cart,
    Order,
    OrderRepository,
    {
      provide: StaticDataSource, useClass: RestService
    }]
})
export class ModelModule { }
