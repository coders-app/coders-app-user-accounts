import { act, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import customRender from "../../testUtils/customRender";
import LoginForm from "./LoginForm";

describe("Given a LoginForm", () => {
  const buttonText = /send/i;
  const emailLabel = /email/i;
  const passwordLabel = /password/i;

  describe("When it's rendered", () => {
    test("Then it should show a text field with 'Email', 'Password", () => {
      customRender(<LoginForm />);

      const emailInput = screen.getByLabelText(emailLabel);
      const passwordInput = screen.getByLabelText(passwordLabel);

      expect(emailInput).toBeInTheDocument();
      expect(passwordInput).toBeInTheDocument();
    });

    test("Then it should show a form with a button inside with a text 'Send'", () => {
      customRender(<LoginForm />);

      const resultButton = screen.getByRole("button", {
        name: buttonText,
      });

      expect(resultButton).toBeInTheDocument();
    });
  });

  describe("And the user types 'admin@admin.com' as email and '1234' as password in the text fields", () => {
    test("Then it should update the text field value with what the user entered", async () => {
      const userEmail = "admin@admin.com";
      const userPassword = "1234";

      customRender(<LoginForm />);

      const emailInput: HTMLInputElement = screen.getByLabelText(emailLabel);

      const passwordInput: HTMLInputElement =
        screen.getByLabelText(passwordLabel);

      await act(async () => await userEvent.type(emailInput, userEmail));
      await act(async () => await userEvent.type(passwordInput, userPassword));

      expect(emailInput.value).toBe(userEmail);
      expect(passwordInput.value).toBe(userPassword);
    });
  });

  describe("And the user does not introduce their email and password", () => {
    test("Then the button should be disabled", () => {
      customRender(<LoginForm />);

      const buttonForm = screen.getByRole("button", {
        name: buttonText,
      });

      expect(buttonForm).toBeDisabled();
    });
  });

  describe("And the user types 'admin' as email and clicks on the password text field", () => {
    test("Then it should show a message with text 'Invalid email format'", async () => {
      const userEmail = "admin";
      const emailFormatMessage = "Invalid email format";

      customRender(<LoginForm />);

      const emailInput = screen.getByLabelText(emailLabel);
      await act(async () => await userEvent.type(emailInput, userEmail));

      const passwordInput = screen.getByLabelText(passwordLabel);
      await act(async () => await userEvent.click(passwordInput));

      const validationMessage = screen.getByText(emailFormatMessage);

      expect(validationMessage).toBeInTheDocument();
    });
  });

  describe("And the user clicks on the password text field and not typing on it, and then clicks on the email text field", () => {
    test("Then it should show a message with text 'Password is required'", async () => {
      const requiredPasswordMessage = "Password is required";

      customRender(<LoginForm />);

      const passwordInput = screen.getByLabelText(passwordLabel);
      await act(async () => await userEvent.click(passwordInput));

      const emailInput = screen.getByLabelText(emailLabel);
      await act(async () => await userEvent.click(emailInput));

      const validationMessage = screen.getByText(requiredPasswordMessage);

      expect(validationMessage).toBeInTheDocument();
    });
  });
});
