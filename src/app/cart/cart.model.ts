// src/app/cart/cart-item.model.ts

import { Product } from '../model/product.model';

export interface Cart {
  product: Product;
  quantity: number;
}
