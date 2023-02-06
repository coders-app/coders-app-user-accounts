import { render, screen } from "@testing-library/react";
import WrapperWithProviders from "../../testUtils/wrappers/WrapperWithProviders";
import LoginPage from "./LoginPage";

describe("Given the page LoginPage", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading level 1 with 'Login' on the screen", () => {
      const expectedHeading = {
        level: 1,
        name: /login/i,
      };

      render(<LoginPage />, { wrapper: WrapperWithProviders });
      const renderedHeading = screen.getByRole("heading", expectedHeading);

      expect(renderedHeading).toBeInTheDocument();
    });
  });
});
