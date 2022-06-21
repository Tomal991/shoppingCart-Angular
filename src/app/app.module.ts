import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductsComponent } from './components/products/products.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from './components/button/button.component';
import { FilterPipe } from './shared/filter.pipe';
import { StoreModule } from '@ngrx/store';
import { ProductCategoryComponent } from './components/product-category/product-category.component';
import { CartSidebarComponent } from './components/cart-sidebar/cart-sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CartComponent,
    ProductsComponent,
    ButtonComponent,
    FilterPipe,
    ProductCategoryComponent,
    CartSidebarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSidenavModule
    // StoreModule.forRoot({ shopping: ShoppingReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
