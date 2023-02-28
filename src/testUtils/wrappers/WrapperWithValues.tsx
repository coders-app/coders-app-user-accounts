import {
  UiContext,
  UiContextStructure,
} from "../../store/contexts/UiContext/UiContext";
import {
  UserContext,
  UserContextStructure,
} from "../../store/contexts/userContext/userContext";

export interface WrapperWithValuesProps {
  children: JSX.Element | JSX.Element[];
  uiStore: UiContextStructure;
  userStore: UserContextStructure;
}

export const WrapperWithValues = ({
  children,
  uiStore,
  userStore,
}: WrapperWithValuesProps): JSX.Element => {
  return (
    <UiContext.Provider value={uiStore}>
      <UserContext.Provider value={userStore}>{children}</UserContext.Provider>
    </UiContext.Provider>
  );
};
