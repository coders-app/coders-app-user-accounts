export enum UserActionType {
  loginUser,
  loadUserData,
  logoutUser,
}

export interface UserAction {
  type: UserActionType;
  payload?: unknown;
}

export interface LoginUserAction extends UserAction {
  type: UserActionType.loginUser;
}

export interface UserData {
  isAdmin: boolean;
  name: string;
}

export interface LoadUserDataAction extends UserAction {
  type: UserActionType.loadUserData;
  payload: UserData;
}

export interface LogoutUserAction extends UserAction {
  type: UserActionType.logoutUser;
}
