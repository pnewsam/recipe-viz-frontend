import { Ingredient } from "../ingredients";

export type Recipe = {
  id: string;
  name: string;
  preparationTime: number; // duration in seconds
  servingsYield: {
    max: number;
    min: number;
  };
  ingredients: Ingredient[];
};
