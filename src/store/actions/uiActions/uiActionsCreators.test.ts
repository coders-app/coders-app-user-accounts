import { CloseErrorAction, ShowErrorAction, UiActionType } from "./types";
import {
  closeErrorActionCreator,
  showErrorActionCreator,
} from "./uiActionsCreators";

describe("Given a showErroActionCreator function", () => {
  describe("When it's invoked with message 'Something went wrong'", () => {
    test("Then it should return an action with type 'showError' and the received message as payload", () => {
      const errorMessage = "Something went wrong";
      const expectedAction: ShowErrorAction = {
        type: UiActionType.showError,
        payload: errorMessage,
      };

      const showErrorAction = showErrorActionCreator(errorMessage);

      expect(showErrorAction).toStrictEqual(expectedAction);
    });
  });
});

describe("Given a closeErrorActionCreator function", () => {
  describe("When it's invoked", () => {
    test("Then it should return an action with type 'closeError'", () => {
      const expectedAction: CloseErrorAction = {
        type: UiActionType.closeError,
      };

      const closeErrorAction = closeErrorActionCreator();

      expect(closeErrorAction).toStrictEqual(expectedAction);
    });
  });
});
