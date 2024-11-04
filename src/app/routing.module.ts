// src/app/routing.module.ts

import { Product } from './model/product.model';
import { Routes, RouterModule } from '@angular/router';
import { StoreComponent } from './store/store.component';
import { ProductDetailComponent } from './store/product-detail/product-detail.component';
import { ProductListComponent } from './store/product-list/product-list.component';
import { CartComponent } from './cart/cart.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const routes: Routes = [
    { path: '', component: StoreComponent },
    { path: 'products', component: ProductListComponent },
    { path: 'products/:id', component: ProductDetailComponent },
    { path: 'cart', component: CartComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes),
      CommonModule
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}
