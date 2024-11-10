// src/app/app.module.ts

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { ProductModule } from './product/product.module';
import { CartModule } from './cart/cart.module';
import { ProductRepository } from './model/product.repository';
import { RouterModule } from '@angular/router';
import { CartService } from './model/cart.service';
import { FormsModule } from '@angular/forms';
import { OrderRepository } from './model/order.repository';
import { OrderService } from './model/order.service';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { RestDataSource } from './model/rest.datasource';

@NgModule({
  imports: [
    BrowserModule,
    ProductModule,
    CartModule,
    RouterModule,
    FormsModule,
    AppComponent,
    ProductListComponent,
    HttpClientModule
  ],
  providers: [
    HttpClient,
    ProductRepository,
    CartService,
    OrderService,
    OrderRepository,
    RestDataSource,
    provideClientHydration()
  ],
  bootstrap: []
})

export class AppModule { }
