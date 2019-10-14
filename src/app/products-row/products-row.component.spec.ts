import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsRowComponent } from './products-row.component';
import { Product } from '../product.model';
import { ProductImageComponent } from '../product-image/product-image.component';
import { PriceDisplayComponent } from '../price-display/price-display.component';

describe('ProductsRowComponent', () => {
  let component: ProductsRowComponent;
  let fixture: ComponentFixture<ProductsRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsRowComponent,ProductImageComponent,PriceDisplayComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
