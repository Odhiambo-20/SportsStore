// src/app/app.module.ts

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ProductModule } from '././product/product.module';
import { CartModule } from './cart/cart.module';
import { ProductRepository } from './model/product.repository';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CartService } from './model/cart.service';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductModule,
    CartModule,
    CommonModule,
    RouterModule
  ],
  providers: [
    ProductRepository,
    CartService
  ]
})
export class AppModule { }
