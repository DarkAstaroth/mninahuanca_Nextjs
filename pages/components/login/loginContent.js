import React, { useState } from "react";
import firebase from "../../../firebase";
import Router from "next/router";

// Validaciones
import useValidation from "../../../hooks/useValidation";
import validateSignIn from "../../../validations/validateSignIn";

const STATE_INICIAL = {
  email: "",
  password: "",
};

const firebaseErrors = {
  "auth/user-not-found":
    "No hay ningún registro de usuario que corresponda a este email",
  "auth/wrong-password":
    "La contraseña no es válida o el usuario no tiene contraseña.",
  "auth/too-many-requests":
    "El acceso a esta cuenta se ha desactivado temporalmente debido a muchos intentos fallidos de inicio de sesión",
};
const LoginContent = () => {
  const [error, setError] = useState(false);

  const {
    values,
    errores,
    submitFrom,
    handleChange,
    handleSubmit,
    handleBlur,
  } = useValidation(STATE_INICIAL, validateSignIn, SignIn);

  const { email, password } = values;

  async function SignIn() {
    try {
      await firebase.login(email, password);
      Router.push("/dashboard");
    } catch (error) {
      throw (
        (firebaseErrors[error.code] || error.message,
        setError(firebaseErrors[error.code]))
      );
    }
  }

  return (
    <>
      <section className="wrapper bg-soft-blue bg-auto">
        <div className="container py-10 py-md-10 col-12 col-md-4 vh-100">
          <div className="card bg-light">
            <div className="card-body p-md-10 p-5">
              <div className="row">
                <div className="col-12">
                  <form
                    className="contact-form needs-validation"
                    onSubmit={handleSubmit}
                    noValidate
                  >
                    <div className="messages"></div>
                    <div className="row gx-4">
                      <div className="col-12">
                        <h1 className="mb-4 ">Sign In</h1>
                        <div className="form-floating mb-4">
                          <input
                            id="frm_email"
                            type="email"
                            name="email"
                            className="form-control border-2"
                            required="required"
                            value={email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          <label htmlFor="frm_email">Email *</label>
                          <div className="valid-feedback">Looks good!</div>
                          <div className="invalid-feedback">
                            Please provide a valid email address.
                          </div>
                        </div>
                      </div>

                      <div className="col-12">
                        <div className="form-floating mb-4">
                          <input
                            id="frm_password"
                            type="password"
                            name="password"
                            className="form-control border-2"
                            required="required"
                            value={password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          <label htmlFor="frm_password">Password *</label>
                          <div className="valid-feedback">Looks good!</div>
                          <div className="invalid-feedback">
                            Please provide a valid email address.
                          </div>
                        </div>
                      </div>

                      <div className="col-12">
                        <input
                          type="submit"
                          className="btn btn-outline-primary rounded-pill btn-send"
                          value="Sign In"
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoginContent;
