import { Link } from "react-router-dom";
import LoginForm from "../../components/LoginForm/LoginForm";
import routerPaths from "../../routers/routerPaths";
import LoginPageStyled from "./LoginPageStyled";

const LoginPage = () => {
  return (
    <LoginPageStyled className="login">
      <h1>Login</h1>
      <LoginForm />

      <Link to={routerPaths.setPassword} className="login__link">
        Have you forgotten your password?
      </Link>
    </LoginPageStyled>
  );
};

export default LoginPage;
