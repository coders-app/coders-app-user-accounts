import { screen } from "@testing-library/react";
import routerPaths from "../../routers/routerPaths";
import routerRender from "../../testUtils/routersUtils/routerRender";

describe("Given the SetPasswordPage", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading level 1 with 'Set your password' on the screen", () => {
      const headingData = {
        level: 1,
        name: /set your password/i,
      };

      routerRender({
        wrapperOptions: { initialEntries: [routerPaths.setPassword] },
      });
      const renderedHeading = screen.getByRole("heading", headingData);

      expect(renderedHeading).toBeInTheDocument();
    });
  });
});
