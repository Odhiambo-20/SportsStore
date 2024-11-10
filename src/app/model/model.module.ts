// src/app/model/model.module.ts

import { NgModule } from "@angular/core";
import { ProductRepository } from "./product.repository";
import { OrderRepository } from "./order.repository";
import { RestDataSource } from "./rest.datasource";
import { HttpClient } from "@angular/common/http";

@NgModule({
    providers: [
        ProductRepository,
        OrderRepository,
        RestDataSource,
        HttpClient
    ]
})
export class ModelModule {}
