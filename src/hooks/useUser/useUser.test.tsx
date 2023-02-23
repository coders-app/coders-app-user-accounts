import { act, renderHook } from "@testing-library/react";
import * as router from "react-router";
import { errorHandlers } from "../../mocks/handlers";
import server from "../../mocks/server";
import { UiAction } from "../../store/actions/uiActions/types";
import { showErrorActionCreator } from "../../store/actions/uiActions/uiActionsCreators";
import { UiState } from "../../store/contexts/UiContext/UiContext";
import { initialUiState } from "../../store/contexts/UiContext/UiContextProvider";
import WrapperWithProviders from "../../testUtils/wrappers/WrapperWithProviders";
import { WrapperWithValues } from "../../testUtils/wrappers/WrapperWithValues";
import { UserCredentials } from "../../types";
import useUser from "./useUser";

beforeEach(() => {
  jest.clearAllMocks();
});

const currentUiState: UiState = initialUiState;
const uiDispatch: React.Dispatch<UiAction> = jest.fn();
const uiStore = { dispatch: uiDispatch, currentUiState };

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

    test("Then dispatch should be invoked with showErrorAction with message 'Error on login, try again later'", async () => {
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

      expect(uiDispatch).toHaveBeenCalledWith(
        showErrorActionCreator(expectedMessage)
      );
    });
  });
});
