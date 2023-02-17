import { createContext } from "react";

export interface UiContextStructure {
  modal: {
    message: string;
    isError: boolean;
  };
  openModal: (message: string, isError?: boolean) => void;
  closeModal: () => void;
}

export const UiContext = createContext<UiContextStructure>(
  {} as UiContextStructure
);
