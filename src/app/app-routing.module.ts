import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartDetailComponent } from './cart/cart-detail/cart-detail.component';
import { ProductDetailComponent } from './store/product-detail/product-detail.component';
import { StoreComponent } from './store/store.component';

const routes: Routes = [
  { path: '', component: StoreComponent },
  { path: 'cart', component: CartDetailComponent },
  { path: 'product/:id', component: ProductDetailComponent },
  { path: '**', redirectTo: '/store' }  // Redirect any unknown paths to '/store'
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
