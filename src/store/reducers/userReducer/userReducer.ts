import {
  LoadUserDataAction,
  UserAction,
  UserActionType,
} from "../../actions/userActions/types";
import { UserState } from "../../contexts/userContext/userContext";
import { initialUserState } from "../../contexts/userContext/userContextProvider";

const userReducer = (
  currentUserState: UserState,
  action: UserAction
): UserState => {
  let newUserState: UserState;

  switch (action.type) {
    case UserActionType.loginUser:
      newUserState = {
        ...currentUserState,
        isLogged: true,
      };
      break;
    case UserActionType.loadUserData:
      newUserState = {
        ...currentUserState,
        ...(action as LoadUserDataAction).payload,
        isLogged: true,
      };
      break;
    case UserActionType.logoutUser:
      newUserState = initialUserState;
      break;
    default:
      newUserState = currentUserState;
  }
  return newUserState;
};

export default userReducer;
