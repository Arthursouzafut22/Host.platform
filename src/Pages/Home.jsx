import React from "react";
import styles from "./Home.module.css";
import Cards from "../Components/Cards";
import Loader from "../Components/Loader";

const Home = () => {
  const [dados, setDados] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [erro, setErro] = React.useState(null);

  React.useEffect(() => {
    async function infoFetch() {
      try {
        setErro(null);
        setLoading(true);
        const response = await fetch("api.json");
        if (!response.ok) throw new Error("erro");
        const json = await response.json();
        setDados(json);
      } catch (err) {
        setErro("erro na chamada");
        setLoading(false);
      } finally {
        setLoading(false);
      }
    }
    infoFetch();
  }, []);

  return (
    <section className={styles.home}>
      <h1>Escolha o plano ideal para você</h1>
      <p>
        Comece com o pé direito. Oferecemos 30 dias para pedir reembolso, ou
        seja, risco zero para você.
      </p>
      {loading && <Loader />}
      <div className={styles.container}>
        {dados.map((item, index) => (
          <Cards
            key={index}
            valor={item}
          />
        ))}
      </div>
    </section>
  );
};

export default Home;
