import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products: any[] = []; // Define the 'products' property and initialize it with an empty array

  constructor() {
    // Fetch products from a service or API and assign them to the 'products' property
    this.products = [/* Array of products */];
  }
}
