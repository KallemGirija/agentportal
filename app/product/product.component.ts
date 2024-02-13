// product.component.ts
import { Component } from '@angular/core';
import { Product } from '../product';
import { filterProductsByCategory } from '../product.service';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css']
})
export class ProductComponent {
    selectedCategory: string = 'Western Wear';
    filteredProducts: Product[];

    constructor() {
        this.filteredProducts = filterProductsByCategory(this.selectedCategory);
    }

    updateFilteredProducts(category: string) {
        this.selectedCategory = category;
        this.filteredProducts = filterProductsByCategory(category);
    }
}
