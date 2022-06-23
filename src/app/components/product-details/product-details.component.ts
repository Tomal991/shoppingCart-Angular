import { Component, OnInit, Output } from '@angular/core';
import { ApiService } from './../../service/api.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
products:any
// @Output() data:any
  constructor(private apiService:ApiService) { }

  ngOnInit(): void {
    this.apiService.getProducts().subscribe((res)=>{
      this.products=res
    })

  }

}
