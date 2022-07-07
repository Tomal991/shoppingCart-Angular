import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category, Product } from '../model/product';
import { SubCategory1 } from './../model/product';
import { SubCategory2 } from './../model/product';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  products: Product[] = [
    {
      id: 1,
      title: '16gb ram corsair',
      price: 100,
      description: 'Your perfect pack for everyday use',
      category: 'Component',
      image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
      subCategory1: 'ram',
      subCategory2: 'corsair',
    },
    {
      id: 2,
      title: '16gb ram gskill',
      price: 200,
      description: 'Your perfect pack for everyday use',
      category: 'Component',
      image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
      subCategory1: 'ram',
      subCategory2: 'gskill',
    },
    {
      id: 3,
      title: 'led tv dell',
      price: 300,
      description: 'Your perfect pack for everyday use',
      category: 'TV',
      image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
      subCategory1: 'led',
      subCategory2: 'dell',
    },
    {
      id: 4,
      title: '32gb ram corsair',
      price: 400,
      description: 'Your perfect pack for everyday use',
      category: 'Component',
      image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
      subCategory1: 'ram',
      subCategory2: 'corsair',
    },
    {
      id: 5,
      title: 'samsung 250gb ssd',
      price: 500,
      description: 'Your perfect pack for everyday use',
      category: 'Component',
      image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
      subCategory1: 'ssd',
      subCategory2: 'samsung',
    },
    // {
    //   id: 4,
    //   title: '32 gb ram ven',
    //   price: 200,
    //   description: 'Your perfect pack for everyday use',
    //   category: 4,
    //   image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    //   subCategory1:'ram',
    //   subCategory2:3
    // },
    // {
    //   id: 4,
    //   title: 'item4',
    //   price: 400,
    //   description: 'Your perfect pack for everyday use',
    //   category: 4,
    //   image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    // },
    // {
    //   id: 5,
    //   title: 'item5',
    //   price: 500,
    //   description: 'Your perfect pack for everyday use',
    //   category: 5,
    //   image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    // },
    // {
    //   id: 6,
    //   title: 'item6',
    //   price: 600,
    //   description: 'Your perfect pack for everyday use',
    //   category: 6,
    //   image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    // },
    // {
    //   id: 7,
    //   title: 'item7',
    //   price: 700,
    //   description: 'Your perfect pack for everyday use',
    //   category: 7,
    //   image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    // },

    // {
    //   id: 8,
    //   title: 'item8',
    //   price: 800,
    //   description: 'Your perfect pack for everyday use',
    //   category: 8,
    //   image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    // },
    // {
    //   id: 9,
    //   title: 'item9',
    //   price: 900,
    //   description: 'Your perfect pack for everyday use',
    //   category: 9,
    //   image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    // },
  ];

  category: Category[] = [
    {
      id: 1,
      title: 'Desktop',
    },
    {
      id: 2,
      title: 'Laptop',
    },
    {
      id: 3,
      title: 'Monitor',
    },
    {
      id: 4,
      title: 'Component',
    },

    {
      id: 5,
      title: 'TV',
    },
    {
      id: 6,
      title: 'fashion',
    },
    {
      id: 7,
      title: 'Accessories',
    },
    {
      id: 8,
      title: 'Networking',
    },
    {
      id: 9,
      title: 'Security',
    },
    {
      id: 10,
      title: 'Others',
    },
  ];

  subCategories1: SubCategory1[] = [
    {
      id: 1,
      title: 'ram',
      categoryId: 4,
    },
    {
      id: 2,
      title: 'ssd',
      categoryId: 4,
    },
    {
      id: 3,
      title: 'processor',
      categoryId: 4,
    },
    {
      id: 4,
      title: 'led',
      categoryId: 3,
    },
  ];
  subCategories2: SubCategory2[] = [
    {
      id: 1,
      title: 'intel',
      subCategory1Id: 3,
      categoryId: 4,
    },
    {
      id: 2,
      title: 'corsair',
      subCategory1Id: 1,
      categoryId: 4,
    },
    {
      id: 3,
      title: 'gskill',
      subCategory1Id: 1,
      categoryId: 4,
    },
    {
      id: 4,
      title: 'samsung',
      subCategory1Id: 2,
      categoryId: 4,
    },
    {
      id: 5,
      title: 'dell',
      subCategory1Id: 4,
      categoryId: 3,
    },
  ];
  getProducts(): Product[] {
    return this.products;
  }

  getCategories(): Category[] {
    return this.category;
  }
  getSubCategory1(): SubCategory1[] {
    return this.subCategories1;
  }
  getSubCategory2(): SubCategory2[] {
    return this.subCategories2;
  }
}
