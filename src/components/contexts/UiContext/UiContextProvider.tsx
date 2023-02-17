import { useState, useMemo, useCallback } from "react";
import { UiContext } from "./UiContext";

interface UiContextProviderProps {
  children: JSX.Element | JSX.Element[];
}

const UiContextProvider = ({
  children,
}: UiContextProviderProps): JSX.Element => {
  const [modal, setModal] = useState({ message: "", isError: false });

  const openModal = (message: string, isError = false) => {
    setModal({ message, isError });
  };

  const closeModal = useCallback((): void => {
    setModal({ message: "", isError: false });
  }, []);

  const store = useMemo(
    () => ({ modal, openModal, closeModal }),
    [closeModal, modal]
  );

  return <UiContext.Provider value={store}>{children}</UiContext.Provider>;
};

export default UiContextProvider;
