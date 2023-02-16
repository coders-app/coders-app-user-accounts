import { createMemoryRouter, Outlet } from "react-router";
import getRoutes from "../../routers/getRoutes";
import { MemoryRouterOptions } from "./types";

const getMemoryRouter = ({
  initialEntries,
  element = <Outlet />,
}: MemoryRouterOptions) => {
  const routes = getRoutes(element);

  return createMemoryRouter(routes, {
    initialEntries: initialEntries,
  });
};

export default getMemoryRouter;
