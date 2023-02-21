import { useCallback } from "react";
import useUi from "../../hooks/useUi/useUi";
import { UiContext } from "./UiContext";

interface UiContextProviderProps {
  children: JSX.Element | JSX.Element[];
}

const UiContextProvider = ({
  children,
}: UiContextProviderProps): JSX.Element => {
  const { error, closeError, showError } = useUi();

  const store = useCallback(
    () => ({ error, closeError, showError }),
    [error, closeError, showError]
  );

  return <UiContext.Provider value={store()}>{children}</UiContext.Provider>;
};

export default UiContextProvider;
