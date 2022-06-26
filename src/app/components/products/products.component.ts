import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
// import { Product } from 'src/app/model/product';
import { CartService } from 'src/app/service/cart.service';
import { ApiService } from './../../service/api.service';
// import { PRODUCTS } from 'src/app/model/data';
import { BehaviorSubject, Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { Product } from 'src/app/model/product';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  productLists: Product[] = [];
  searchKey: string = '';
  public filterCategory: any;

  public addedItems: any[] = [];
  public totalItem: number = 0;

  hoverIndex: any;
  // public cartItemList: any = [];
  // public productList = new BehaviorSubject<any>([]);

  constructor(
    public dialog: MatDialog,
    private apiService: ApiService,
    private cartService: CartService
  ) {}
  openDialog(data: any) {
    // const dialogConfig = new MatDialogConfig();
    this.dialog.open(ProductDetailsComponent, {data:data});
    // console.log(item)
  }
  ngOnInit(): void {

    this.productLists = this.apiService.getProducts();
    this.filterCategory = this.apiService.getProducts();
    this.productLists.forEach((a: any) => {
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
    //search
    this.cartService.search.subscribe((val) => {
      this.searchKey = val;
    });
  }
  // public products(): Product[] {
  //   return PRODUCTS;
  //   // }

  $AddToCartButton_click(element: any, item: any, id: any) {
    this.cartService.addToCart(item);

    this.addedItems.push(id);
    console.log(id);

    element.textContent = `${item.quantity} in bag`;
  }

  $Increase(item: any) {
    this.cartService.addToCart(item);
  }
  $Decrease(item: any) {
    this.cartService.reduceQuantity(item);
  }

  $Filter(category: string) {
    this.filterCategory = this.productLists.filter((a: any) => {
      if (a.category == category || category == '') {
        return a;
      }
    });
  }

  public enter(i: any) {
    this.hoverIndex = i;
  }

  public leave(i: any) {
    this.hoverIndex = null;
  }
  // ngOnDestroy(){

  // }

  //All Public Method goes here
}
