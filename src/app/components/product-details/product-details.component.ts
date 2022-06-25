import { Component, Inject, OnInit } from '@angular/core';
import { ApiService } from './../../service/api.service';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
products:any

  constructor(private apiService:ApiService) { }

  ngOnInit(): void {
   
  }

}
