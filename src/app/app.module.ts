import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { FoodListComponent } from './food-list/food-list.component';
import { EditFoodComponent } from './edit-food/edit-food.component';
import { NewFoodComponent } from './new-food/new-food.component';
import { CaloriesPipe } from './calories.pipe';


@NgModule({
  declarations: [
    AppComponent,
    FoodListComponent,
    EditFoodComponent,
    NewFoodComponent,
    CaloriesPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
