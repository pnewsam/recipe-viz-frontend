import { useQuery } from "react-query";
import { RECIPES } from "./queryKeys";
import { mockRecipe } from "../models";

export const useRecipes = () =>
  useQuery(RECIPES, async () => {
    return {
      recipes: [mockRecipe, mockRecipe, mockRecipe],
    };
  });
