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
      paper: "#111111",
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
      fontSize: "3rem",
      fontWeight: 700,
    },
    h3: {
      fontSize: "3rem",
      fontWeight: 500,
    },
    subtitle1: {
      fontSize: "2rem",
      fontWeight: 200,
      lineHeight: 1.2,
    },
  },
});

let theme = responsiveFontSizes(baseTheme);

export default theme;
