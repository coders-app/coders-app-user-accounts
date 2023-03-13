import customRender from "../../testUtils/customRender";
import App from "./App";

const mockVerifyUser = jest.fn();

jest.mock("../../hooks/useUser/useUser", () => () => ({
  ...jest.requireActual("../../hooks/useUser/useUser"),
  verifyUser: mockVerifyUser,
}));

describe("Given an App component", () => {
  describe("When it's rendered", () => {
    test("Then verifyUser should be invoked", () => {
      customRender(<App />);

      expect(mockVerifyUser).toHaveBeenCalled();
    });
  });
});
