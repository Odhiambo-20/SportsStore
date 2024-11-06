// src/app/store/product-list/product-list.component.ts

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../model/product.model';
import { ProductService } from '../../model/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  @Input() products: Product[] = [];
  @Output() addToCart = new EventEmitter<Product>();

  currentPage = 1;
  pageSize = 3;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getProducts().subscribe(products => {
      this.products = products;
    });
  }

  onAddToCart(product: Product) {
    this.addToCart.emit(product);
  }
}
