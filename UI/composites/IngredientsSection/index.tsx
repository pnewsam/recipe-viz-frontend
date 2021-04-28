import React from "react";
import { Recipe } from "models";
import ListCard from "components/ListCard";
import Section from "../Recipe/Section";

type Props = {
  recipe: Recipe;
};

export const IngredientsSection = ({ recipe }: Props) => {
  const aromaticsHeading = "Aromatics";
  const oilsAndAcidsHeading = "Oils & Acids";
  const spicesHeading = "Spices";
  return (
    <Section heading="Ingredients">
      <ListCard heading={spicesHeading} items={recipe.ingredients}></ListCard>
      <ListCard
        heading={oilsAndAcidsHeading}
        items={recipe.ingredients}
      ></ListCard>
      <ListCard
        heading={aromaticsHeading}
        items={recipe.ingredients}
      ></ListCard>
    </Section>
  );
};

export default IngredientsSection;
