// src/app/model/static.datasource.ts

import { Injectable } from "@angular/core";
import { Product } from "./product.model";
import { Observable, from } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class StaticDataSource {
    private products: Product[] = [
        new Product(1, "Product 1", "Category 1", "Product 1 (Category 1)", 100),
        new Product(2, "Product 2", "Category 1", "Product 2 (Category 1)", 100),
        new Product(3, "Product 3", "Category 1", "Product 3 (Category 1)", 100),
        new Product(4, "Product 4", "Category 2", "Product 4 (Category 2)", 100),
        new Product(5, "Product 5", "Category 2", "Product 5 (Category 2)", 100),
        new Product(6, "Product 6", "Category 2", "Product 6 (Category 2)", 100),
        new Product(7, "Product 7", "Category 3", "Product 7 (Category 3)", 100),
        new Product(8, "Product 8", "Category 3", "Product 8 (Category 3)", 100),
        new Product(9, "Product 9", "Category 3", "Product 9 (Category 3)", 100),
    ];

    getProducts(): Observable<Product[]> {
        return from([this.products]);
    }
}
