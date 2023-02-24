import {
  ShowErrorAction,
  UiAction,
  UiActionType,
} from "../../actions/uiActions/types";
import { UiState } from "../../contexts/UiContext/UiContext";

const uiReducer = (currentUiState: UiState, action: UiAction): UiState => {
  let newUiState: UiState;
  switch (action.type) {
    case UiActionType.showError:
      newUiState = {
        ...currentUiState,
        error: {
          message: (action as ShowErrorAction).payload,
          isError: true,
        },
      };
      break;
    case UiActionType.closeError:
      newUiState = {
        ...currentUiState,
        error: { message: "", isError: false },
      };
      break;
    default:
      newUiState = currentUiState;
  }
  return newUiState;
};

export default uiReducer;
