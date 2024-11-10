// src/app/app.route.ts

import { Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { StoreComponent } from './store/store.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './store/product-detail/product-detail.component';
import { CartSummaryComponent } from './store/cart-summary/cart-summary.component';
import { CartDetailComponent } from './cart-detail/cart-detail.component';
import { CheckoutComponent } from './checkout/checkout.component';


export const routes: Routes = [
  { path: 'store', component: StoreComponent },
  { path: 'cart', component: CartComponent },
  { path: 'cart-detail', component: CartDetailComponent }, // Add route for CartDetail
  { path: '', redirectTo: 'store', pathMatch: 'full' },
  { path: 'product-list', component: ProductListComponent },
  { path: 'product-detail', component: ProductDetailComponent },
  { path: 'cart-summary', component: CartSummaryComponent },
  { path: 'checkout', component: CheckoutComponent },
];
