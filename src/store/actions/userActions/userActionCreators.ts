import {
  LoadUserDataAction,
  LoginUserAction,
  LogoutUserAction,
  UserActionType,
  UserData,
} from "./types";

export const loginUserActionCreator = (): LoginUserAction => ({
  type: UserActionType.loginUser,
});

export const loadUserDataActionCreator = (
  user: UserData
): LoadUserDataAction => ({
  type: UserActionType.loadUserData,
  payload: user,
});

export const logoutUserActionCreator = (): LogoutUserAction => ({
  type: UserActionType.logoutUser,
});
