import { UserCredentials, ErrorData } from "../types";

export interface UseUiStructure {
  showError: (errorMessage: string) => void;
  closeError: () => void;
  error: ErrorData;
}

export interface UseUserStructure {
  getLoginCookie: (userCredentials: UserCredentials) => void;
}
