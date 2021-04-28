import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const BACKEND_URI = "http://localhost:4000/graphql";

export const client = new ApolloClient({
  uri: BACKEND_URI,
  cache: new InMemoryCache(),
});
