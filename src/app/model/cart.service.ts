// src/app/model/cart.service.ts

import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { BehaviorSubject } from 'rxjs';

const CART_STORAGE_KEY = 'sports-store-cart';

interface CartItem {
  product: Product;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items: CartItem[] = [];
  private itemCount = new BehaviorSubject<number>(0);
  private totalPrice = new BehaviorSubject<number>(0);

  itemCount$ = this.itemCount.asObservable();
  totalPrice$ = this.totalPrice.asObservable();

  constructor() {
    const savedCart = localStorage.getItem(CART_STORAGE_KEY);
    if (savedCart) {
      this.items = JSON.parse(savedCart);
      this.updateCartInfo();
    }
  }

  private saveCart() {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(this.items));
    this.updateCartInfo();
  }

  getItems(): CartItem[] {
    return this.items;
  }

  addItem(product: Product, quantity = 1) {
    const existingItem = this.items.find(item => item.product.id === product.id);
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.items.push({ product, quantity });
    }
    this.saveCart();
  }

  removeItem(productId: number) {
    this.items = this.items.filter(item => item.product.id !== productId);
    this.saveCart();
  }

  updateQuantity(productId: number, quantity: number) {
    const item = this.items.find(item => item.product.id === productId);
    if (item) {
      item.quantity = Math.max(0, quantity);
      if (item.quantity === 0) {
        this.removeItem(productId);
      }
      this.saveCart();
    }
  }

  clearCart() {
    this.items = [];
    this.saveCart();
  }

  private updateCartInfo() {
    this.itemCount.next(this.getItemCount());
    this.totalPrice.next(this.getTotalPrice());
  }

  getItemCount(): number {
    return this.items.reduce((total, item) => total + item.quantity, 0);
  }

  getTotalPrice(): number {
    if (!this.items || this.items.length === 0) {
        return 0;
    }

    return this.items.reduce((total, item) => {
        const price = item.product?.price || 0;
        const quantity = item.quantity || 0;
        return total + price * quantity;
    }, 0);
}
}
