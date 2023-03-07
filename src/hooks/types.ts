import { UserCredentials } from "../types";

export interface UseUserStructure {
  getLoginCookie: (userCredentials: UserCredentials) => Promise<void>;
  verifyUser: () => Promise<void>;
  logoutUser: () => void;
}
