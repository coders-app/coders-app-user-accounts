import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import WrapperWithProviders from "../../testUtils/wrappers/WrapperWithProviders";
import LoginForm from "./LoginForm";

describe("Given a LoginForm", () => {
  describe("When it's render", () => {
    test("Then it should show a form with 'Introduce your Email', 'Introdue your Password' as placeholders", () => {
      const expectedEmailPlaceholder = "Introduce your Email";
      const expectedPasswordPlaceholder = "Introduce your Password";

      render(<LoginForm />, { wrapper: WrapperWithProviders });

      const resulEmailPlaceholder = screen.getByPlaceholderText(
        expectedEmailPlaceholder
      );
      const resultPasswordPlaceholder = screen.getByPlaceholderText(
        expectedPasswordPlaceholder
      );

      expect(resulEmailPlaceholder).toBeInTheDocument();
      expect(resultPasswordPlaceholder).toBeInTheDocument();
    });

    test("Then it should show a form with a button inside with a text 'Send'", () => {
      const expectedButtonText = "Send";

      render(<LoginForm />, { wrapper: WrapperWithProviders });

      const resultButton = screen.getByRole("button", {
        name: expectedButtonText,
      });

      expect(resultButton).toBeInTheDocument();
    });
  });

  describe("And the user types 'admin@admin.com' in the email input and '1234' in password input", () => {
    test("Then it should update the input value with what the user entered", async () => {
      const emailLabel = "Email";
      const passwordLabel = "Password";
      const expectedUserEmail = "admin@admin.com";
      const expectedUserPassword = "1234";

      render(<LoginForm />, { wrapper: WrapperWithProviders });

      const emailInput: HTMLInputElement = screen.getByLabelText(emailLabel);
      await userEvent.type(emailInput, expectedUserEmail);
      expect(emailInput.value).toBe(expectedUserEmail);

      const passwordInput: HTMLInputElement =
        screen.getByLabelText(passwordLabel);
      await userEvent.type(passwordInput, expectedUserPassword);
      expect(passwordInput.value).toBe(expectedUserPassword);
    });
  });
});
