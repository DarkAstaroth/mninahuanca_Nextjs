import React, { useState, useEffect } from "react";

const useValidation = (stateInicial, validate, fn) => {
  const [values, setValues] = useState(stateInicial);
  const [errors, setErrors] = useState({});
  const [submitFrom, setSubmitFrom] = useState(false);

  useEffect(() => {
    if (submitFrom) {
      const noErrors = Object.keys(errors).length === 0;
      if (noErrors) {
        fn(); // FN = funcion que se ejecuta en el componente
      }
      setSubmitFrom(false);
    }
    // eslint-disable-next-line
  }, [errors]);

  // funcion que se ejecuta conforme el usuario escribe algo
  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  // funcion que se ejecuta cuando el usuario hace submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const errorsValidation = validate(values);
    setErrors(errorsValidation);
    setSubmitFrom(true);
  };

  // cuando se realiza el evento de blur

  const handleBlur = (e) => {
    const errorsValidation = validate(values);
    setErrors(errorsValidation);
  };

  return {
    values,
    errors,
    submitFrom,
    handleChange,
    handleSubmit,
    handleBlur,
  };
};

export default useValidation;
