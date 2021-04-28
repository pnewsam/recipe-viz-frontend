import "../styles/base.css";
import "../styles/reset.css";
import "../styles/variables.css";
import { ApolloProvider } from "@apollo/client/react";
import { client } from "../client";

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
