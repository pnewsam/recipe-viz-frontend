import React from "react";
import OverviewSection from "../OverviewSection";
import IngredientsSection from "composites/IngredientsSection";
import ToolsSection from "../ToolsSection";
import { mockRecipe } from "models";
import { useGetIngredients } from "queries";

export const Recipe = () => {
  const { data: ingredients } = useGetIngredients();
  console.log(ingredients);
  const recipe = mockRecipe;

  return (
    <div>
      <h1>Recipe</h1>
      <OverviewSection recipe={recipe}></OverviewSection>
      <IngredientsSection recipe={recipe}></IngredientsSection>
      <ToolsSection></ToolsSection>
    </div>
  );
};

export default Recipe;
