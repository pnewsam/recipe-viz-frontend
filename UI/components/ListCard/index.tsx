import React from "react";
import styles from "./styles.module.css";

type Props = {
  heading: string;
  items: Item[];
};

export const ListCard = ({ heading, items = [] }: Props) => {
  return (
    <div className={styles.root}>
      <h4>{heading}</h4>
      <ul className={styles.list}>
        {items.map(({ id, name }: Item) => (
          <li className={styles.listItem} key={id}>
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
};

interface Item {
  id: string;
  name: string;
}

export default ListCard;
