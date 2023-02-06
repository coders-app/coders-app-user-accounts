import React from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import LoginPageStyled from "./LoginPageStyled";

const LoginPage = () => {
  return (
    <LoginPageStyled>
      <h1>Login</h1>
      <LoginForm />
    </LoginPageStyled>
  );
};

export default LoginPage;
