import React from "react";
import GlobalNavbar from "../GlobalNavbar";
import Footer from "../Footer";
import styles from "./styles.module.css";

type Props = {
  children: JSX.Element[];
};

export const Layout = ({ children }: Props) => {
  return (
    <div className={styles.root}>
      <GlobalNavbar></GlobalNavbar>
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
