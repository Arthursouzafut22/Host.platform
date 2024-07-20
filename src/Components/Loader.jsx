import React from "react";
import styles from "./styles/Loader.module.css";

const Loader = () => {
  return (
    <div className={styles.loadingSpinner}>
      <div className={styles.spinnerInner}>
        <div className={styles.spinnerCircle}></div>
        <div className={styles.spinnerCircle}></div>
        <div className={styles.spinnerCircle}></div>
        <div className={styles.spinnerCircle}></div>
        <div className={styles.spinnerCircle}></div>
      </div>
    </div>
  );
};

export default Loader;
