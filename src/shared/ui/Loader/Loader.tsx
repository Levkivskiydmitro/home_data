import React from "react";
import styles from "./Loader.module.css";

export const Loader: React.FC<{ text?: string }> = ({ text = "Загрузка..." }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.spinner} />
      <div className={styles.text}>{text}</div>
    </div>
  );
};
