import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Food } from '../food.model';

@Component({
  selector: 'app-new-food',
  templateUrl: './new-food.component.html',
  styleUrls: ['./new-food.component.css']
})
export class NewFoodComponent implements OnInit {
  @Output() newFoodSender = new EventEmitter();
  addClicked(number: number, name: string, details: string, calories: number) {
    var newFoodToAdd: Food = new Food(number, name, details, calories);
    this.newFoodSender.emit(newFoodToAdd);
  }

  constructor() { }

  ngOnInit() {
  }

}
