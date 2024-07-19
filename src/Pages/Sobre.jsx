import React from "react";
import styles from "./Sobre.module.css";
import { FaSave, FaBell, FaBlogger } from "react-icons/fa";
import foto from "../Assets/imgPro.png";

const Sobre = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <img src={foto} alt="foto" />
        <div>
          <h1>Suba até ao patamar seguinte com a aplicação móvel</h1>
          <ul className={styles.lista}>
            <li>
              <FaSave
                style={{
                  fontSize: "30px",
                  color: "#80e038",
                  background: "#19271B",
                  padding: "7px",
                  borderRadius: "5px",
                }}
              />
              Configuração única. Sincronização em todos os dispositivos.
            </li>
            <li>
              <FaBell
                style={{
                  fontSize: "30px",
                  color: "#80e038",
                  background: "#19271B",
                  padding: "7px",
                  borderRadius: "5px",
                }}
              />
              Receba alertas instantâneos sobre moedas em sua carteira.
            </li>
            <li>
              <FaBlogger
                style={{
                  fontSize: "30px",
                  color: "#80e038",
                  background: "#19271B",
                  padding: "7px",
                  borderRadius: "5px",
                }}
              />
              Mantenha-se atualizado com widgets sobre criptomoedas.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Sobre;
