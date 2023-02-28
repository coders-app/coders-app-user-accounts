import { UserCredentials, FeedbackData } from "../types";

export interface UseUiStructure {
  showFeedback: (error: string) => void;
  closeFeedback: () => void;
  feedback: FeedbackData;
}

export interface UseUserStructure {
  getLoginCookie: (userCredentials: UserCredentials) => void;
}
