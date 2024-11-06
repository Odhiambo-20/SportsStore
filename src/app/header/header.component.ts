import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CartService } from '../model/cart.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  cartItemCount = 0;
  cartTotalPrice = 0;

  constructor(private cartService: CartService, private router: Router) {
    this.cartItemCount = this.cartService.getItemCount();
    this.cartTotalPrice = this.cartService.getTotalPrice();
  }

  goToCart() {
    this.router.navigate(['/cart']);
  }
}