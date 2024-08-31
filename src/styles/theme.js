import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
      lightgrey: "#59595A",
      light: "#f9f9f9",
    },
    secondary: {
      main: "#FF9500",
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: "32px",
    },
    h2: {
      fontSize: "28px",
    },
    h3: {
      fontSize: "48px",
       '@media (max-width:1440px)': {
        fontSize: '28px',
      },
       '@media (max-width:600px)': {
        fontSize: '28px',
      },
    },
    h4: {
      fontSize: "18px",
      '@media (max-width:1440px)': {
        fontSize: '16px',
      },
      '@media (max-width:1440px)': {
        fontSize: '14px',
      },
    },
    h5: {
      fontSize: "16px",
    },
    h6: {
      fontSize: "14px",
    },
    body1: {
      fontSize: "16px",
    },
    body2: {
      fontSize: "14px",
    },
    title: {
      fontSize: "24px",
      "@media (max-width:1440px)": {
        fontSize: "20px",
      },
      "@media (max-width:600px)": {
        fontSize: "20px",
      },
    },
    subtitle1: {
      fontSize: "16px",
    },
    subtitle2: {
      fontSize: "14px",
    },
    button: {
      fontSize: "14px",
    },
    caption: {
      fontSize: "12px",
    },
    overline: {
      fontSize: "12px",
    },
  },
  spacing: 8,
});

export default theme;
