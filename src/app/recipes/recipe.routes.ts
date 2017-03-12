import {Routes} from "@angular/router";
import {RecipeStartComponent} from "./recipe-start.component";
import {RecipeEditComponent} from "./recipe-edit/recipe-edit.component";
export const RECIPE_ROUTES: Routes = [
  {path:'',component:RecipeStartComponent},
  {path:'edit',component:RecipeEditComponent},
  {path:':id',component:RecipeEditComponent},
  {path:':id/edit',component:RecipeEditComponent}
];
