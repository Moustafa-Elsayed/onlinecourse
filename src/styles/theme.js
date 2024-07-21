import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
      lightgrey:"#59595A",
      light:"#f5f0f0"
    },
    secondary: {
      main: "#FF9500",
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: "2rem",
    },
  },
  spacing: 8,
});

export default theme;
