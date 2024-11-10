// src/app/store/store.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreComponent } from './store.component';
import { ProductListComponent } from './product-list/product-list.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ProductListComponent
  ],
  imports: [
    CommonModule,
    StoreComponent,
    RouterModule,
    FormsModule
  ],
  exports: [
    StoreComponent
  ]
})


export class StoreModule { }
