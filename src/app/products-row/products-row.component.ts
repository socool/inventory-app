import { Component, OnInit ,Input, HostBinding} from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-products-row',
  templateUrl: './products-row.component.html',
  styleUrls: ['./products-row.component.sass']
})
export class ProductsRowComponent implements OnInit {
  @Input() product: Product;
  @HostBinding('attr.class') cssClass = 'item';
  constructor() { }

  ngOnInit() {
  }

}
