import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FoodListComponent } from './food-list/food-list.component';
import { EditFoodComponent } from './edit-food/edit-food.component';
import { NewFoodComponent } from './new-food/new-food.component';


@NgModule({
  declarations: [
    AppComponent,
    FoodListComponent,
    EditFoodComponent,
    NewFoodComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
