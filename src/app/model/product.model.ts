// src/app/model/product.model.ts

export class Product {
    constructor(
        public id: number,
        public name: string,
        public category: string,
        public description: string,
        public price: number  // Change price to `number`
    ) {}
}
