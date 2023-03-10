import { Navigate } from "react-router";
import App from "../components/App/App";
import LoginPage from "../pages/LoginPage/LoginPage";
import SetPasswordPage from "../pages/SetPasswordPage/SetPasswordPage";
import routerPaths from "./routerPaths";

const getRoutes = (routerElement: React.ReactElement = <App />) => {
  return [
    {
      path: routerPaths.base,
      element: routerElement,
      children: [
        { index: true, element: <Navigate to={routerPaths.login} replace /> },
        { path: routerPaths.login, element: <LoginPage /> },
        { path: routerPaths.setPassword, element: <SetPasswordPage /> },
      ],
    },
  ];
};

export default getRoutes;
