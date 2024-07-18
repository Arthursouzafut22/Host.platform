import React from "react";

const tipo = {
  email: {
    regex:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    aviso: "Preencha um email correto",
  },
};

const useForm = (type) => {
  const [value, setValor] = React.useState("");
  const [error, setError] = React.useState(null);

  function validateForm(value) {
    if (type === false) return true;
    if (value.length === 0) {
      setError("Preencha os dados");
      return false;
    } else if (tipo[type] && !tipo[type].regex.test(value)) {
      setError(tipo[type].aviso);
      return false;
    } else if (value.length < 5) {
      setError("São permitidos acima de 5 caracteres");
    } else {
      setError(null);
      return true;
    }
  }

  function onChange({ target }) {
    if (error) validateForm(target.value);
    setValor(target.value);
  }

  return {
    value,
    setValor,
    error,
    onChange,
    onBlur: () => validateForm(value),
    validateForm: () => validateForm(value),
  };
};

export default useForm;
