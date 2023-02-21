import { createContext } from "react";

export interface UiContextStructure {
  error: {
    message: string;
    isError: boolean;
  };
}

export const UiContext = createContext<UiContextStructure>(
  {} as UiContextStructure
);
