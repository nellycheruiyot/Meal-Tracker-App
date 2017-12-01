import { Component } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Smart Meal Tracker';

  public masterFoodList: Food[] = [];
  selectedFood: Food = null;

  showDetails(clickedFood: Food) {
    this.selectedFood = clickedFood;
  }

  delete(itemToDelete: Food) {
    var delFood: number = this.masterFoodList.indexOf(itemToDelete);
    this.masterFoodList.splice(delFood, 1)
  }

  finishedEditing() {
    this.selectedFood = null;
  }
  
  addFood(newFoodFromChild: Food) {
    this.masterFoodList.push(newFoodFromChild)
  }
}
