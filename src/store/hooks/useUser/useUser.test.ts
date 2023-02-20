import { renderHook } from "@testing-library/react";
import * as router from "react-router";
import WrapperWithProviders from "../../../testUtils/wrappers/WrapperWithProviders";
import { UserCredentials } from "../../models/User";
import useUser from "./useUser";

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
          current: { getCookie },
        },
      } = renderHook(() => useUser(), { wrapper: WrapperWithProviders });

      await getCookie(userCredentials);

      expect(mockNavigate).toHaveBeenCalled();
    });
  });
});
