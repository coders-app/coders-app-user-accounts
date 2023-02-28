import { CloseFeedbackAction, ShowFeedbackAction, UiActionType } from "./types";

export const showFeedbackActionCreator = (
  message: string
): ShowFeedbackAction => ({
  type: UiActionType.showFeedback,
  payload: message,
});

export const closeFeedbackActionCreator = (): CloseFeedbackAction => ({
  type: UiActionType.closeFeedback,
});
