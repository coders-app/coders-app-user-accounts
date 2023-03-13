import { createContext } from "react";
import { UserAction } from "../../actions/userActions/types";

export interface UserState {
  isLogged: boolean;
  isAdmin: boolean;
  name: string;
}

export interface UserContextStructure {
  currentUserState: UserState;
  dispatch: React.Dispatch<UserAction>;
}

export const UserContext = createContext<UserContextStructure>(
  {} as UserContextStructure
);
