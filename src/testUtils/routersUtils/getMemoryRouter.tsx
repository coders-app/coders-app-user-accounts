import { InitialEntry } from "@remix-run/router";
import { createMemoryRouter, Outlet } from "react-router";
import getRoutes from "../../routers/getRoutes";

const getMemoryRouter = (
  element: React.ReactElement = <Outlet />,
  initialEntries: InitialEntry[]
) => {
  const routes = getRoutes(element);

  return createMemoryRouter(routes, {
    initialEntries: initialEntries,
  });
};

export default getMemoryRouter;
