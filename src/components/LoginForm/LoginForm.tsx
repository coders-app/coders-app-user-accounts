import { useFormik } from "formik";
import { UserCredentials } from "../../store/models/User";
import credentialsSchema from "../../utils/schemas/credentialsSchema";
import LoginFormStyled from "./LoginFormStyled";

const LoginForm = (): JSX.Element => {
  const initialCredentials: UserCredentials = {
    email: "",
    password: "",
  };

  const formik = useFormik({
    initialValues: initialCredentials,
    validationSchema: credentialsSchema,
    onSubmit: () => {
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
        {formik.errors.email && formik.touched.email && (
          <span className="form-group__message">{formik.errors.email}</span>
        )}
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
        {formik.errors.password && formik.touched.password && (
          <span className="form-group__message">{formik.errors.password}</span>
        )}
      </div>
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
