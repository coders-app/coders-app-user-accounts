import {
  ShowFeedbackAction,
  UiAction,
  UiActionType,
} from "../../actions/uiActions/types";
import { UiState } from "../../contexts/UiContext/UiContext";

const uiReducer = (currentUiState: UiState, action: UiAction): UiState => {
  let newUiState: UiState;
  switch (action.type) {
    case UiActionType.showFeedback:
      newUiState = {
        ...currentUiState,
        feedback: {
          message: (action as ShowFeedbackAction).payload,
          isError: true,
        },
      };
      break;
    case UiActionType.closeFeedback:
      newUiState = {
        ...currentUiState,
        feedback: { message: "", isError: false },
      };
      break;
    default:
      newUiState = currentUiState;
  }
  return newUiState;
};

export default uiReducer;
