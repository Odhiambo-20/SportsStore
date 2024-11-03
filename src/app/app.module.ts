import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ProductRepository } from './model/product.repository';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ProductRepository],
})
export class AppModule { }
