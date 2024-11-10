// src/app/model/rest.datasource.ts

import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Product } from "./product.model";
import { Order } from "./order.model";
import { HttpClient } from "@angular/common/http";

const PROTOCOL = "http";
const PORT = 3000;

@Injectable({
    providedIn: 'root'
})
export class RestDataSource {
    baseUrl: string;

    constructor(private http: HttpClient) {
        this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
    }

    getProducts(): Observable<Product[]> {
        // Directly use HttpClient get method
        return this.http.get<Product[]>(`${this.baseUrl}products`);
    }

    saveOrder(order: Order): Observable<Order> {
        // Directly use HttpClient post method
        return this.http.post<Order>(`${this.baseUrl}orders`, order);
    }
}
