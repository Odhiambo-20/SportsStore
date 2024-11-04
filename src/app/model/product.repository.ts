// src/app/model/product.repository.ts

import { Injectable } from "@angular/core";
import { Product } from "./product.model";
import { StaticDataSource } from "./static.datasource";
import { Observable, of } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class ProductRepository {
    private products: Product[] = [];
    private categories: string[] = [];

    constructor(private dataSource: StaticDataSource) {
        dataSource.getProducts().subscribe(data => {
            this.products = data;
            this.categories = data.map(p => p.category ?? "(None)")
                .filter((c, index, array) => array.indexOf(c) == index).sort();
        });
    }

    getProducts(currentPage: number, pageSize: number, category: string | null = null): Observable<{ products: Product[], totalPages: number }> {
      // First, filter by category if one is selected
      const filteredProducts = category
          ? this.products.filter(p => p.category === category)
          : this.products;

      // Calculate total pages based on filtered products
      const totalPages = Math.ceil(filteredProducts.length / pageSize);

      // Calculate start and end indices for pagination
      const startIndex = (currentPage - 1) * pageSize;
      const endIndex = Math.min(startIndex + pageSize, filteredProducts.length);

      // Get the products for the current page
      const paginatedProducts = filteredProducts.slice(startIndex, endIndex);

      return of({
          products: paginatedProducts,
          totalPages: totalPages
      });
  }

    getProduct(id: number): Product | undefined {
        return this.products.find(p => p.id == id);
    }

    getCategories(): Observable<string[]> {
        return of(this.categories);
    }
}
