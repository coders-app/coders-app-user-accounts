import { useMemo, useReducer } from "react";
import userReducer from "../../reducers/userReducer/userReducer";
import { UserContext, UserState } from "./userContext";

interface UserContextProviderProps {
  children: JSX.Element | JSX.Element[];
}

export const initialUserState: UserState = {
  isLogged: false,
};

const UserContextProvider = ({
  children,
}: UserContextProviderProps): JSX.Element => {
  const [currentUserState, dispatch] = useReducer(
    userReducer,
    initialUserState
  );

  const store = useMemo(
    () => ({ currentUserState, dispatch }),
    [currentUserState]
  );

  return <UserContext.Provider value={store}>{children}</UserContext.Provider>;
};

export default UserContextProvider;
