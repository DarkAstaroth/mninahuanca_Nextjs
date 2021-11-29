import React from "react";
import HeadPage from "./components/head";
import LoginContent from "./components/login/loginContent";

const Login = () => {
  return (
    <>
      <HeadPage title="Login"></HeadPage>
      <LoginContent />
    </>
  );
};

export default Login;
