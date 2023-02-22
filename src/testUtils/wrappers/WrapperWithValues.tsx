import {
  UiContext,
  UiContextStructure,
} from "../../store/contexts/UiContext/UiContext";

export interface WrapperWithValuesProps {
  children: JSX.Element | JSX.Element[];
  uiStore: UiContextStructure;
}

export const WrapperWithValues = ({
  children,
  uiStore,
}: WrapperWithValuesProps): JSX.Element => {
  return <UiContext.Provider value={uiStore}>{children}</UiContext.Provider>;
};
