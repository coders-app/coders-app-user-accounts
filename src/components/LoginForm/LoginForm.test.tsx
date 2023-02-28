import { act, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import customRender from "../../testUtils/customRender";
import LoginForm from "./LoginForm";

const mockLogin = jest.fn();

jest.mock("../../hooks/useUser/useUser", () => () => ({
  getLoginCookie: mockLogin,
}));

describe("Given a LoginForm", () => {
  const buttonText = /send/i;
  const emailLabel = /email/i;
  const passwordLabel = /password/i;

  describe("When it's rendered", () => {
    test("Then it should show two text fields with 'Email' and 'Password", () => {
      customRender(<LoginForm />);

      const emailField = screen.getByLabelText(emailLabel);
      const passwordField = screen.getByLabelText(passwordLabel);

      expect(emailField).toBeInTheDocument();
      expect(passwordField).toBeInTheDocument();
    });

    test("Then it should show a button with the text 'Send'", () => {
      customRender(<LoginForm />);

      const button = screen.getByRole("button", {
        name: buttonText,
      });

      expect(button).toBeInTheDocument();
    });
  });

  describe("When it's rendered and the user types 'admin@admin.com' as email and '1234' as password in the text fields", () => {
    const userEmail = "admin@admin.com";
    const userPassword = "1234";
    test("Then it should update the text field value with what the user entered", async () => {
      customRender(<LoginForm />);

      const emailField = screen.getByLabelText(emailLabel);
      const passwordField = screen.getByLabelText(passwordLabel);

      await act(async () => await userEvent.type(emailField, userEmail));
      await act(async () => await userEvent.type(passwordField, userPassword));

      expect(emailField).toHaveValue(userEmail);
      expect(passwordField).toHaveValue(userPassword);
    });

    describe("And the user clicks 'send' button", () => {
      test("Then it sould invoke getLoginCookie", async () => {
        customRender(<LoginForm />);

        const emailField = screen.getByLabelText(emailLabel);
        const passwordField = screen.getByLabelText(passwordLabel);

        await act(async () => await userEvent.type(emailField, userEmail));
        await act(
          async () => await userEvent.type(passwordField, userPassword)
        );

        const button = screen.getByRole("button", {
          name: buttonText,
        });
        await act(async () => await userEvent.click(button));

        expect(mockLogin).toHaveBeenCalled();
      });
    });
  });

  describe("When it's rendered and the user does not introduce their email and password", () => {
    test("Then the button should be disabled", () => {
      customRender(<LoginForm />);

      const button = screen.getByRole("button", {
        name: buttonText,
      });

      expect(button).toBeDisabled();
    });
  });

  describe("When it's rendered and the user types 'admin' as email and clicks on the password text field", () => {
    test("Then it should show a message with text 'Invalid email format'", async () => {
      const userEmail = "admin";
      const emailFormatMessage = "Invalid email format";

      customRender(<LoginForm />);

      const emailField = screen.getByLabelText(emailLabel);
      await act(async () => await userEvent.type(emailField, userEmail));

      const passwordInput = screen.getByLabelText(passwordLabel);
      await act(async () => await userEvent.click(passwordInput));

      const validationMessage = screen.getByText(emailFormatMessage);

      expect(validationMessage).toBeInTheDocument();
    });
  });

  describe("When it's rendered and the user clicks on the password text field and not typing on it, and then clicks on the email text field and types 'admin@admin.com'", () => {
    test("Then it should show a message with text 'Password is required'", async () => {
      const userEmail = "admin@admin.com";
      const requiredPasswordMessage = "Password is required";

      customRender(<LoginForm />);

      const passwordField = screen.getByLabelText(passwordLabel);
      await act(async () => await userEvent.click(passwordField));

      const emailInput = screen.getByLabelText(emailLabel);
      await act(async () => await userEvent.click(emailInput));
      await act(async () => await userEvent.type(emailInput, userEmail));

      const validationMessage = screen.getByText(requiredPasswordMessage);

      expect(validationMessage).toBeInTheDocument();
    });
  });
});
