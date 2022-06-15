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
  increaseOrDecrease: boolean = false;

  public addedItems: any[] = [];
  public totalItem: number = 0;
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
  $AddToCartButton_click(element: any, item: any, id: any) {
    this.cartService.addToCart(item);

    this.increaseOrDecrease = true;

    //  let existingData : any = localStorage.getItem('addedItems');
    //  localStorage.removeItem('addedItems');
    // let parsedExistingData: any[] = [];
    // parsedExistingData = JSON.parse(existingData) == null?[]:JSON.parse(existingData);
    // console.log(JSON.parse(existingData));
    // if(!parsedExistingData.includes(id)){
    //   parsedExistingData.push(id);
    // }
    this.addedItems.push(id);
    console.log(id);

    element.textContent = 'Added';
    // element.parent().parent().addClass("hidden");

    // this.increaseOrDecrease=true
    // this.addedItems = parsedExistingData;
    // localStorage.setItem('addedItems', JSON.stringify(this.addedItems));
    // this.totalItem =  parsedExistingData.length;
  }
  $Increase(item: any) {
    this.cartService.addToCart(item);
  }
  $Decrease(item: any) {
    this.cartService.removeCartitem(item);
  }

  $Filter(category: string) {
    this.filterCategory = this.productList.filter((a: any) => {
      if (a.category == category || category == '') {
        return a;
      }
    });
  }
  // ngOnDestroy(){

  // }

  //All Public Method goes here
}
