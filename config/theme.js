import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const baseTheme = createTheme({
  palette: {
    navBg: "#040404cc",
    primary: {
      light: "#FFFDFA",
      main: "#FFD365",
      dark: "#FFD365",
    },
    secondary: {
      light: "#FFFFFF",
      main: "#ffffe6",
      dark: "#ffffcc",
    },
    background: {
      paper: "#FFD365",
      default: "#111111",
    },
  },
  typography: {
    fontFamily: "'Inter', 'Roboto'",
    fontSize: 14,
    h1: {
      fontSize: "4rem",
      fontWeight: 700,
    },
    h2: {
      fontSize: "3.5rem",
      fontWeight: 700,
      lineHeight: 1,
    },
    h3: {
      fontSize: "2rem",
      fontWeight: 700,
    },
    h4: {
      fontSize: "1.8rem",
      fontWeight: 700,
    },
    subtitle1: {
      fontSize: "2rem",
      fontWeight: 200,
      lineHeight: 1.2,
    },
    subtitle2: {
      fontSize: "1.7rem",
      fontWeight: 200,
      lineHeight: 1.2,
    },
    body1: {
      fontSize: "1.4rem",
      fontWeight: 300,
      lineHeight: 1.5,
    },
    body2: {
      fontSize: "1.2rem",
      fontWeight: 300,
      lineHeight: 1.5,
    },
    body3: {
      fontSize: "1rem",
      fontWeight: 300,
      lineHeight: 1.5,
    },
  },
});

let theme = responsiveFontSizes(baseTheme);

export default theme;
