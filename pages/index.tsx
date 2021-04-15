import Head from "next/head";
import styles from "../styles/Home.module.css";
import Recipe from "../components/Recipe";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Recipe Visualizer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Recipe></Recipe>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
