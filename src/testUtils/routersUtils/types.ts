import { InitialEntry } from "@remix-run/router";

export interface WrapperOptions {
  initialEntries?: InitialEntry[];
  routeElement?: React.ReactElement;
}

export interface MemoryRouterOptions {
  element: React.ReactElement;
  initialEntries: InitialEntry[];
}
