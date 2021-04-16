import React from "react";
import styles from "./styles.module.css";

type Props = {
  children: JSX.Element | JSX.Element[];
  heading: string;
};

export const Section = ({ children, heading }: Props) => {
  return (
    <div className={styles.root}>
      <h2 className={styles.heading}>{heading}</h2>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default Section;
