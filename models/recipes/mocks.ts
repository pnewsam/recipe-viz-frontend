import { Recipe } from "./types";

export const mockRecipe: Recipe = {
  id: "1",
  name: "Bolognese Sauce",
  preparationTime: 120,
  servingsYield: {
    max: 6,
    min: 4,
  },
  ingredients: [
    {
      id: "1",
      name: "Garlic",
      category: {
        id: "1",
        name: "Aromatics",
      },
    },
    {
      id: "2",
      name: "Tomato",
      category: {
        id: "2",
        name: "Vegetables",
      },
    },
    {
      id: "3",
      name: "Ground Beef",
      category: {
        id: "3",
        name: "Meat",
      },
    },
  ],
};
