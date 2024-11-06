// src/app/product/product.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from '../product-list/product-list.component';

@NgModule({
  declarations: [
    ProductListComponent,
  ],
  exports: [
    ProductListComponent, // export if used in other modules
  ],
  imports: [
    CommonModule
  ]
})
export class ProductModule { }
