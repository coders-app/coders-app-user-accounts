import { PropsWithChildren } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../../styles/GlobalStyle";
import mainTheme from "../../styles/mainTheme";

const WrapperWithProviders = ({ children }: PropsWithChildren): JSX.Element => (
  <ThemeProvider theme={mainTheme}>
    <GlobalStyle />
    {children}
  </ThemeProvider>
);

export default WrapperWithProviders;
