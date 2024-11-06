// src/app/store/store.component.ts

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../model/product.model';
import { ProductRepository } from '../model/product.repository';
import { CartService } from '../model/cart.service';
import { ProductListComponent } from "./product-list/product-list.component";
import { CartComponent } from "../cart/cart.component";
import { Router } from '@angular/router';
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-store',
  standalone: true,
  imports: [CommonModule, ProductListComponent, CartComponent, HeaderComponent],
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css'],
  providers: [CartService]
})
export class StoreComponent implements OnInit {
  products: Product[] = [];
  categories: string[] = [];
  currentPage = 1;
  pageSize = 3;
  totalPages = 5;
  selectedCategory: string | null = null;

  // Declare and initialize cart properties
  cartItemCount = 0;
  cartTotalPrice = 0;

  constructor(public repository: ProductRepository, public cartService: CartService, private router: Router) {}

  ngOnInit() {
    this.loadProducts();
    this.loadCategories();

    // Directly call methods to get item count and total price
    this.cartItemCount = this.cartService.getItemCount();
    this.cartTotalPrice = this.cartService.getTotalPrice();

    // Optional: Subscribe to update on cart changes if using observables
    this.cartService.itemCount$.subscribe((count: number) => this.cartItemCount = count);
    this.cartService.totalPrice$.subscribe((price: number) => this.cartTotalPrice = price);

  }

  loadProducts() {
    this.repository.getProducts(this.currentPage, this.pageSize, this.selectedCategory)
        .subscribe(result => {
            this.products = result.products;
            this.totalPages = Math.ceil(result.totalCount / this.pageSize);
        });
}

  loadCategories() {
    this.repository.getCategories().subscribe(categories => {
      this.categories = categories;
    });
  }

  filterByCategory(category: string) {
    this.selectedCategory = category;
    this.currentPage = 1;
    this.loadProducts();
  }

  resetCategory() {
    this.selectedCategory = null;
    this.currentPage = 1;
    this.loadProducts();
  }

  addToCart(product: Product) {
    this.cartService.addItem(product);
    this.updateCartInfo();
  }

  updateCartInfo() {
    this.cartItemCount = this.cartService.getItemCount();
    this.cartTotalPrice = this.cartService.getTotalPrice();
  }
    setPage(page: number) {
    this.currentPage = page;
    this.loadProducts();
  }

  get pageNumbers(): number[] {
    return Array(this.totalPages).fill(0).map((_, i) => i + 1);
  }

  changePageSize(newSize: number) {
    this.pageSize = newSize;
    this.currentPage = 1;
    this.loadProducts();
  }
  goToCart() {
    this.router.navigate(['/cart']);
  }
}
