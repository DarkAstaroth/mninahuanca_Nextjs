import React from "react";
import HeadPage from "./components/head";
import RegisterContent from "./components/register/registerContent";

const Register = () => {
  return (
    <>
      <HeadPage title="Register user"></HeadPage>
      <RegisterContent />
    </>
  );
};

export default Register;
