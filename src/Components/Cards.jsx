import React from "react";
import styles from "./Cards.module.css";
import Button from "./Button";
import ToggleSwitch from "./ToggleSwitch";

const Cards = ({ valor }) => {
  
  const [childData, setChildData] = React.useState(null);

  // Função de callback para receber dados do filho
  const handleChildData = (data) => {
    setChildData(data);
  };
 
  return (
    <>
      <ToggleSwitch onData={handleChildData} />
      <div className={styles.container}>
        {valor.map((item) => (
          <div key={item.id} className={styles.cards}>
            <h1>{item.type}</h1>
            <p>{item.infop}</p>
            {item.precos.map((value) => (
              <p className={styles.price} key={item.id}>
               {childData === 'mes' ? value.planom : value.planoa}
              </p>
            ))}
            <p>{item.faturados}</p>
            <Button>Subscreva agora</Button>
            <ul>
              {item.info.map((value) => (
                <li>{value}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
};

export default Cards;
