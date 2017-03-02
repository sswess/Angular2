import { Injectable } from '@angular/core';
import {Recipe} from "./recipe";
import {Ingredient} from "../ingredient";

@Injectable()
export class RecipeService {
    private recipes: Recipe[] = [
    new Recipe('Schnitzel', 'Very tasty', 'https://eutourists.info/wp-content/uploads/2017/01/Wiener-Schnitzel.jpg', [
      new Ingredient('French Fries', 2),
      new Ingredient('Pork Meat', 1)
    ]),
    new Recipe('Summer Salad', 'Okayish', 'http://ohmyveggies.com/wp-content/uploads/2013/06/the_perfect_summer_salad.jpg', [])
  ];
  constructor() { }

  getRecipe(){

    return this.recipes;
  }

}
