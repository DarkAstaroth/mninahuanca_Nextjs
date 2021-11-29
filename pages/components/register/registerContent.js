import Router from "next/router";
import React, { useState } from "react";
import firebase from "../../../firebase";

// Validations
import useValidation from "../../../hooks/useValidation";
import validateSignUp from "../../../validations/useSignUp";

const STATE_INICIAL = {
  name: "",
  email: "",
  password: "",
};

const firebaseErrors = {
  "auth/email-already-in-use":
    "La dirección de correo electrónico ya está siendo utilizada por otra cuenta.",
};

const RegisterContent = () => {
  const [error, setError] = useState(false);

  const { values, errors, submitFrom, handleChange, handleSubmit, handleBlur } =
    useValidation(STATE_INICIAL, validateSignUp, signUp);
  const { name, email, password } = values;

  async function signUp() {
    try {
      await firebase.signUp(name, email, password);
      Router.push("/mn-login");
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
                          <h1 className="mb-4 ">Register User</h1>
                          <div className="form-floating mb-4">
                            <input
                              id="frm_name"
                              type="text"
                              name="name"
                              className="form-control border-2"
                              required="required"
                              value={name}
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                            <label htmlFor="frm_name">Name *</label>
                            <div className="valid-feedback">Looks good!</div>
                            <div className="invalid-feedback">
                              Please provide a valid name address.
                            </div>
                          </div>
                        </div>
                        <div className="col-12">
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
                            value="Register"
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

export default RegisterContent;
