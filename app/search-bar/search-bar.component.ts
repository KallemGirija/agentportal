import { Component } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  searchTerm: string = '';

  constructor() { }

  search(): void {
    // Implement the search logic based on the searchTerm
    console.log('Searching for:', this.searchTerm);
  }
}
