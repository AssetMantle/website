import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const baseTheme = createTheme({
  palette: {
    mode: "dark",
    navBg: "#040404cc",
    primary: {
      light: "#FFFDFA",
      main: "#FFC640",
      dark: "#FFD365",
    },
    secondary: {
      light: "#FFFFFF",
      main: "#ffffe6",
      dark: "#ffffcc",
    },
    background: {
      // paper: "#FFD365",
      default: "#111111",
    },
  },
  typography: {
    fontSize: 14,
    h1: {
      fontFamily: "'Futura'",
      fontSize: "4rem",
      fontWeight: 700,
    },
    h2: {
      fontFamily: "'Futura'",
      fontSize: "3.5rem",
      fontWeight: 700,
      lineHeight: 1,
    },
    h3: {
      fontFamily: "'Lato'",
      fontSize: "2rem",
      fontWeight: 700,
    },
    h4: {
      fontFamily: "'Lato'",
      fontSize: "1.8rem",
      fontWeight: 700,
    },
    subtitle1: {
      fontFamily: "'Lato'",
      fontSize: "2rem",
      fontWeight: 200,
      lineHeight: 1.2,
    },
    subtitle2: {
      fontFamily: "'Lato'",
      fontSize: "1.7rem",
      fontWeight: 200,
      lineHeight: 1.2,
    },
    body1: {
      fontFamily: "'Lato'",
      fontSize: "1.4rem",
      fontWeight: 300,
      lineHeight: 1.5,
    },
    body2: {
      fontFamily: "'Lato'",
      fontSize: "1.2rem",
      fontWeight: 300,
      lineHeight: 1.5,
    },
    caption: {
      fontFamily: "'Lato'",
      fontSize: "1rem",
      fontWeight: 300,
      lineHeight: 1,
    },
  },
  components: {
    MuiPaper: {
      defaultProps: {
        elevation: 12,
      },
      variants: [
        {
          props: { variant: "translucent" },
          style: {
            background:
              // "linear-gradient(157.26deg, rgba(217, 217, 217, 0.06) -5.39%, rgba(217, 217, 217, 0.08) 108.05%)",
              // "linear-gradient(157.26deg, rgba(217, 217, 217, 0.24) -5.39%, rgba(217, 217, 217, 0.12) 108.05%)",
              "rgba(255,255,255,0.1)",
            backdropFilter: "blur(30px)",
            borderRadius: "16px",
          },
        },
        {
          props: { variant: "transparent" },
          style: {
            background: "transparent",
            borderRadius: "16px",
          },
        },
      ],
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "32px",
          fontWeight: "bold",
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        root: {
          ".MuiMenu-paper": {
            background: "transparent",
            borderRadius: "16px",
          },
        },
      },
    },
  },
});

let theme = responsiveFontSizes(baseTheme);

export default theme;
