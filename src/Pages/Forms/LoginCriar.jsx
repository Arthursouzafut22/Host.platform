import React from "react";
import styles from "./Login.module.css";
import useForm from "../../Hooks/UseForm";
import Input from "./Input";
import Button from "../../Components/Button";

const LoginCriar = () => {
  const email = useForm("email");
  const senha = useForm();

  function sumbiteOn(event) {
    event.preventDefault();

    if (email.validateForm() || senha.validateForm()) {
      return true;
    }
  }

  return (
    <section className={styles.section}>
      <form className={styles.form} onSubmit={sumbiteOn}>
        <h1>Criar conta</h1>
        <Input
          type="email"
          name="email"
          {...email}
          placeholder=" Insira seu endereço email"
        />
        <Input
          type="password"
          {...senha}
          name="senha"
          placeholder="Insira sua senha"
        />
        <Button>Entrar</Button>
      </form>
    </section>
  );
};

export default LoginCriar;
