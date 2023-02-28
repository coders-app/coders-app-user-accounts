export enum UserActionType {
  loginUser,
  logoutUser,
}

export interface UserAction {
  type: UserActionType;
  payload?: unknown;
}

export interface LoginUserAction extends UserAction {
  type: UserActionType.loginUser;
}

export interface LogoutUserAction extends UserAction {
  type: UserActionType.logoutUser;
}
