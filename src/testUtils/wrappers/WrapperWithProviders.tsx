import { PropsWithChildren } from "react";
import { ThemeProvider } from "styled-components";
import mainTheme from "../../styles/mainTheme";

const WrapperWithProviders = ({ children }: PropsWithChildren) => {
  return <ThemeProvider theme={mainTheme}>{children}</ThemeProvider>;
};

export default WrapperWithProviders;
