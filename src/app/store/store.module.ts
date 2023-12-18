import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ModelModule } from '../model/model.module';
import { StoreComponent } from './store.component';
import { CounterDirective } from './counter.directive';
import { CartSummaryComponent } from './cart-summary/cart-summary.component';
import { CartDetailComponent } from './cart-detail/cart-detail.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ProductComponent } from './product/product.component';
@NgModule({
  imports: [ModelModule, BrowserModule, FormsModule, RouterModule, HttpClientModule],
  declarations: [
    StoreComponent,
    CounterDirective,
    CartSummaryComponent,
    CartDetailComponent,
    CheckoutComponent,
    ProductComponent,
  ],
  exports: [StoreComponent]
})
export class StoreModule { }
