import { Recipe } from './recipe.model';

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is a test',
      'https://joyfoodsunshine.com/wp-content/uploads/2016/09/easy-pizza-casserole-recipe-4-500x500.jpg'
    ),
    new Recipe(
      'Another Test Recipe',
      'This is a test',
      'https://joyfoodsunshine.com/wp-content/uploads/2016/09/easy-pizza-casserole-recipe-4-500x500.jpg'
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
