import { Component } from '@angular/core';
import {Product} from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  
})
export class AppComponent {
  title = 'inventory-app';
  product: Product;
  products: Product[];
  constructor(){
    let newProduct = new Product('NICEHAT','A Nice Black Hat','/resources/images/products/black-hat.jpg',['Men','Accessories','Hats'],29.99);
    this.product = newProduct;
    this.products = [];
  }
}
