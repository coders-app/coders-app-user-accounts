import { userMock } from "../../../mocks/userMocks";
import {
  LoadUserDataAction,
  LoginUserAction,
  LogoutUserAction,
  UserActionType,
} from "./types";
import {
  loadUserDataActionCreator,
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

describe("Given a loadUserDataActionCreator", () => {
  describe("When it is invoked with the user 'Luis'", () => {
    test("Then it should return an action with type 'loadUserData' and a payload with the received user", () => {
      const expectedAction: LoadUserDataAction = {
        type: UserActionType.loadUserData,
        payload: userMock,
      };

      const loadUserDataAction = loadUserDataActionCreator(userMock);

      expect(loadUserDataAction).toStrictEqual(expectedAction);
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
