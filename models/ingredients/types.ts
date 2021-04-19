import { IngredientCategory } from "../ingredientCategories";

export type Ingredient = {
  id: string;
  name: string;
  category: IngredientCategory;
};
