// src/app/cart/cart-detail/cart-detail.component.ts

import { Component } from '@angular/core';
import { CartService } from '../../model/cart.service';

@Component({
  selector: 'app-cart-detail',
  templateUrl: './cart-detail.component.html',
  styleUrl: './cart-detail.component.css'
})
export class CartDetailComponent {
  constructor(public cartService: CartService) { }
}
