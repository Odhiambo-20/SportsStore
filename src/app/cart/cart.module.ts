// src/app/cart/cart.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';

@NgModule({
  declarations:[ ],
  imports: [
    CommonModule,
    CartComponent
  ],
  exports:[
     CartComponent,
    

  ]
})
export class CartModule { }
