import { createContext } from "react";
import { UserAction } from "../../actions/userActions/types";

export interface UserContextStructure {
  currentUserState: UserState;
  dispatch: React.Dispatch<UserAction>;
}

export interface UserState {
  isLogged: boolean;
}

export const UserContext = createContext<UserContextStructure>(
  {} as UserContextStructure
);
