import React from "react";
import styles from "./styles.module.css";

export const GlobalNavbar = () => {
  return (
    <nav className={styles.root}>
      <div className={styles.left}></div>
      <div className={styles.right}>
        <span>Home</span>
        <span>My Recipes</span>
      </div>
    </nav>
  );
};

export default GlobalNavbar;
