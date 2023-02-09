import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import customRender from "../../testUtils/customRender";
import LoginForm from "./LoginForm";

describe("Given a LoginForm", () => {
  const buttonText = /send/i;
  const emailLabel = /email/i;
  const passwordLabel = /password/i;

  describe("When it's rendered", () => {
    test("Then it should show a text field wit 'Email', 'Password", () => {
      customRender(<LoginForm />);

      const resulEmailLabel = screen.getByLabelText(emailLabel);
      const resultPasswordLabel = screen.getByLabelText(passwordLabel);

      expect(resulEmailLabel).toBeInTheDocument();
      expect(resultPasswordLabel).toBeInTheDocument();
    });

    test("Then it should show a form with a button inside with a text 'Send'", () => {
      customRender(<LoginForm />);

      const resultButton = screen.getByRole("button", {
        name: buttonText,
      });

      expect(resultButton).toBeInTheDocument();
    });
  });

  describe("And the user types 'admin@admin.com' as email and '1234' as passwordin the text fields", () => {
    test("Then it should update the text field value with what the user entered", () => {
      const expectedUserEmail = "admin@admin.com";
      const expectedUserPassword = "1234";

      customRender(<LoginForm />);

      const emailInput: HTMLInputElement = screen.getByLabelText(emailLabel);
      userEvent.type(emailInput, expectedUserEmail);
      expect(emailInput.value).toBe(expectedUserEmail);

      const passwordInput: HTMLInputElement =
        screen.getByLabelText(passwordLabel);
      userEvent.type(passwordInput, expectedUserPassword);
      expect(passwordInput.value).toBe(expectedUserPassword);
    });
  });

  describe("And the user clicks on the button 'Send' without introduce it's email and password", () => {
    test("Then the button should be disabled", () => {
      customRender(<LoginForm />);
      const buttonForm: HTMLButtonElement = screen.getByRole("button", {
        name: buttonText,
      });

      expect(buttonForm).toBeDisabled();
    });
  });
});
