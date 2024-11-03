// src/app/store/store.component.ts

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../model/product.model';
import { ProductRepository } from '../model/product.repository';
import { CartService } from '../model/cart.service';

@Component({
  selector: 'store',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css'],
  template: `
<div class="container-fluid">
  <div class="row">
    <div class="col bg-dark text-white">
      <a class="navbar-brand">SPORTS STORE</a>
    </div>
  </div>
  <div class="row text-white">
    <div class="col-3 p-2">
      <ul>
        <li *ngFor="let category of categories">
          <a routerLink="/products/{{ category }}">{{ category }}</a>
        </li>
      </ul>
    </div>
    <div class="col-9 p-2 text-dark">
      <div *ngFor="let product of products">
        <div class="card m-1 p-1 bg-light">
          <h4>
            {{ product.name }}
            <span class="badge badge-pill badge-primary float-right">
              {{ product.price | currency:"USD":"symbol":"2.2-2" }}
            </span>
          </h4>
          <div class="card-text bg-white p-1">
            {{ product.description }}
          </div>
          <button (click)="addToCart(product)">Add to Cart</button>
        </div>
      </div>
      <div class="pagination">
        <span class="page-size">
          Show
          <select>
            <option value="3">3</option>
            <option value="5">5</option>
            <option value="10">10</option>
          </select>
          per page
        </span>
        <ul>
          <li *ngFor="let page of pages">
            <a [class.active]="currentPage === page" (click)="setPage(page)">{{ page }}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
  `
})
export class StoreComponent {
pages: any;
currentPage: any;
setPage(_t33: any) {
throw new Error('Method not implemented.');
}
  constructor(private repository: ProductRepository, private cartService: CartService) {}

  get products(): Product[] {
    return this.repository.getProducts();
  }

  get categories(): string[] {
    return this.repository.getCategories();
  }

  addToCart(product: Product) {
    this.cartService.addItem(product);
  }
}
