import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "./global";

import Routes from "./routes";

import theme from "./theme";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("app")
);
