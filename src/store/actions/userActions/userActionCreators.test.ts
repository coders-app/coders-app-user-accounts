import { LoginUserAction, LogoutUserAction, UserActionType } from "./types";
import {
  loginUserActionCreator,
  logoutUserActionCreator,
} from "./userActionCreators";

describe("Given a loginUserActionCreator function", () => {
  describe("When it's invoked'", () => {
    test("Then it should return an action with type 'loginUser'", () => {
      const expectedAction: LoginUserAction = {
        type: UserActionType.loginUser,
      };

      const loginUserAction = loginUserActionCreator();

      expect(loginUserAction).toStrictEqual(expectedAction);
    });
  });
});

describe("Given a logoutActionCreator function", () => {
  describe("When it's invoked", () => {
    test("Then it should return an action with type 'logoutUser'", () => {
      const expectedAction: LogoutUserAction = {
        type: UserActionType.logoutUser,
      };

      const logoutUserAction = logoutUserActionCreator();

      expect(logoutUserAction).toStrictEqual(expectedAction);
    });
  });
});
