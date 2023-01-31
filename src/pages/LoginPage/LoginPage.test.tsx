import { render, screen } from "@testing-library/react";
import LoginPage from "./LoginPage";

describe("Given the page LoginPage", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading level 1 with 'Login' on the screen", () => {
      const expectedHeading = {
        level: 1,
        name: /login/i,
      };

      render(<LoginPage />);
      const renderedHeading = screen.getByRole("heading", expectedHeading);

      expect(renderedHeading).toBeInTheDocument();
    });
  });
});
