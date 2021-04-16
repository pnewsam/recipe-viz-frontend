import Head from "next/head";
import Recipe from "../UI/composites/Recipe";
import Layout from "../UI/components/Layout";

export const Home = () => {
  return (
    <div>
      <Head>
        <title>Recipe Visualizer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Recipe></Recipe>
        <div></div>
      </Layout>

      <footer></footer>
    </div>
  );
};

export default Home;
