import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Food } from '../food.model';

@Component({
  selector: 'app-edit-food',
  templateUrl: './edit-food.component.html',
  styleUrls: ['./edit-food.component.css']
})
export class EditFoodComponent implements OnInit {
  @Input() childSelectedFood: Food;
  @Output() doneClickedSender = new EventEmitter();
  doneClicked() {
    this.doneClickedSender.emit();
  }

  constructor() { }

  ngOnInit() {
  }

}
