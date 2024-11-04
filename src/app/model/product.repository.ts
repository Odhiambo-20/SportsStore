// src/app/model/product.repository.ts

import { Injectable } from "@angular/core";
import { Product } from "./product.model";
import { StaticDataSource } from "./static.datasource";
import { of } from "rxjs";

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

    getProducts(currentPage: number, pageSize: number, category: string | null = null) {
      const products = this.products.filter(p => category == null || category == p.category);
      const totalPages = Math.ceil(products.length / pageSize);

      // Structure the result as { products, totalPages }
      return of({ products, totalPages });
    }

    getProduct(id: number): Product | undefined {
        return this.products.find(p => p.id == id);
    }

    getCategories(): string[] {
        return this.categories;
    }
}
