import React from "react";
import styles from "./Input.module.css";

const InputCheck = () => {
  return (
    <label class={styles.container}>
      <input
        class={styles.checkbox}
        name="checkbox"
        id="checkbox"
        type="checkbox"
      />
      Lembre de mim
      <span class={styles.checkmark}></span>
    </label>
  );
};

export default InputCheck;
