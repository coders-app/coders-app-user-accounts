import { renderHook } from "@testing-library/react";
import * as router from "react-router";
import { UserCredentials } from "../types";
import useUser from "./useUser";
import WrapperWithProviders from "../../testUtils/wrappers/WrapperWithProviders";

const mockNavigate = jest.fn();

beforeEach(() => {
  jest.spyOn(router, "useNavigate").mockImplementation(() => mockNavigate);
});

describe("Given a useUser custom hook", () => {
  describe("When its method getCookie is invoked with credentials 'amind@admin.com' as email and 'AdminAdmin' as password", () => {
    test("Then useNavigate should be invoked", async () => {
      const userCredentials: UserCredentials = {
        email: "admin@admin.com",
        password: "AdminAdmin",
      };

      const {
        result: {
          current: { getLoginCookie },
        },
      } = renderHook(() => useUser(), { wrapper: WrapperWithProviders });

      await getLoginCookie(userCredentials);

      expect(mockNavigate).toHaveBeenCalled();
    });
  });
});
