import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  loadedFeature = 'recipe';
  loadedRecipeItem = 'recipeItem';

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }

  onDisplay(feature: string) {
    console.log(this.loadedRecipeItem);
    this.loadedRecipeItem = feature;
  }
}
