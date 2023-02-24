export enum UiActionType {
  showFeedback,
  closeFeedback,
}

export interface UiAction {
  type: UiActionType;
  payload?: unknown;
}

export interface ShowFeedbackAction extends UiAction {
  type: UiActionType.showFeedback;
  payload: string;
}

export interface CloseFeedbackAction extends UiAction {
  type: UiActionType.closeFeedback;
}
