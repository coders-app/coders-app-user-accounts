import { LoginUserAction, LogoutUserAction, UserActionType } from "./types";

export const loginUserActionCreator = (): LoginUserAction => ({
  type: UserActionType.loginUser,
});

export const logoutUserActionCreator = (): LogoutUserAction => ({
  type: UserActionType.logoutUser,
});
