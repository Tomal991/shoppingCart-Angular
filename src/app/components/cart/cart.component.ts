import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  products: any[] = [];
  grandTotal: number = 0;
  subsink = new SubSink();

  constructor(private cartService: CartService,private apiService: ApiService,) {}

  ngOnInit(): void {
      this.subsink.sink = this.cartService.getProducts().subscribe((res: any) => {
      this.products = res;
      this.grandTotal = this.cartService.getTotalPrice();
    });
 
    // this.subsink.sink = this.apiService.getProducts().subscribe((res: any) => {
    //   let existingData : any = localStorage.getItem('addedItems');
    //   let parsedExistingData: any[] = [];
    //   parsedExistingData = JSON.parse(existingData) == null?0:JSON.parse(existingData);

    //   this.products = res.filter((item:any) => parsedExistingData.includes(item.id));
    //   this.grandTotal = this.cartService.getTotalPrice();
    // });
    
  }

  $RemoveItem(item: any) {
    this.cartService.removeCartitem(item);
  }
  $EmptyCart() {
    this.cartService.removeAllCart();
  }

  $ChangeGrandTotal() {
    this.grandTotal = this.cartService.getTotalPrice();
  }
  ngOnDestroy() {
    this.subsink.unsubscribe();
  }
}
