import { Component } from '@angular/core';
import { Cart } from 'src/app/model/cart/cart.model';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
})
export class CartSummaryComponent {
  constructor(public cart: Cart) { }
}
