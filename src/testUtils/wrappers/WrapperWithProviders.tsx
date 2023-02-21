import { PropsWithChildren } from "react";
import { ThemeProvider } from "styled-components";
import UiContextProvider from "../../store/contexts/UiContext/UiContextProvider";
import GlobalStyle from "../../styles/GlobalStyle";
import mainTheme from "../../styles/mainTheme";

const WrapperWithProviders = ({ children }: PropsWithChildren): JSX.Element => (
  <UiContextProvider>
    <ThemeProvider theme={mainTheme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  </UiContextProvider>
);

export default WrapperWithProviders;
