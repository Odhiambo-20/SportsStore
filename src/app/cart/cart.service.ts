// src/app/model/cart.service.ts

import { Injectable } from '@angular/core';
import { Product } from '../model/product.model';
import { Cart } from "./cart.model";

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private items: Cart[] = [];  

  getItems(): Cart[] { 
    return this.items;
  }

  addItem(product: Product) {
    const existingItem = this.items.find(item => item.product.id === product.id);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      this.items.push({ product, quantity: 1 });
    }
  }

  removeItem(productId: number) {
    this.items = this.items.filter(item => item.product.id !== productId);
  }

  clearCart() {
    this.items = [];
  }
}
