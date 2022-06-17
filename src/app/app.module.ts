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
// import { shoppingReducer } from './store/shop.reducer';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CartComponent,
    ProductsComponent,
    ButtonComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    // StoreModule.forRoot({ shopping: shoppingReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
