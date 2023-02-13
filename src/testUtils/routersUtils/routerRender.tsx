import { RenderOptions } from "@testing-library/react";
import { RouterProvider } from "react-router";
import browserRouter from "../../routers/browserRouter";
import getMemoryRouter from "./getMemoryRouter";
import { WrapperOptions } from "./types";
import customRender from "../customRender";

const routerRender = (
  wrapperOptions?: WrapperOptions,
  renderOptions?: RenderOptions
) => {
  const router = wrapperOptions?.initialEntries
    ? getMemoryRouter(
        wrapperOptions?.routeElement,
        wrapperOptions?.initialEntries
      )
    : browserRouter;
  return {
    ...customRender(<RouterProvider router={router} />, {
      ...wrapperOptions,
      ...renderOptions,
    }),
  };
};
export default routerRender;
