import { UserCredentials } from "../types";

export interface UseUserStructure {
  getLoginCookie: (userCredentials: UserCredentials) => void;
  verifyUser: () => void;
}
