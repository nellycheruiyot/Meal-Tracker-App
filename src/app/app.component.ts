import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Meal Tracker';
  public foods: Food[] = [
    new Food(1, "Hamburger", "Didn't get a soda or cheese on my burger", 354),
    new Food(2, "Fries", "I only ate half of them",365)
  ];
}
export class Food {
  public done: boolean = false;
  constructor(public id: number, public name: string, public details: string, public calories: number) {}
}
