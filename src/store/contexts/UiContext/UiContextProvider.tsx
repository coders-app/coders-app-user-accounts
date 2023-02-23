import { useMemo, useReducer } from "react";
import uiReducer from "../../reducers/uiReducer/uiReducer";
import { UiContext, UiState } from "./UiContext";

interface UiContextProviderProps {
  children: JSX.Element | JSX.Element[];
}

export const initialUiState: UiState = {
  error: {
    message: "",
    isError: false,
  },
};

const UiContextProvider = ({
  children,
}: UiContextProviderProps): JSX.Element => {
  const [currentUiState, dispatch] = useReducer(uiReducer, initialUiState);
  const store = useMemo(() => ({ currentUiState, dispatch }), [currentUiState]);

  return <UiContext.Provider value={store}>{children}</UiContext.Provider>;
};

export default UiContextProvider;
