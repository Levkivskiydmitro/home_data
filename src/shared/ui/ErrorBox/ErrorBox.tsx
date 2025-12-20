import React from "react";
import styles from "./ErrorBox.module.css";

export const ErrorBox: React.FC<{ message: string; onRetry?: () => void }> = ({ message, onRetry }) => {
  return (
    <div className={styles.wrapper} role="alert">
      <div className={styles.title}>⚠️ Ошибка</div>
      <div className={styles.message}>{message}</div>
      {onRetry && (
        <button className={styles.btn} onClick={onRetry}>
          Повторить
        </button>
      )}
    </div>
  );
};
