import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
// import { ShoppingItem } from './model/shopping-item';
// import { AppState } from './store/app-state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  constructor() { }

  ngOnInit() {
      // this.shoppingItems$ = this.store.select(store => store.shopping);
  }
  
}
