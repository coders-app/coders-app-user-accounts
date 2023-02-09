import { screen } from "@testing-library/react";
import customRender from "../../testUtils/customRender";
import LoginPage from "./LoginPage";

describe("Given the page LoginPage", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading level 1 with 'Login' on the screen", () => {
      const expectedHeading = {
        level: 1,
        name: /login/i,
      };

      customRender(<LoginPage />);
      const renderedHeading = screen.getByRole("heading", expectedHeading);

      expect(renderedHeading).toBeInTheDocument();
    });

    test("Then it should show a form with 'Email' and 'Password' as a text box and a button with text 'Send'", () => {
      const emailLabel = /email/i;
      const passwordLabel = /password/i;
      const buttonText = /send/i;

      customRender(<LoginPage />);

      const resultEmailLabel: HTMLLabelElement =
        screen.getByLabelText(emailLabel);
      const resultPasswordLabel: HTMLLabelElement =
        screen.getByLabelText(passwordLabel);
      const resultButton: HTMLButtonElement = screen.getByRole("button", {
        name: buttonText,
      });

      expect(resultEmailLabel).toBeInTheDocument();
      expect(resultPasswordLabel).toBeInTheDocument();
      expect(resultButton).toBeInTheDocument();
    });
  });
});
