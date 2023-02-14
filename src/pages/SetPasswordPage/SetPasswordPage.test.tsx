import { screen } from "@testing-library/react";
import customRender from "../../testUtils/customRender";
import SetPasswordPage from "./SetPasswordPage";

describe("Given the SetPasswordPage", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading level 1 with 'Set your password' on the screen", () => {
      const headingData = {
        level: 1,
        name: /set your password/i,
      };

      customRender(<SetPasswordPage />);
      const renderedHeading = screen.getByRole("heading", headingData);

      expect(renderedHeading).toBeInTheDocument();
    });
  });
});
