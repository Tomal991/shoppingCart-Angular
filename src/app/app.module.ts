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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSliderModule} from '@angular/material/slider';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MenuComponent } from './components/menu/menu.component';
import { MatIconModule } from '@angular/material/icon'
import {MatMenuModule} from '@angular/material/menu';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CartComponent,
    ProductsComponent,
    ButtonComponent,
    FilterPipe,
    ProductDetailsComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSidenavModule,MatDialogModule,MatSliderModule,MatCheckboxModule,MatIconModule,MatMenuModule
    // StoreModule.forRoot({ shopping: ShoppingReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
