import { Component, OnInit,EventEmitter,Input,Output } from '@angular/core';
import {Product} from '../product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.sass']
})
export class ProductListComponent implements OnInit {
  @Input() productList: Product[];
  @Output() onProductSelected: EventEmitter<Product>;
  private currentProduct: Product;
  constructor() { 
    this.onProductSelected = new EventEmitter();
  }

  ngOnInit() {
  }

}
