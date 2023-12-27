import React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { ThemeProvider, createTheme } from "@mui/material";

const CButton = (props) => {
  const theme = createTheme({
    status: {
      danger: "#e53e3e",
    },
    palette: {
      primary: {
        main: "#ff0000",
      },
      secondary: {
        main: "#e1e1e133",
      },
      neutral: {
        main: "#64748B",
        contrastText: "#fff",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Button
        className={props.className}
        variant={props.variant}
        size={props.size}
        color={props.color}
        startIcon={props.sIcon}
        endIcon={props.eIcon}
        onClick={props.onClick}
      >
        {props.title}
      </Button>
    </ThemeProvider>
  );
};

export default CButton;
