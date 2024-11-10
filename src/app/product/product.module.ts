// src/app/product/product.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from '../product-list/product-list.component';

@NgModule({
  exports: [
    ProductListComponent, // export if used in other modules
  ],
  imports: [
    CommonModule,
    ProductListComponent
  ]
})
export class ProductModule { }
