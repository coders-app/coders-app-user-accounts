import { CloseErrorAction, ShowErrorAction, UiActionType } from "./types";

export const showErrorActionCreator = (
  errorMessage: string
): ShowErrorAction => ({
  type: UiActionType.showError,
  payload: errorMessage,
});

export const closeErrorActionCreator = (): CloseErrorAction => ({
  type: UiActionType.closeError,
});
