import { userMock } from "../../../mocks/userMocks";
import { UserActionType } from "../../actions/userActions/types";
import {
  loadUserDataActionCreator,
  loginUserActionCreator,
  logoutUserActionCreator,
} from "../../actions/userActions/userActionCreators";
import { UserState } from "../../contexts/userContext/userContext";
import userReducer from "./userReducer";

describe("Given a userReducer function", () => {
  const currentUserState: UserState = {
    isAdmin: false,
    name: "",
    isLogged: false,
  };

  describe("When it's invoked with a current user state and login action", () => {
    test("Then it should return a new user state with isLogged value true", () => {
      const expectedIsLogged = true;

      const loginUserAction = loginUserActionCreator();
      const newUserState = userReducer(currentUserState, loginUserAction);

      expect(newUserState).toHaveProperty("isLogged", expectedIsLogged);
    });
  });

  describe("When it's invoked with a current user state and a loadUserData action with 'Luis' in the payload", () => {
    test("Then it should return a new user state with name value 'Luis'", () => {
      const loadUserDataAction = loadUserDataActionCreator(userMock);
      const newUserState = userReducer(currentUserState, loadUserDataAction);

      expect(newUserState).toHaveProperty("name", userMock.name);
    });
  });

  describe("When it's invoked with a current user state and a logoutUser action", () => {
    test("Then it should return a new user state with isLogged value false", () => {
      const expectedIsLogged = false;

      const logoutUserAction = logoutUserActionCreator();
      const newUserState = userReducer(currentUserState, logoutUserAction);

      expect(newUserState).toHaveProperty("isLogged", expectedIsLogged);
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
