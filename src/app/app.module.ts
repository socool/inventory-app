import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { ProductListComponent } from './product-list/product-list.component';
import { ProductRowComponent } from './product-row/product-row.component';
=======
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsRowComponent } from './products-row/products-row.component';
import { ProductImageComponent } from './product-image/product-image.component';
import { PriceDisplayComponent } from './price-display/price-display.component';
import { ProductDepartmentComponent } from './product-department/product-department.component';
>>>>>>> b48c2fa04fd6196ae3dd96e063f1572176c050e7

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    ProductListComponent,
    ProductRowComponent
=======
    ProductsListComponent,
    ProductsRowComponent,
    ProductImageComponent,
    PriceDisplayComponent,
    ProductDepartmentComponent
>>>>>>> b48c2fa04fd6196ae3dd96e063f1572176c050e7
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
