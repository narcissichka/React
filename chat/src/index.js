import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider, createTheme } from "@mui/material";
import { Application } from "./components";
// import { Palette } from "@mui/icons-material";

const theme = createTheme({
  palette:{
    glassmorphism:{
      shadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
      color: "rgba( 206, 147, 216, 0.3 )",
      gradient: "linear-gradient(169deg, rgba(255, 216, 245, 0.7) 0%, rgba(225, 250, 255, 0.7) 100%)",
      blur: "blur( 4px )",
      border: "1px solid rgba(255, 255, 255, 0.18)",
      radius: "10px"
    },
    text:{
      main: "#172c66",
      secondary: "#001858",
    }
  }
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Application />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
