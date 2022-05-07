import React from "react";
import ReactDOM from "react-dom/client";
import { createTheme } from "@mui/material";
import reportWebVitals from "./reportWebVitals";
import Dashboard from "./container/Dashboard";
import "./index.css";
import { ThemeProvider } from "@emotion/react";
import SidePanelProvidor from "./context/sidepanelContext";
import GloabalStateProvidor from "./context/globalStateContext";

const theme = createTheme({
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GloabalStateProvidor>
      <SidePanelProvidor>
        <ThemeProvider theme={theme}>
          <Dashboard />
        </ThemeProvider>
      </SidePanelProvidor>
    </GloabalStateProvidor>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
