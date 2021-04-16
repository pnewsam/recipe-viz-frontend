import React from "react";
import styles from "./styles.module.css";

type Props = {
  heading: string;
  text: string;
};

export const SimpleCard = ({ heading, text }: Props) => {
  return (
    <div className={styles.root}>
      <img className={styles.img} src="" alt="Graphic" />
      <div className={styles.textContent}>
        <h4 className={styles.heading}>{heading}</h4>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default SimpleCard;
