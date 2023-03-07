import { RenderOptions } from "@testing-library/react";
import { RouterProvider } from "react-router";
import browserRouter from "../../routers/browserRouter";
import customRender from "../customRender";
import { WrapperWithProvidersProps } from "../types";
import getMemoryRouter from "./getMemoryRouter";

const routerRender = (
  wrapperWithProvidersProps?: WrapperWithProvidersProps,
  renderOptions?: RenderOptions
) => {
  const router = wrapperWithProvidersProps?.wrapperOptions?.initialEntries
    ? getMemoryRouter({
        initialEntries:
          wrapperWithProvidersProps?.wrapperOptions.initialEntries,
        routeElement: wrapperWithProvidersProps?.wrapperOptions.routeElement!,
      })
    : browserRouter;

  return {
    ...customRender(<RouterProvider router={router} />, {
      ...wrapperWithProvidersProps,
      ...renderOptions,
    }),
  };
};
export default routerRender;
