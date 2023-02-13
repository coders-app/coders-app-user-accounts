import { Navigate } from "react-router";
import App from "../components/App/App";
import LoginPage from "../pages/LoginPage/LoginPage";
import paths from "../utils/paths";

const getRoutes = (routerElement: React.ReactElement = <App />) => {
  return [
    {
      path: paths.base,
      element: routerElement,
      children: [
        { index: true, element: <Navigate to={paths.login} replace /> },
        { path: paths.login, element: <LoginPage /> },
      ],
    },
  ];
};

export default getRoutes;
