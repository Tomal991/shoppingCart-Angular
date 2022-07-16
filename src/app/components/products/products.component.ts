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
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  productLists: Product[] = [];
  searchKey: string = '';
  public filterProductLists: any[] = [];

  public addedItems: any[] = [];
  public totalItem: number = 0;

  hoverIndex: any;
  category: any[] = [];
  subCategory1: any[] = [];
  subCategory2: any[] = [];
  // toppings = this._formBuilder.group({
  //   pepperoni: false,
  // });
  selectedCategory:any[]=[]
  constructor(
    public dialog: MatDialog,
    private apiService: ApiService,
    private cartService: CartService,
    private _formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.productLists = this.apiService.getProducts();
    this.filterProductLists = this.apiService.getProducts();
    this.category = this.apiService.getCategories();
    this.subCategory1 = this.apiService.getSubCategory1();
    this.subCategory2 = this.apiService.getSubCategory2();

    this.productLists.forEach((a: any) => {
      ///create property in the object

      Object.assign(a, {
        quantity: 0,
        total: a.price,
      });
    });
    //search
    this.cartService.search.subscribe((val) => {
      this.searchKey = val;
    });
  }

  $OpenDialog(
    data: any,
    enterAnimationDuration: string,
    exitAnimationDuration: string
  ): void {
    this.dialog.open(ProductDetailsComponent, {
      data: data,
      width: '800px',
      height: '600px',
    });
    // console.log(item)
  }

  $AddToCartButton_click(item: any, id: any) {
    if (item.quantity == 0) {
      item.quantity++;
    }

    this.cartService.addToCart(item);

    this.addedItems.push(id);
    console.log(id);
  }

  $Increase(item: any) {
    this.cartService.addToCart(item);
  }
  $Decrease(item: any) {
    this.cartService.reduceQuantity(item);
  }

  $Filter(category: any) {
    this.filterProductLists = this.productLists.filter((a: any) => {
      if (
        a.category == category ||
        a.subCategory1 == category ||
        a.subCategory2 == category
      ) {
        return a;
      }
    });
  }

  $CheckboxFilter(event: any, category: any) {
  //   console.log(this.selectedCategory)
  //   if (this.selectedCategory != undefined || this.selectedCategory.length> 0) {
  
  //     if(this.selectedCategory.includes(category)){
  //     this.selectedCategory = this.selectedCategory.filter(function(e) { return e !== category })
  //     }
  //     else{
  //       this.selectedCategory.push(category)
  //     }
  // }
     this.filterProductLists = this.productLists;
     console.log(this.productLists)

    if (event.checked) {
      this.filterProductLists = this.productLists.filter((a: any) => {
        if (
          a.category == category ||
          a.subCategory1 == category ||
          a.subCategory2 == category
        ) {
          return a;
        }
      });
    }
  }
  public enter(i: any) {
    this.hoverIndex = i;
  }

  public leave(i: any) {
    this.hoverIndex = null;
  }
  formatLabel(value: any) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }
  onSliderChange(event: any) {
    this.filterProductLists = this.productLists.filter((a: any) => {
      if (a.price <= event.value) {
        console.log(a);
        return a;
      }
    });
  }
  // ngOnDestroy(){

  // }

  //All Public Method goes here
}
