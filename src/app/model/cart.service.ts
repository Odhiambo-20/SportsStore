// src/app/model/cart.service.ts

import { Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})

export class CartService {
  private items: { product: Product, quantity: number }[] = [];

  addItem(product: Product, quantity: number = 1) {
    let item = this.items.find(i => i.product.id === product.id);
    if (item) {
      item.quantity += quantity;
    } else {
      this.items.push({ product, quantity });
    }
  }

  addToCart(product: Product, quantity: number = 1) {
    // Include quantity parameter in both cases
    let item = this.items.find(i => i.product.id === product.id);
    if (item) {
      item.quantity += quantity;
    } else {
      this.items.push({ product, quantity });
    }
  }

  removeItem(productId: number) {
    this.items = this.items.filter(item => item.product.id !== productId);
  }

  getItems() {
    return this.items;
  }

  getTotal() {
    return this.items.reduce((total, item) => {
      return total + (item?.product?.price ?? 0) * item.quantity;
    }, 0);
  }

  clearCart() {
    this.items = [];
  }
}
