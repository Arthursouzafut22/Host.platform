import React from "react";
import styles from "./Input.module.css";

const Input = ({
  type,
  id,
  name,
  placeholder,
  value,
  onChange,
  error,
  onBlur,
}) => {
  return (
    <>
      <input
        className={styles.input}
        type={type}
        id={id}
        value={value}
        name={name}
        onBlur={onBlur}
        onChange={onChange}
        placeholder={placeholder}
      />
      {error && <p className={styles.error}>{error}</p>}
    </>
  );
};

export default Input;
