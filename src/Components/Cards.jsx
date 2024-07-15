import React from "react";
import styles from "./Cards.module.css";
import Button from "./Button";

const Cards = ({ valor }) => {
  return (
    <div key={valor.id} className={styles.cards}>
      <h1>{valor.type}</h1>
      <p>{valor.infop}</p>
      {valor.precos.map((item) => (
        <p className={styles.price} key={item.id}>
          {item.id === "mes" && "$" + item.plano + "/mo"}
        </p>
      ))}
      <p>{valor.faturados}</p>
      <Button>Subscreva agora</Button>
      <ul>
        {valor.info.map((value) => (
          <li>{value}</li>
        ))}
      </ul>
    </div>
  );
};

export default Cards;
