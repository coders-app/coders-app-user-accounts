import { screen } from "@testing-library/react";
import routerRender from "../../testUtils/routersUtils/routerRender";

const mockLogin = jest.fn();

jest.mock("../../hooks/useUser/useUser", () => () => ({
  getLoginCookie: mockLogin,
}));

describe("Given the page LoginPage", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading level 1 with 'Login' on the screen", () => {
      const headingData = {
        level: 1,
        name: /login/i,
      };

      routerRender();
      const renderedHeading = screen.getByRole("heading", headingData);

      expect(renderedHeading).toBeInTheDocument();
    });

    test("Then it should show a form with 'Email' and 'Password' as a text box and a button with text 'Send'", () => {
      const emailLabel = /email/i;
      const passwordLabel = /password/i;
      const buttonText = /send/i;

      routerRender();
      const inputEmail = screen.getByLabelText(emailLabel);
      const inputPassword = screen.getByLabelText(passwordLabel);
      const button = screen.getByRole("button", {
        name: buttonText,
      });

      expect(inputEmail).toBeInTheDocument();
      expect(inputPassword).toBeInTheDocument();
      expect(button).toBeInTheDocument();
    });

    test("Then it should show a link with text 'Reset password'", () => {
      const linkData = { name: "Reset password" };

      routerRender();
      const resetPasswordLink = screen.getByRole("link", linkData);

      expect(resetPasswordLink).toBeInTheDocument();
    });
  });
});
