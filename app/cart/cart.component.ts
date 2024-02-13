import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cartItems: any[] = []; // Define the 'cartItems' property and initialize it with an empty array

  constructor() {
    // Initialize the cart items as needed
  }

  // Define the removeFromCart method
  removeFromCart(item: any): void {
    // Implement the logic to remove the item from the cart
  }
}
