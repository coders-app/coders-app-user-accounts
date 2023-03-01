import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router";
import "@fontsource/open-sans";
import "@fontsource/montserrat";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import mainTheme from "./styles/mainTheme";
import browserRouter from "./routers/browserRouter";
import UiContextProvider from "./store/contexts/UiContext/UiContextProvider";
import UserContextProvider from "./store/contexts/userContext/userContextProvider";

const root = ReactDOM.createRoot(
  document.querySelector(".root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <UiContextProvider>
      <UserContextProvider>
        <ThemeProvider theme={mainTheme}>
          <GlobalStyle />
          <RouterProvider router={browserRouter} />
        </ThemeProvider>
      </UserContextProvider>
    </UiContextProvider>
  </React.StrictMode>
);
