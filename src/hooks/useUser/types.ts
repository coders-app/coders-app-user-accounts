import { UserCredentials } from "../../types";
import { UserData } from "../../store/actions/userActions/types";

export interface VerifyUserResponse {
  userPayload: UserData;
}

export interface UseUserStructure {
  getLoginCookie: (userCredentials: UserCredentials) => Promise<void>;
  verifyUser: () => Promise<void>;
  getLogout: () => Promise<void>;
}
