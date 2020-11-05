import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
<<<<<<< HEAD
  template: `
  <div class="inventory-app">
    <products-list 
      [productList]="products" 
      (onProductSelected)="productWasSelected($event)">
    </products-list>
  </div>
  `
  
=======
  templateUrl: './app.component.html',

>>>>>>> b48c2fa04fd6196ae3dd96e063f1572176c050e7
})
export class AppComponent {
  title = 'inventory-app';
  product: Product;
  products: Product[];
  constructor() {
    let newProduct = new Product('NICEHAT', 'A Nice Black Hat', '/resources/images/products/black-hat.jpg', ['Men', 'Accessories', 'Hats'], 29.99);
    this.product = newProduct;
    this.products = [
      new Product('MYSHOES', 'Black Running Shoes', '/assets/products/black-shoes.jpg', ['Men', 'Shoes', 'Running Shoes'], 109.99),
      new Product('NEATOJACKET', 'Blue Jacket', '/assets/products/blue-jacket.jpg', ['Women', 'Apparel', 'Jackets & Vests'], 29.99),
      new Product('NICEHAT', 'A Nice Black Hat', '/assets/products/black-hat.jpg', ['Men', 'Accessories', 'Hats'], 29.99)
    ];
  }
  productWasSelected(product: Product):void{
    console.log('Product clicked:',product);
  }
  productWasSelected(product: Product):void{
    console.log('Product clicked',product);
  }
}
