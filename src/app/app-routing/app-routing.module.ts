// src/app/app-routing/app-routing.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CartDetailComponent } from '../cart/cart-detail/cart-detail.component';
import { StoreComponent } from '../store/store.component';

const routes: Routes = [
  { path: '', component: StoreComponent },
  { path: 'cart', component: CartDetailComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
