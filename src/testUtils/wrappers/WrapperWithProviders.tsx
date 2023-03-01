import { PropsWithChildren } from "react";
import { ThemeProvider } from "styled-components";
import UiContextProvider from "../../store/contexts/UiContext/UiContextProvider";
import UserContextProvider from "../../store/contexts/userContext/userContextProvider";
import GlobalStyle from "../../styles/GlobalStyle";
import mainTheme from "../../styles/mainTheme";

const WrapperWithProviders = ({ children }: PropsWithChildren): JSX.Element => (
  <UiContextProvider>
    <UserContextProvider>
      <ThemeProvider theme={mainTheme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </UserContextProvider>
  </UiContextProvider>
);

export default WrapperWithProviders;
