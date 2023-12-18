import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { StoreModule } from 'src/app/store/store.module';
import { StoreComponent } from './store/store.component';
import { RouterModule } from '@angular/router';
import { CheckoutComponent } from 'src/app/store/checkout/checkout.component';
import { CartDetailComponent } from 'src/app/store/cart-detail/cart-detail.component';
import { storeFirstGuard } from 'src/app/store-first.guard';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [BrowserModule, StoreModule,
    RouterModule.forRoot([
      {
        path: 'store', component: StoreComponent,
        canActivate: [storeFirstGuard]
      },
      {
        path: 'cart', component: CartDetailComponent,
        canActivate: [storeFirstGuard]
      },
      {
        path: 'checkout', component: CheckoutComponent,
        canActivate: [storeFirstGuard]
      },
      { path: '**', redirectTo: '/store' }
    ])],
  providers: [storeFirstGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
