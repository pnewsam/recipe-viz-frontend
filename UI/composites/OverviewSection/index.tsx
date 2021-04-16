import React from "react";
import { Recipe } from "../../../models";
import SimpleCard from "../../components/SimpleCard";
import Section from "../Recipe/Section";

type Props = {
  recipe: Recipe;
};

export const OverviewSection = ({ recipe }: Props) => {
  const { preparationTime, servingsYield } = recipe;
  const timeText = `This recipe will take ${preparationTime} minutes.`;
  const yieldText = `The yield is ${servingsYield.min} to ${servingsYield.max} servings.`;
  return (
    <Section heading="Overview">
      <SimpleCard heading="Time" text={timeText}></SimpleCard>
      <SimpleCard heading="Yield" text={yieldText}></SimpleCard>
    </Section>
  );
};

export default OverviewSection;
