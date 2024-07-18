import React from "react";
import styles from "./Toggle.module.css";

const ToggleSwitch = ({ onData }) => {
  const [valor, setValor] = React.useState("mes");

  function changeCheck() {
    setValor((privValue) => (privValue === "mes" ? "ano" : "mes"));
    onData(valor);
  }

  return (
    <div className={styles.wrapper}>
      <span>- Guardar 20%</span>
      <div class={styles.container}>
        <label class={`${styles.switch} ${styles.modeSwitch}`}>
          <input
            value="1"
            id="color_mode"
            name="color_mode"
            type="checkbox"
            checked={valor === "ano"}
            onClick={changeCheck}
          />
          <label
            class={styles.inner}
            data-off="Mês"
            data-on="Ano"
            for="color_mode"
          ></label>
        </label>
      </div>
    </div>
  );
};

export default ToggleSwitch;
