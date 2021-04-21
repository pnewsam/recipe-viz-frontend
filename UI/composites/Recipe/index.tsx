import React from "react";
import OverviewSection from "../OverviewSection";
import IngredientsSection from "../IngredientsSection";
import ToolsSection from "../ToolsSection";
import { useRecipes } from "../../../queries";
import { mockRecipe } from "../../../models";

export const Recipe = () => {
  const { data: recipes } = useRecipes();
  const recipe = mockRecipe;

  return (
    <div>
      <h1>Recipe</h1>
      {JSON.stringify(recipes)}
      <OverviewSection recipe={recipe}></OverviewSection>
      <IngredientsSection recipe={recipe}></IngredientsSection>
      <ToolsSection></ToolsSection>
    </div>
  );
};

export default Recipe;
