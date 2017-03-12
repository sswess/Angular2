import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe';
import {Ingredient} from "../../ingredient";
import {RecipeService} from "../recipe.service";

@Component({
  selector: 'rb-recipe-list',
  templateUrl: 'recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];

  constructor(private recipeService:RecipeService) {}

  ngOnInit() {
    this.recipes = this.recipeService.getRecipe();
  }
  onSelected(recipe: Recipe){
  }



}
