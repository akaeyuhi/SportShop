import {Component, EventEmitter, Input, Output} from '@angular/core';
import { Product } from 'src/app/model/product/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html'
})
export class ProductComponent {
  @Input() product: Product = {};
  @Output() addToCart = new EventEmitter<Product>();

  public onClick() {
    this.addToCart.emit(this.product);
  }
}
