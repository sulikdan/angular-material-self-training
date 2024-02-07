import {Routes} from '@angular/router';
import {AboutComponent} from "./main/body/about/about.component";
import {RecipesComponent} from "./main/body/recipes/recipes.component";

export const routes: Routes = [
  {path: 'recipes', component: RecipesComponent},
  {path: 'about', component: AboutComponent},
  {path: '', component: AboutComponent}
];
