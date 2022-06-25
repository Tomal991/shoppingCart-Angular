import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Product } from '../model/product';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}
  
    products: Product[] = [
    new Product(1, 'polo shirt',109,'Your perfect pack for everyday use',"men's clothing",'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'),
    new Product(2, 'polo shirt',109,'Your perfect pack for everyday use',"men's clothing",'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'),
    new Product(3, 'polo shirt',109,'Your perfect pack for everyday use',"men's clothing",'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'),
    new Product(4, 'polo shirt',109,'Your perfect pack for everyday use',"men's clothing",'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'),
    new Product(5, 'polo shirt',109,'Your perfect pack for everyday use',"men's clothing",'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'),
   
    
  ];
  
  getProducts():Product[] {
    return this.products
  
    
  }


}
