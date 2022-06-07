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
  AddToCartButton: string = 'Add to cart';
  constructor(
    private apiService: ApiService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.apiService.getProducts().subscribe((res: any) => {
      this.productList = res;
      this.productList.forEach((a: any) => {
        Object.assign(a, { quantity: 1, total: a.price });
      });
    });
    this.cartService.search.subscribe((val) => {
      this.searchKey = val;
    });
  }

  $AddToCartButton_click(item: any) {
    if(this.AddToCartButton==="Add to cart"){
      this.AddToCartButton=`added`;
    }
    else{
      this.AddToCartButton="Add to cart"
    }
    
    this.cartService.addToCart(item);
  }


  //All Public Method goes here
}
