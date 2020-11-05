import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { ProductListComponent } from './product-list/product-list.component';
import {Product} from './product.model';
import { ProductRowComponent } from './product-row/product-row.component';
=======
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsRowComponent } from './products-row/products-row.component';
import { ProductImageComponent } from './product-image/product-image.component';
import { PriceDisplayComponent } from './price-display/price-display.component';
import { ProductDepartmentComponent } from './product-department/product-department.component';
>>>>>>> b48c2fa04fd6196ae3dd96e063f1572176c050e7

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
<<<<<<< HEAD
        AppComponent,
        ProductListComponent,
        ProductRowComponent
=======
        AppComponent,ProductsListComponent,ProductsRowComponent,ProductImageComponent,PriceDisplayComponent,ProductDepartmentComponent
>>>>>>> b48c2fa04fd6196ae3dd96e063f1572176c050e7
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'inventory-app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('inventory-app');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('span').textContent).toContain('inventory-app is running!');
  });
});
