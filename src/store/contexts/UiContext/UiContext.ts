import { createContext } from "react";

export interface UiContextStructure {
  error: {
    message: string;
    isError: boolean;
  };
  closeError: () => void;
  showError: (errorMessage: string) => void;
}

export const UiContext = createContext<UiContextStructure>(
  {} as UiContextStructure
);
