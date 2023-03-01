import { UserActionType } from "../../actions/userActions/types";
import {
  loginUserActionCreator,
  logoutUserActionCreator,
} from "../../actions/userActions/userActionCreators";
import { UserState } from "../../contexts/userContext/userContext";
import { initialUserState } from "../../contexts/userContext/userContextProvider";
import userReducer from "./userReducer";

describe("Given a userReducer function", () => {
  const currentUserState: UserState = {
    isLogged: false,
  };

  describe("When it's invoked with a current user state and login action", () => {
    test("Then it should return a new user state with isLogged value true", () => {
      const loginUserAction = loginUserActionCreator();
      const expectedUserState: UserState = {
        isLogged: true,
      };

      const newUserState = userReducer(currentUserState, loginUserAction);

      expect(newUserState).toStrictEqual(expectedUserState);
    });
  });

  describe("When it's invoked with a current user state and a logoutUser action", () => {
    test("Then it should return a new user state with isLogged value false", () => {
      const logoutUserAction = logoutUserActionCreator();
      const expectedUserState: UserState = initialUserState;

      const newUserState = userReducer(currentUserState, logoutUserAction);

      expect(newUserState).toStrictEqual(expectedUserState);
    });
  });

  describe("When it's invoked with a current user state and an unknown action", () => {
    test("Then it should return the same user state", () => {
      const unknownAction = { type: "" as unknown as UserActionType };

      const newUserState = userReducer(currentUserState, unknownAction);

      expect(newUserState).toStrictEqual(currentUserState);
    });
  });
});
