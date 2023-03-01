import { UserAction, UserActionType } from "../../actions/userActions/types";
import { UserState } from "../../contexts/userContext/userContext";

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
    case UserActionType.logoutUser:
      newUserState = {
        ...currentUserState,
        isLogged: false,
      };
      break;
    default:
      newUserState = currentUserState;
  }
  return newUserState;
};

export default userReducer;
