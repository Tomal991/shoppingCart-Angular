import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { CartService } from 'src/app/service/cart.service';
import { ApiService } from './../../service/api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  public productList: any;
  searchKey: string = '';
  toggle = true;
  AddToCartButton: string = 'Add to cart';
  public filterCategory: any;
  // private labelStates = ['Edit', 'Save'];
  // public label: string = this.labelStates[0];

  constructor(
    private apiService: ApiService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.apiService.getProducts().subscribe((res: any) => {
      this.productList = res;
      this.filterCategory = res;

      //make two categories into one
      this.productList.forEach((a: any) => {
        if (
          a.category === "women's clothing" ||
          a.category === "men's clothing"
        ) {
          a.category = 'fashion';
        }

        ///create property in the object
        Object.assign(a, {
          quantity: 1,
          total: a.price,
          toggle: false,
          status: 'Add to cart',
        });
      });
    });

    //search
    this.cartService.search.subscribe((val) => {
      this.searchKey = val;
    });
  }

  //add to cart or remove
  $AddToCartButton_click(item: any) {
    item.toggle = !item.toggle;
    if (item.toggle) {
      item.status = 'Added';
      this.cartService.addToCart(item);
    } else {
      item.status = 'Add to cart';
      this.cartService.removeCartitem(item);
    }
  }

  //
  $Filter(category: string) {
    this.filterCategory = this.productList.filter((a: any) => {
      if (a.category == category || category == '') {
        return a;
      }
    });
  }

  //All Public Method goes here
}
