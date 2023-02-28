import { CloseFeedbackAction, ShowFeedbackAction, UiActionType } from "./types";
import {
  closeFeedbackActionCreator,
  showFeedbackActionCreator,
} from "./uiActionsCreators";

describe("Given a showFeedbackActionCreator function", () => {
  describe("When it's invoked with message 'Something went wrong'", () => {
    test("Then it should return an action with type 'showFeedback' and the received message as payload", () => {
      const message = "Something went wrong";
      const expectedAction: ShowFeedbackAction = {
        type: UiActionType.showFeedback,
        payload: message,
      };

      const showFeedbackAction = showFeedbackActionCreator(message);

      expect(showFeedbackAction).toStrictEqual(expectedAction);
    });
  });
});

describe("Given a closeFeedbackActionCreator function", () => {
  describe("When it's invoked", () => {
    test("Then it should return an action with type 'closeFeedback'", () => {
      const expectedAction: CloseFeedbackAction = {
        type: UiActionType.closeFeedback,
      };

      const closeFeedbackAction = closeFeedbackActionCreator();

      expect(closeFeedbackAction).toStrictEqual(expectedAction);
    });
  });
});
