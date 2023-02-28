import { UiActionType } from "../../actions/uiActions/types";
import {
  closeFeedbackActionCreator,
  showFeedbackActionCreator,
} from "../../actions/uiActions/uiActionsCreators";
import { UiState } from "../../contexts/UiContext/UiContext";
import { initialUiState } from "../../contexts/UiContext/UiContextProvider";
import uiReducer from "./uiReducer";

describe("Given a uiReducer function", () => {
  const currentUiState: UiState = {
    feedback: { message: "General error", isError: true },
  };

  describe("When it's invoked with a current ui state and showFeedback action", () => {
    test("Then it should return a new ui state with the received error message and isError value true", () => {
      const message = "Something went wrong";
      const showFeedbackAction = showFeedbackActionCreator(message);
      const expectedUiState: UiState = {
        feedback: { message: message, isError: true },
      };

      const newUiState = uiReducer(currentUiState, showFeedbackAction);

      expect(newUiState).toStrictEqual(expectedUiState);
    });
  });

  describe("When it's invoked with a current ui state and a closeFeedback action", () => {
    test("Then it should return a new ui state with an empty error message and isError value false", () => {
      const closeFeedbackAction = closeFeedbackActionCreator();
      const expectedUiState: UiState = initialUiState;

      const newUiState = uiReducer(currentUiState, closeFeedbackAction);

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
