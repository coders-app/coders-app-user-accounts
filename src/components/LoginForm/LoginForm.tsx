import { SyntheticEvent, useState } from "react";
import { UserCredentials } from "../../store/models/User";
import LoginFormStyled from "./LoginFormStyled";

const LoginForm = (): JSX.Element => {
  const initialCredentials: UserCredentials = {
    email: "",
    password: "",
  };

  const [credentials, setCredentials] = useState(initialCredentials);

  const handleChangeForm = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({
      ...credentials,
      [event.target.id]: event.target.value,
    });
  };

  const handleOnSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    setCredentials(initialCredentials);
  };

  const formIsValidate = (): boolean =>
    credentials.email !== "" && credentials.password !== "";

  return (
    <LoginFormStyled noValidate autoComplete="off" onSubmit={handleOnSubmit}>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          className="form-group__box"
          placeholder="Introduce your Email"
          value={credentials.email}
          id="email"
          type="email"
          onChange={handleChangeForm}
        ></input>
        <span className="form-group__message">Tot malament</span>
      </div>
      <div className="form-group">
        <label className="form-group__title" htmlFor="password">
          Password
        </label>
        <input
          className="form-group__box"
          placeholder="Introduce your Password"
          id="password"
          type="password"
          value={credentials.password}
          onChange={handleChangeForm}
        ></input>
        <span className="form-group__message">Tot malament</span>
      </div>
      <button className="button" type="submit" disabled={!formIsValidate()}>
        Send
      </button>
    </LoginFormStyled>
  );
};

export default LoginForm;
