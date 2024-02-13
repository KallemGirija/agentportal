import { Component } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {

  mensWearProducts: any[] = [
    {
      imageUrl: 'data:image/jpeg;base64,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',
      
    },
    
    // Add more Western wear products as needed
  ];


  makeOverProducts: any[] = [
    {
      imageUrl: 'data:image/jpeg;base64,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',
      
    },
    
    // Add more Western wear products as needed
  ];
  westernWearProducts: any[] = [
    {
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG3La911pMMXFQUhoacj_PDWj3JIavwJ6ozQ&usqp=CAU',
      
    },
    
    // Add more Western wear products as needed
  ];

  ethnicWearProducts: any[] = [
    {
      imageUrl: 'https://i.pinimg.com/474x/c1/69/7b/c1697bfc43e8c2b72cefdd7ee5341488.jpg',
    },
   
    // Add more Ethnic wear products as needed
  ];

  kidsWearProducts: any[] = [
    {
      imageUrl: 'data:image/jpeg;base64,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',
    },
   
    // Add more Ethnic wear products as needed
  ];
}