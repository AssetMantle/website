import { createTheme } from "@mui/material/styles";
import { green, grey, red } from "@mui/material/colors";

const rawTheme = createTheme({
  palette: {
    navBg: "#040404cc",
    gradientDark:
      "linear-gradient(270.23deg, #111111 51.94%, rgba(17, 17, 17, 0) 98.63%)",
    primary: {
      light: "#FFFDFA",
      main: "#FFD365",
      dark: "#111111",
    },
    secondary: {
      light: "#171616",
      main: "#040404",
      dark: "#21211E",
    },
    warning: {
      main: "#F2AF13",
      dark: "#ffb25e",
    },
    error: {
      light: red[50],
      main: red.A400,
      dark: red[700],
    },
    success: {
      light: green[50],
      main: green[500],
      dark: green[700],
    },
  },
  typography: {
    fontFamily: "'Lato', sans-serif",
    fontSize: 14,
    fontWeightLight: 300, // Work Sans
    fontWeightRegular: 400, // Work Sans
    fontWeightMedium: 700, // Roboto Condensed
  },
});

const fontHeader = {
  color: rawTheme.palette.text.primary,
  fontWeight: rawTheme.typography.fontWeightMedium,
  fontFamily: "'Montserrat', sans-serif",
  textTransform: "uppercase",
};

const theme = {
  ...rawTheme,
  palette: {
    ...rawTheme.palette,
    background: {
      ...rawTheme.palette.background,
      default: rawTheme.palette.common.white,
      placeholder: grey[200],
    },
  },
  typography: {
    ...rawTheme.typography,
    fontHeader,
    h1: {
      ...rawTheme.typography.h1,
      ...fontHeader,
      fontSize: { xs: 40, md: 56 },
      lineHeight: "114%",
      letterSpacing: 0,
      fontWeight: 700,
    },
    h2: {
      ...rawTheme.typography.h2,
      ...fontHeader,
      fontSize: 28,
    },
    h3: {
      ...rawTheme.typography.h3,
      ...fontHeader,
      fontSize: 24,
    },
    h4: {
      ...rawTheme.typography.h4,
      ...fontHeader,
      fontSize: 24,
      fontWeight: 700,
    },
    h5: {
      ...rawTheme.typography.h5,
      fontSize: 20,
      fontWeight: rawTheme.typography.fontWeightLight,
    },
    h6: {
      ...rawTheme.typography.h6,
      ...fontHeader,
      fontSize: 16,
    },
    subtitle1: {
      ...rawTheme.typography.subtitle1,
      fontSize: 20,
    },
    body1: {
      ...rawTheme.typography.body2,
      fontWeight: rawTheme.typography.fontWeightRegular,
      fontSize: 24,
    },
    body2: {
      ...rawTheme.typography.body1,
      fontSize: 16,
    },
    body3: {
      ...rawTheme.typography.body1,
      fontSize: 14,
    },
    body4: {
      ...rawTheme.typography.body1,
      fontSize: 12,
    },
    button: {
      ...rawTheme.typography.body1,
      fontSize: 20,
      fontWeight: 600,
    },
  },
};

export default theme;
