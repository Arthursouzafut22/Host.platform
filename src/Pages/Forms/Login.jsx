import React from "react";
import styles from "./Login.module.css";
import Input from "./Input";
import Button from "../../Components/Button";
import InputCheck from "./InputCheck";
import useForm from "../../Hooks/UseForm";


const Login = () => {
  const email = useForm("email");
  const senha = useForm();

  function sumbiteOn(event) {
    event.preventDefault();

    if (email.validateForm() || senha.validateForm()) {
      return true; // em desenvolvimento
    }
  }

  return (
    <section className={styles.section}>
      <form className={styles.form} onSubmit={sumbiteOn}>
        <h1>Login</h1>
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
        <InputCheck/>
        <Button>Entrar</Button>
      </form>
    </section>
  );
};

export default Login;







