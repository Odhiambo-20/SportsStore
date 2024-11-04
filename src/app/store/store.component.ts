// src/app/store/store.component.ts

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../model/product.model';
import { ProductRepository } from '../model/product.repository';
import { CartService } from '../model/cart.service';
import { ProductListComponent } from './product-list/product-list.component';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-store',
  standalone: true,
  imports: [CommonModule, ProductListComponent, CartComponent],
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  products: Product[] = [];
  categories: string[] = [];
  currentPage = 1;
  pageSize = 10;
  totalPages = 0;
  selectedCategory: string | null = null;

  constructor(public repository: ProductRepository, public cartService: CartService) {}

  ngOnInit() {
    this.loadProducts();
    this.loadCategories();
  }

  loadProducts() {
    this.repository.getProducts(this.currentPage, this.pageSize).subscribe(result => {
      this.products = result.products;
      this.totalPages = result.totalPages;
    });
  }

  loadCategories() {
    this.repository.getCategories().subscribe(categories => {
      this.categories = categories;
    });
  }

  filterByCategory(category: string) {
    this.selectedCategory = category;
    this.currentPage = 1; // Reset to first page when changing category
    this.loadProducts();
  }

  addToCart(product: Product) {
    this.cartService.addItem(product);
  }

  setPage(page: number) {
    this.currentPage = page;
    this.loadProducts();
  }
}
