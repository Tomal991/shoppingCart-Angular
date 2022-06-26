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
    new Product(1, 'polo shirt',100,'Your perfect pack for everyday use',"men's clothing",'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'),
    new Product(2, 'polo pant',200,'Your perfect pack for everyday use',"men's clothing",'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'),
    new Product(3, 'polo shoe',300,'Your perfect pack for everyday use',"men's clothing",'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'),
    new Product(4, 'polo watch',400,'Your perfect pack for everyday use',"men's clothing",'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'),
    new Product(5, 'polo jeans',500,'Your perfect pack for everyday use',"men's clothing",'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'),
    new Product(6, 'polo shirt',600,'Your perfect pack for everyday use',"men's clothing",'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'),
    new Product(7, 'polo shirt',700,'Your perfect pack for everyday use',"men's clothing",'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'),
    new Product(8, 'polo shirt',800,'Your perfect pack for everyday use',"men's clothing",'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'),
    new Product(9, 'polo shirt',900,'Your perfect pack for everyday use',"men's clothing",'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'),
    new Product(10, 'polo shirt',1000,'Your perfect pack for everyday use',"men's clothing",'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'),
   
    
  ];
  
  getProducts():Product[] {
    return this.products
  
    
  }


}
