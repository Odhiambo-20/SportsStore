// src/app/cart/cart.component.ts

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../model/cart.service';
import { Cart } from "./cart.model";  // Import Cart
import { Router } from '@angular/router';
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items: Cart[] = [];  // Use Cart[] type

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit() {
    this.items = this.cartService.getItems();
  }

  clearCart() {
    this.cartService.clearCart();
    this.items = [];
  }

  removeFromCart(item: Cart) {
  if (item.product?.id !== undefined) { // Check if id is defined
    this.cartService.removeItem(item.product.id);
    this.items = this.items.filter(cartItem => cartItem !== item);
  } else {
    console.error("Product ID is undefined");
  }
}


  calculateTotal(): number {
    return this.items.reduce((total, item) => total + ((item.product.price ?? 0) * item.quantity), 0);
  }

  checkout() {
    console.log('Proceeding to checkout');
    this.router.navigate(['/checkout']); 
  }

  continueShopping() {
    this.router.navigate(['/']); // Replace '/' with the actual path to your store page
  }
}
