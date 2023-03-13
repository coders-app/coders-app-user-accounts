import { act, renderHook } from "@testing-library/react";
import * as router from "react-router";
import { errorHandlers } from "../../mocks/handlers";
import server from "../../mocks/server";
import { userMock } from "../../mocks/userMocks";
import routerPaths from "../../routers/routerPaths";
import { UiAction } from "../../store/actions/uiActions/types";
import { showFeedbackActionCreator } from "../../store/actions/uiActions/uiActionCreators";
import { UserAction } from "../../store/actions/userActions/types";
import {
  loadUserDataActionCreator,
  loginUserActionCreator,
  logoutUserActionCreator,
} from "../../store/actions/userActions/userActionCreators";
import { UiState } from "../../store/contexts/UiContext/UiContext";
import { initialUiState } from "../../store/contexts/UiContext/UiContextProvider";
import { UserState } from "../../store/contexts/userContext/userContext";
import { initialUserState } from "../../store/contexts/userContext/userContextProvider";
import WrapperWithProviders from "../../testUtils/wrappers/WrapperWithProviders";
import { UserCredentials } from "../../types";
import useUser from "./useUser";

beforeEach(() => {
  jest.clearAllMocks();
});

const currentUiState: UiState = initialUiState;
const mockUiDispatch: React.Dispatch<UiAction> = jest.fn();
const mockUiStore = { dispatch: mockUiDispatch, currentUiState };

const currentUserState: UserState = initialUserState;
const mockUserDispatch: React.Dispatch<UserAction> = jest.fn();
const mockUserStore = { dispatch: mockUserDispatch, currentUserState };

const mockNavigate = jest.fn();
beforeEach(() => {
  jest.spyOn(router, "useNavigate").mockImplementation(() => mockNavigate);
});

const userCredentials: UserCredentials = {
  email: "admin@admin.com",
  password: "AdminAdmin",
};

describe("Given a useUser custom hook", () => {
  describe("When its method getCookie is invoked with credentials 'admin@admin.com' as email and 'AdminAdmin' as password", () => {
    test("Then useNavigate should be invoked", async () => {
      const {
        result: {
          current: { getLoginCookie },
        },
      } = renderHook(() => useUser(), {
        wrapper({ children }) {
          return (
            <WrapperWithProviders
              wrapperOptions={{
                mockUiStore,
                mockUserStore,
              }}
            >
              {children}
            </WrapperWithProviders>
          );
        },
      });

      await act(async () => getLoginCookie(userCredentials));

      expect(mockNavigate).toHaveBeenCalled();
    });

    test("Then dispatch should be invoked with a loginUserAction", async () => {
      const {
        result: {
          current: { getLoginCookie },
        },
      } = renderHook(() => useUser(), {
        wrapper({ children }) {
          return (
            <WrapperWithProviders
              wrapperOptions={{
                mockUiStore,
                mockUserStore,
              }}
            >
              {children}
            </WrapperWithProviders>
          );
        },
      });

      const loginUserAction = loginUserActionCreator();

      await act(async () => getLoginCookie(userCredentials));

      expect(mockUserDispatch).toHaveBeenCalledWith(loginUserAction);
    });
  });

  describe("When its method getCookie is invoked and the response has status 404", () => {
    beforeEach(() => {
      server.resetHandlers(...errorHandlers);
    });

    test("Then dispatch should be invoked with showFeedbackAction with message 'Error on login, try again later'", async () => {
      const {
        result: {
          current: { getLoginCookie },
        },
      } = renderHook(() => useUser(), {
        wrapper({ children }) {
          return (
            <WrapperWithProviders
              wrapperOptions={{
                mockUiStore,
                mockUserStore,
              }}
            >
              {children}
            </WrapperWithProviders>
          );
        },
      });

      const expectedMessage = "Error on login, try again later";

      await act(async () => getLoginCookie(userCredentials));

      expect(mockUiDispatch).toHaveBeenCalledWith(
        showFeedbackActionCreator(expectedMessage)
      );
    });
  });

  describe("When its method verifyUser is invoked and the response has status code 200", () => {
    test("Then dispatch should be invoked with a loadUserDataAction", async () => {
      const {
        result: {
          current: { verifyUser },
        },
      } = renderHook(() => useUser(), {
        wrapper({ children }) {
          return (
            <WrapperWithProviders
              wrapperOptions={{
                mockUiStore,
                mockUserStore,
              }}
            >
              {children}
            </WrapperWithProviders>
          );
        },
      });

      const loadUserDataAction = loadUserDataActionCreator(userMock);

      await act(async () => verifyUser());

      expect(mockUserDispatch).toHaveBeenCalledWith(loadUserDataAction);
    });
  });

  describe("When its method verifyUser is invoked and the response has status code 401", () => {
    beforeEach(() => {
      server.resetHandlers(...errorHandlers);
    });

    test("Then useNavigate should be invoked with path '/login'", async () => {
      const loginPath = routerPaths.login;
      const {
        result: {
          current: { verifyUser },
        },
      } = renderHook(() => useUser(), {
        wrapper({ children }) {
          return (
            <WrapperWithProviders
              wrapperOptions={{
                mockUiStore,
                mockUserStore,
              }}
            >
              {children}
            </WrapperWithProviders>
          );
        },
      });

      await act(async () => verifyUser());

      expect(mockNavigate).toHaveBeenCalledWith(loginPath);
    });

    test("Then dispatch should be invoked with a logoutUserAction", async () => {
      const {
        result: {
          current: { verifyUser },
        },
      } = renderHook(() => useUser(), {
        wrapper({ children }) {
          return (
            <WrapperWithProviders
              wrapperOptions={{
                mockUiStore,
                mockUserStore,
              }}
            >
              {children}
            </WrapperWithProviders>
          );
        },
      });

      const logoutUserAction = logoutUserActionCreator();

      await act(async () => verifyUser());

      expect(mockUserDispatch).toHaveBeenCalledWith(logoutUserAction);
    });
  });

  describe("When its method getLogout is invoked and there is a user logged", () => {
    const mockUserStateLogged: UserState = {
      isLogged: true,
      isAdmin: true,
      name: "",
    };

    const mockUserStoreLogged = {
      dispatch: mockUserDispatch,
      currentUserState: mockUserStateLogged,
    };
    test("Then dispatch should be invoked with a logoutUserAction", async () => {
      const {
        result: {
          current: { getLogout },
        },
      } = renderHook(() => useUser(), {
        wrapper({ children }) {
          return (
            <WrapperWithProviders
              wrapperOptions={{
                mockUiStore,
                mockUserStore: mockUserStoreLogged,
              }}
            >
              {children}
            </WrapperWithProviders>
          );
        },
      });

      const logoutUserAction = logoutUserActionCreator();

      await getLogout();

      expect(mockUserDispatch).toHaveBeenCalledWith(logoutUserAction);
    });

    test("Then useNavigate should be invoked with '/login'", async () => {
      const {
        result: {
          current: { getLogout },
        },
      } = renderHook(() => useUser(), {
        wrapper({ children }) {
          return (
            <WrapperWithProviders
              wrapperOptions={{
                mockUiStore,
                mockUserStore: mockUserStoreLogged,
              }}
            >
              {children}
            </WrapperWithProviders>
          );
        },
      });

      await getLogout();

      expect(mockNavigate).toHaveBeenCalledWith(routerPaths.login);
    });
  });

  describe("When its method getLogout is invoked and there isn't a user logged", () => {
    beforeEach(() => {
      server.resetHandlers(...errorHandlers);
    });
    test("Then uiDispatch should be invoked with a showFeedbackAction and message 'Error on logout, try again later'", async () => {
      const expectedMessage = "Error on logout, try again later";

      const {
        result: {
          current: { getLogout },
        },
      } = renderHook(() => useUser(), {
        wrapper({ children }) {
          return (
            <WrapperWithProviders
              wrapperOptions={{
                mockUiStore,
                mockUserStore,
              }}
            >
              {children}
            </WrapperWithProviders>
          );
        },
      });

      await getLogout();

      expect(mockUiDispatch).toHaveBeenCalledWith(
        showFeedbackActionCreator(expectedMessage)
      );
    });
  });
});
