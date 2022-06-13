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
  public filterCategory: any;
  isAddedToCart: boolean = false;
  status: string = 'Add to cart';
  // public selectedIndex = -1;
  public addedItems: any[] = [];
  public addedItem: string = '';
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
        });
      });
    });

    //search
    this.cartService.search.subscribe((val) => {
      this.searchKey = val;
    });
  }
  setSaving(element: any, id: any) {
    element.textContent = 'Added';
    this.addedItems.push(id);
    localStorage.setItem('addedItems', this.addedItems.toString());
  }
  //add to cart or remove
  $AddToCartButton_click(item: any) {
    this.cartService.addToCart(item);
  }

  $Filter(category: string) {
    this.filterCategory = this.productList.filter((a: any) => {
      if (a.category == category || category == '') {
        return a;
      }
    });
  }

  //All Public Method goes here
}
