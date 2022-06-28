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
    new Product(1, 'item 1',100,'Your perfect pack for everyday use',"men's clothing",'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'),
    new Product(2, 'item 2',200,'Your perfect pack for everyday use',"men's clothing",'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'),
    new Product(3, 'item 3',300,'Your perfect pack for everyday use',"men's clothing",'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'),
    new Product(4, 'item 4',400,'Your perfect pack for everyday use',"men's clothing",'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'),
    new Product(5, 'item 5',500,'Your perfect pack for everyday use',"men's clothing",'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'),
    new Product(6, 'item 6',600,'Your perfect pack for everyday use',"men's clothing",'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'),
    new Product(7, 'item 7',700,'Your perfect pack for everyday use',"men's clothing",'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'),
    new Product(8, 'item 8',800,'Your perfect pack for everyday use',"men's clothing",'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'),
    new Product(9, 'item 9',900,'Your perfect pack for everyday use',"men's clothing",'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'),
    new Product(10, 'item 10',1000,'Your perfect pack for everyday use',"men's clothing",'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'),
   
    
  ];
  
  getProducts():Product[] {
    return this.products
  
    
  }


}
