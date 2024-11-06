import { NgModule } from "@angular/core";
import { ProductRepository } from "./product.repository";
import { StaticDataSource } from "./static.datasource";
import { Order } from "./order.model";
import { OrderRepository } from "./order.repository";
@NgModule({
providers: [ProductRepository, StaticDataSource,
Order, OrderRepository]
})
export class ModelModule { }