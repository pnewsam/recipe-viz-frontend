import { useQuery } from "@apollo/client";
import GetIngredientsQuery from "./GetIngredients.graphql";

export const useGetIngredients = () => useQuery(GetIngredientsQuery);
