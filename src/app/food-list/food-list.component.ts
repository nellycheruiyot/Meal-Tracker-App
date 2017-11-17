import { Component, OnInit } from '@angular/core';
import { Food } from '../food.model';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  public foods: Food[] = [
    new Food(1, "Hamburger", "Didn't get a soda or cheese on my burger", 354),
    new Food(2, "Fries", "I only ate half of them",365)
  ];

  constructor() { }

  ngOnInit() {
  }

}
