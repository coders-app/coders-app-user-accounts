import { screen } from "@testing-library/react";
import paths from "../utils/paths";
import routerRender from "../testUtils/routersUtils/routerRender";

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

    describe("When it's render with path '/login'", () => {
      test("Then it should show a title with 'Login' inside", () => {
        routerRender({ initialEntries: [paths.login] });

        const loginTitle: HTMLHeadingElement = screen.getByRole("heading", {
          name: loginHeadingText,
        });

        expect(loginTitle).toBeInTheDocument();
      });
    });
  });
});
