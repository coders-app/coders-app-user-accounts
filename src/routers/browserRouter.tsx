import { createBrowserRouter, Outlet, Navigate } from "react-router-dom";
import paths from "../utils/paths";
import LoginPage from "../pages/LoginPage/LoginPage";

const { base: basePath, login: loginPath } = paths;

const browserRouter = createBrowserRouter([
  {
    path: basePath,
    element: <Outlet />,
    children: [
      { index: true, element: <Navigate to={loginPath} replace /> },
      { path: loginPath, element: <LoginPage /> },
    ],
  },
]);

export default browserRouter;
