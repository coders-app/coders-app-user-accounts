export enum UiActionType {
  showError,
  closeError,
}

export interface UiAction {
  type: UiActionType;
  payload?: unknown;
}

export interface ShowErrorAction extends UiAction {
  type: UiActionType.showError;
  payload: string;
}

export interface CloseErrorAction extends UiAction {
  type: UiActionType.closeError;
}
