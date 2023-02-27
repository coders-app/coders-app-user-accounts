import { createContext } from "react";
import { UiAction } from "../../actions/uiActions/types";

export interface UiContextStructure {
  currentUiState: UiState;
  dispatch: React.Dispatch<UiAction>;
}

export interface UiState {
  feedback: {
    message: string;
    isError: boolean;
  };
}

export const UiContext = createContext<UiContextStructure>(
  {} as UiContextStructure
);
