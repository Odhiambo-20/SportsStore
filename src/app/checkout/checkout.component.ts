import { CartService } from './../model/cart.service';
// src/app/checkout/checkout.component.ts

import { Component } from "@angular/core";
import { FormsModule, NgForm } from "@angular/forms";
import { OrderRepository } from "../model/order.repository";
import { Order } from "../model/order.model";
import { CommonModule } from "@angular/common";
import { Router } from '@angular/router';

@Component({
  standalone: true, 
  imports: [FormsModule, CommonModule], 
  templateUrl: "checkout.component.html",
  styleUrls: ["checkout.component.css"],
  providers: [
    OrderRepository,
    Order
  ]
})
export class CheckoutComponent {

  orderSent = false;
  submitted = false;

  constructor(
    private router: Router,
    public repository: OrderRepository,
    public order: Order,
    public service: CartService
  ) { }
  
  submitOrder(form: NgForm) {
    this.submitted = true;
    if (form.valid) {
      this.repository.saveOrder(this.order).subscribe(() => {
        this.order.clear();
        this.orderSent = true;
        this.submitted = false;
      });
    }
  }

  goBack() {
    this.router.navigate(['/cart']);
  }

  goToStore() {
    this.router.navigate(['/store']);
  }
}