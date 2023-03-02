import { createMemoryRouter, Outlet } from "react-router";
import getRoutes from "../../routers/getRoutes";
import { MemoryRouterOptions } from "../types";

const getMemoryRouter = ({
  initialEntries,
  routeElement = <Outlet />,
}: MemoryRouterOptions) => {
  const routes = getRoutes(routeElement);

  return createMemoryRouter(routes, {
    initialEntries,
  });
};

export default getMemoryRouter;
