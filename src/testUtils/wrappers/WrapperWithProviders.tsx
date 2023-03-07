import { PropsWithChildren } from "react";
import { ThemeProvider } from "styled-components";
import UiContextProvider from "../../store/contexts/UiContext/UiContextProvider";
import GlobalStyle from "../../styles/GlobalStyle";
import mainTheme from "../../styles/mainTheme";
import { UiContext } from "../../store/contexts/UiContext/UiContext";
import { WrapperWithProvidersProps } from "../types";
import { UserContext } from "../../store/contexts/userContext/userContext";
import UserContextProvider from "../../store/contexts/userContext/userContextProvider";

const WrapperWithProviders = ({
  children,
  wrapperOptions = {},
}: WrapperWithProvidersProps): JSX.Element => {
  const UiContextWrapper = ({ children }: PropsWithChildren): JSX.Element => {
    return wrapperOptions.mockUiStore ? (
      <UiContext.Provider value={wrapperOptions.mockUiStore}>
        {children}
      </UiContext.Provider>
    ) : (
      <UiContextProvider>{children as JSX.Element}</UiContextProvider>
    );
  };

  const UserContextWrapper = ({ children }: PropsWithChildren): JSX.Element => {
    return wrapperOptions.mockUserStore ? (
      <UserContext.Provider value={wrapperOptions.mockUserStore}>
        {children}
      </UserContext.Provider>
    ) : (
      <UserContextProvider>{children as JSX.Element}</UserContextProvider>
    );
  };
  return (
    <UiContextWrapper>
      <UserContextWrapper>
        <ThemeProvider theme={mainTheme}>
          <GlobalStyle />
          {children}
        </ThemeProvider>
      </UserContextWrapper>
    </UiContextWrapper>
  );
};

export default WrapperWithProviders;
