import { act, renderHook } from "@testing-library/react";
import * as router from "react-router";
import { errorHandlers } from "../../mocks/handlers";
import server from "../../mocks/server";
import WrapperWithProviders from "../../testUtils/wrappers/WrapperWithProviders";
import { WrapperWithValues } from "../../testUtils/wrappers/WrapperWithValues";
import { UserCredentials } from "./types";
import useUser from "./useUser";

beforeEach(() => {
  jest.clearAllMocks();
});

const closeError = jest.fn();
const showError = jest.fn();
const error = { message: "", isError: false };

const uiStore = { error, closeError, showError };

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
      } = renderHook(() => useUser(), { wrapper: WrapperWithProviders });
      await getLoginCookie(userCredentials);
      expect(mockNavigate).toHaveBeenCalled();
    });
  });

  describe("When its method getCookie is invoked and the response has status 404", () => {
    beforeEach(() => {
      server.resetHandlers(...errorHandlers);
    });

    test("Then showError should be called with 'Error on login, try again later'", async () => {
      const {
        result: {
          current: { getLoginCookie },
        },
      } = renderHook(() => useUser(), {
        wrapper({ children }) {
          return (
            <WrapperWithValues uiStore={uiStore}>{children}</WrapperWithValues>
          );
        },
      });

      const expectedMessage = "Error on login, try again later";

      await act(async () => getLoginCookie(userCredentials));

      expect(showError).toHaveBeenCalledWith(expectedMessage);
    });
  });
});
