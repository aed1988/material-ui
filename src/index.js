import React from "react";
import ReactDOM from "react-dom";
import { CssBaseline, ThemeProvider } from "@material-ui/core";
import theme from "./theme";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </CssBaseline>
  </React.StrictMode>,
  document.getElementById("root")
);
