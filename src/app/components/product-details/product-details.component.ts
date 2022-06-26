import { Component, Inject, OnInit } from '@angular/core';
import { ApiService } from './../../service/api.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Product } from 'src/app/model/product';
import { CartService } from 'src/app/service/cart.service';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  products: any;

  constructor(
    private apiService: ApiService,
    private cartSevice: CartService,
    @Inject(MAT_DIALOG_DATA)
    public data: Product
  ) {}

  ngOnInit(): void {
    this.products = this.data;
    console.log(this.products);
  }
  $Increase() {
    
  }
}
