import { Component, OnInit } from '@angular/core';

export class CarouselItem {
  imageUrl!: string;
  altText!: string;
  title!: string;
  description!: string;
}

export class Carousel {
  items: CarouselItem[] = [];
  selectedIndex: number = 0;
}

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  carousel: Carousel = new Carousel();
  selectedIndex: number = 0; // Define selectedIndex property here

  constructor() {
    this.carousel.items = [
      { 
        imageUrl: 'https://media.istockphoto.com/id/1338894509/photo/woman-choosing-a-new-style-for-herself.jpg?s=612x612&w=0&k=20&c=Ew11SGoTR-W4hO719So27fWOn9M8oRyFVQerofbBdr4=',
        altText: 'Carousel Image 1',
        title: 'Title 1',
        description: 'Description 1'
      },
      { 
        imageUrl: 'https://media.istockphoto.com/id/802752350/photo/shopping-girls-are-entering-in-a-clothes-store.jpg?s=612x612&w=0&k=20&c=ejN7n8BGYrqc_TpMtktk4akSeHlgodWNZCr1cxxtrRM=',
        altText: 'Carousel Image 2',
        title: 'Title 2',
        description: 'Description 2'
      },
      // Add more items as needed
    ];
  }

  ngOnInit() {
    // You can add initialization logic here if needed
  }
}
