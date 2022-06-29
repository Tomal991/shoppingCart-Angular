import { Injectable, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
// import { Product } from '../model/product';
// import { ShoppingItem } from '../model/shopping-item';
import { Store } from '@ngrx/store';
import { Product } from '../model/product';
// import { AppState } from '../store/app-state';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public cartItemList: any = [];
  public productList = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>('');

  constructor(private http: HttpClient) {}

  getProducts() {
    return this.productList.asObservable();
  }

  addToCart(product: any) {
    let productExists: boolean = false;

    for (let i in this.cartItemList) {
      if (this.cartItemList[i].id === product.id) {
        productExists = true;
        this.cartItemList[i].quantity++;
        this.productList.next(this.cartItemList);
      }
    }

    if (!productExists) {
      this.cartItemList.push(product);

      this.productList.next(this.cartItemList);

      this.getTotalPrice();
      console.log(this.cartItemList);
    }
  }

  reduceQuantity(product: any) {
    for (let i in this.cartItemList) {
      if (this.cartItemList[i].id === product.id) {
        this.cartItemList[i].quantity--;
        if (this.cartItemList[i].quantity == 0) {
          this.removeCartItem(product);
        }
        this.productList.next(this.cartItemList);
      }
    }
  }

  getTotalPrice(): number {
    let grandTotal = 0;
    this.cartItemList.map((a: any) => {
      grandTotal += a.total * a.quantity;
    });
    return grandTotal;
  }

  removeCartItem(product: any) {
    for (let i in this.cartItemList) {
      if (this.cartItemList[i].id === product.id) {
        this.cartItemList[i].quantity = 0;
        this.cartItemList.splice(i, 1);
      }
    }
    this.productList.next(this.cartItemList);
  }

  removeAllCart() {
    this.cartItemList = [];
    this.productList.next(this.cartItemList);
  }
}
