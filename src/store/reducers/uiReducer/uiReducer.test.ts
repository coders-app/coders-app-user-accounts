import { UiActionType } from "../../actions/uiActions/types";
import {
  closeErrorActionCreator,
  showErrorActionCreator,
} from "../../actions/uiActions/uiActionsCreators";
import { UiState } from "../../contexts/UiContext/UiContext";
import { initialUiState } from "../../contexts/UiContext/UiContextProvider";
import uiReducer from "./uiReducer";

describe("Given a uiReducer function", () => {
  const currentUiState: UiState = {
    error: { message: "General error", isError: true },
  };

  describe("When it's invoked with a current ui state and showError action", () => {
    test("Then it should return a new ui state with the received error message and isError value true", () => {
      const errorMessage = "Something went wrong";
      const showErrorAction = showErrorActionCreator(errorMessage);
      const expectedUiState: UiState = {
        error: { message: errorMessage, isError: true },
      };

      const newUiState = uiReducer(currentUiState, showErrorAction);

      expect(newUiState).toStrictEqual(expectedUiState);
    });
  });

  describe("When it's invoked with a current ui state and a closeError action", () => {
    test("Then it should return a new ui state with an empty error message and isError value false", () => {
      const closeErrorAction = closeErrorActionCreator();
      const expectedUiState: UiState = initialUiState;

      const newUiState = uiReducer(currentUiState, closeErrorAction);

      expect(newUiState).toStrictEqual(expectedUiState);
    });
  });

  describe("When it's invoked with a current ui state and an unknown action", () => {
    test("Then it should return the same ui state", () => {
      const unknownAction = { type: "" as unknown as UiActionType };

      const newUiState = uiReducer(currentUiState, unknownAction);

      expect(newUiState).toStrictEqual(currentUiState);
    });
  });
});
