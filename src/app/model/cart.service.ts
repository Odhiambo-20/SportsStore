import { Injectable } from '@angular/core';
import { Product } from './product.model';

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

  constructor() {
    // Load cart from localStorage on initialization
    const savedCart = localStorage.getItem(CART_STORAGE_KEY);
    if (savedCart) {
      this.items = JSON.parse(savedCart);
    }
  }

  private saveCart() {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(this.items));
  }

  getItems(): CartItem[] {
    return this.items;
  }

  addItem(product: Product) {
    const existingItem = this.items.find(item => item.product.id === product.id);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      this.items.push({ product, quantity: 1 });
    }
    this.saveCart();
  }

  getItemCount(): number {
    return this.items.reduce((total, item) => total + item.quantity, 0);
  }

  addToCart(product: Product, quantity = 1) {
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

  getTotal(): number {
    return this.items.reduce((total, item) =>
      total + (item.product?.price ?? 0) * item.quantity, 0);
  }

  clearCart() {
    this.items = [];
    this.saveCart();
  }
}
