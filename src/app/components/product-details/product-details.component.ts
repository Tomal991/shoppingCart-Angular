import { Component, Inject, OnInit } from '@angular/core';
import { ApiService } from './../../service/api.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
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
    public data: Product,public dialogRef: MatDialogRef<ProductDetailsComponent>
  ) {}

  ngOnInit(): void {
    this.products = this.data;
   console.log(this.products)
  }
  $Increase(product:any) {
    this.cartSevice.addToCart(product)
    if (product.quantity == 0) {
      product.quantity++;
    }
  }
  
  $Decrease(product:any) {
   this.cartSevice.reduceQuantity(product)
  }
}
