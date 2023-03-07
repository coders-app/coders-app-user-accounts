import { screen } from "@testing-library/react";
import routerRender from "../testUtils/routersUtils/routerRender";
import routerPaths from "./routerPaths";

describe("Given a RouterProvider", () => {
  const loginHeadingText = /login/i;

  describe("When it's render with path '/'", () => {
    test("Then it should show a title with 'Login' inside", () => {
      routerRender();

      const loginTitle: HTMLHeadingElement = screen.getByRole("heading", {
        name: loginHeadingText,
      });

      expect(loginTitle).toBeInTheDocument();
    });
  });

  describe("When it's render with path '/login'", () => {
    test("Then it should show a title with 'Login' inside", () => {
      routerRender({
        wrapperOptions: { initialEntries: [routerPaths.login] },
      });

      const loginTitle: HTMLHeadingElement = screen.getByRole("heading", {
        name: loginHeadingText,
      });

      expect(loginTitle).toBeInTheDocument();
    });
  });

  describe("When it's rendered with a path '/set-password'", () => {
    test("Then it should show a title with 'Reset your password' inside", () => {
      routerRender({
        wrapperOptions: { initialEntries: [routerPaths.setPassword] },
      });

      const setPasswordTitle = screen.getByRole("heading", {
        name: /Set your password/i,
      });

      expect(setPasswordTitle).toBeInTheDocument();
    });
  });
});
