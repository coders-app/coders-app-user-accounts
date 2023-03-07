import { Link } from "react-router-dom";
import LoginForm from "../../components/LoginForm/LoginForm";
import routerPaths from "../../routers/routerPaths";
import LoginPageStyled from "./LoginPageStyled";

const LoginPage = () => {
  return (
    <LoginPageStyled>
      <h1>Login</h1>
      <LoginForm />

      <Link to={routerPaths.setPassword} className="login__link">
        Reset password
      </Link>
    </LoginPageStyled>
  );
};

export default LoginPage;
