import { useFormik } from "formik";
import { UserCredentials } from "../../types";
import useUser from "../../hooks/useUser/useUser";
import credentialsSchema from "../../utils/schemas/credentialsSchema";
import LoginFormStyled from "./LoginFormStyled";
import { useContext } from "react";
import { UiContext } from "../../store/contexts/UiContext/UiContext";

const LoginForm = (): JSX.Element => {
  const { getLoginCookie } = useUser();
  const {
    currentUiState: { feedback },
  } = useContext(UiContext);

  const initialCredentials: UserCredentials = {
    email: "",
    password: "",
  };

  const formik = useFormik({
    initialValues: initialCredentials,
    validationSchema: credentialsSchema,
    onSubmit: (userCredentials) => {
      getLoginCookie(userCredentials);
      formik.resetForm();
    },
  });

  return (
    <LoginFormStyled
      noValidate
      autoComplete="off"
      onSubmit={formik.handleSubmit}
    >
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          className="form-group__box"
          placeholder="Introduce your Email"
          value={formik.values.email}
          id="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        ></input>
        <span className="form-group__message">
          {formik.touched.email && formik.errors.email}
        </span>
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
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        ></input>
        <span className="form-group__message">
          {formik.touched.password && formik.errors.password}
        </span>
      </div>
      {feedback && (
        <span className={feedback.isError ? "error" : "feedback"}>
          {feedback.message}
        </span>
      )}
      <button
        className="button"
        type="submit"
        disabled={!(formik.dirty && formik.isValid)}
      >
        Send
      </button>
    </LoginFormStyled>
  );
};

export default LoginForm;
