import React from "react";
import Link from "next/link";
import styles from "./styles.module.css";

export const GlobalNavbar = () => {
  return (
    <nav className={styles.root}>
      <div className={styles.left}></div>
      <div className={styles.right}>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/my-recipes">
          <a>My Recipes</a>
        </Link>
      </div>
    </nav>
  );
};

export default GlobalNavbar;
