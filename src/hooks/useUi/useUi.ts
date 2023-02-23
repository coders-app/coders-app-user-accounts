import { useState } from "react";

interface UseUiStructure {
  showError: (errorMessage: string) => void;
  closeError: () => void;
  error: { message: string; isError: boolean };
}

const useUi = (): UseUiStructure => {
  const initialErrorState = { message: "", isError: false };
  const [error, setError] = useState(initialErrorState);

  const showError = (errorMessage: string) => {
    setError({ ...error, message: errorMessage, isError: true });
  };

  const closeError = () => {
    setError(initialErrorState);
  };

  return { showError, closeError, error };
};

export default useUi;
