// src/app/model/order.model.ts

import { CartService } from './cart.service';
import { Injectable } from "@angular/core";

@Injectable()

export class Order {
  public id         = null;
  public name       = null;
  public address    = null;
  public city       = null;
  public state      = null;
  public zip        = null;
  public country    = null;
  public shipped    = false;

  constructor(private cartService: CartService) {}

  clear() {
    this.id = null;
    this.name = this.address = this.city = null;
    this.state = this.zip = this.country = null;
    this.shipped = false;
    this.cartService.clearCart();
   }
}