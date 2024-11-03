// src/app/app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreComponent } from './store/store.component';
import { CartSummaryComponent } from './store/cart-summary/cart-summary.component';
import { ProductDetailComponent } from './store/product-detail/product-detail.component';

const routes: Routes = [
  { path: '', component: StoreComponent },
  { path: 'cart', component: CartSummaryComponent },
  { path: 'product/:id', component: ProductDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
