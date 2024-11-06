import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { ProductModule } from './product/product.module';
import { CartModule } from './cart/cart.module';
import { ProductRepository } from './model/product.repository';
import { RouterModule } from '@angular/router';
import { CartService } from './model/cart.service';
import { FormsModule } from '@angular/forms';
import { OrderRepository } from './model/order.repository';
import { OrderService } from './model/order.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ProductModule,
    CartModule,
    RouterModule,
    FormsModule
  ],
  providers: [
    ProductRepository,
    CartService,
    OrderService,
    OrderRepository,
    provideClientHydration()
  ],
  bootstrap: []
})


export class AppModule { }
