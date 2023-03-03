import { InitialEntry } from "@remix-run/router";
import { UiContextStructure } from "../store/contexts/UiContext/UiContext";
import { UserContextStructure } from "../store/contexts/userContext/userContext";

export interface WrapperWithProvidersProps {
  children?: JSX.Element | JSX.Element[];
  wrapperOptions?: WrapperOptionsStructure;
}

export interface MemoryRouterOptions {
  routeElement?: React.ReactElement;
  initialEntries?: InitialEntry[];
}

export interface WrapperOptionsStructure extends MemoryRouterOptions {
  mockUiStore?: UiContextStructure;
  mockUserStore?: UserContextStructure;
}
