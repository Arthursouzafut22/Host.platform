import React from "react";
import styles from "./styles/Footer.module.css";
import { midias } from "./Svgs";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p style={{ textAlign: "center" }}>
        Confiada por Milhares de Construtores na Indústria
      </p>
      <ul className={styles.lista}>
        {midias.map((item) => (
          <li>
            <img key={item} src={item} alt="marcas" />
          </li>
        ))}
      </ul>
      <p>© 2024 CoinGecko. All Rights Reserved.</p>
      <p>
        ISENÇÃO DE RESPONSABILIDADE IMPORTANTE: Todos os conteúdos fornecidos no
        nosso website, sites hiperligados, aplicações associadas, fóruns, blogs,
        contas nas redes sociais e noutras plataformas ("website") são apenas
        para sua informação geral obtida por fontes de terceiros. Não fazemos
        garantias de qualquer tipo em relação ao nosso conteúdo, por exemplo, a
        precisão e atualização. Nenhuma parte do conteúdo que fornecemos
        constitui aconselhamento financeiro, jurídico nem qualquer outra forma
        de aconselhamento para a sua confiança específica por qualquer motivo.
        Qualquer utilização ou confiança no nosso conteúdo é unicamente da sua
        responsabilidade. Deve realizar a sua própria pesquisa, avaliação,
        análise e verificar o nosso conteúdo antes de confiar nele. Os câmbios
        são uma atividade de alto risco que pode levar a grandes perdas,
        portanto, consulte o seu consultor financeiro antes de tomar qualquer
        decisão. Nenhum conteúdo no nosso website é uma solicitação ou oferta.
      </p>
    </footer>
  );
};

export default Footer;
