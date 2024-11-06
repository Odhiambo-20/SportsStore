// src/app/model/order.service.ts

import { Injectable } from "@angular/core";
import { Order } from './order.model';
import { CartService } from './cart.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  
  constructor(private cartService: CartService) {}

  placeOrder(order: Order) {
    // Implement logic to place the order (e.g., send to server)
    console.log("Order placed:", order);
    this.cartService.clearCart();
  }
}