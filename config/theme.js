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
    fontFamily: "'Inter', 'Roboto'",
    fontSize: 16,
    h1: {
      fontSize: "7rem",
      lineHeight: 1.1,
      fontWeight: 800,
      letterSpacing: "-6%",
      textTransform: "capitalize",
    },
    h2: {
      fontSize: "3.75rem",
      fontWeight: 800,
      letterSpacing: "-2.4px",
      textTransform: "capitalize",
      lineHeight: 1,
    },
    h3: {
      fontSize: "2.75rem",
      lineHeight: 1.27,
      fontWeight: 700,
      letterSpacing: "-2.2%",
      textTransform: "capitalize",
    },
    h4: {
      fontSize: "2rem",
      lineHeight: 1.31,
      fontWeight: 700,
      letterSpacing: "-0.672px",
      textTransform: "capitalize",
    },
    h5: {
      fontSize: "1.5rem",
      lineHeight: 1.31,
      fontWeight: 700,
      letterSpacing: "-0.456px",
      textTransform: "capitalize",
    },
    h6: {
      fontSize: "1.125rem",
      lineHeight: 1.31,
      fontWeight: 700,
      letterSpacing: "-0.252px",
      textTransform: "capitalize",
    },
    subtitle1: {
      fontSize: "1.75rem",
      fontWeight: 200,
      lineHeight: 1.42,
      letterSpacing: "-0.56px",
    },
    subtitle2: {
      fontSize: "1.375rem",
      fontWeight: 200,
      lineHeight: 1.2,
      letterSpacing: "-1.8%",
    },
    body1: {
      fontSize: "1.125rem",
      fontWeight: 600,
      lineHeight: 1.38,
      letterSpacing: "-0.252px",
    },
    body2: {
      fontSize: "1rem",
      fontWeight: 400,
      lineHeight: 1.375,
    },
    caption: {
      fontSize: "0.75rem",
      fontWeight: 400,
      lineHeight: 1.42,
    },
    button: {
      fontSize: "1.25rem !important",
      lineHeight: 1,
      letterSpacing: "-1.7%",
      fontWeight: 600,
    },
    overline: {
      fontSize: "0.75rem",
      fontWeight: 400,
      lineHeight: 1.5,
      letterSpacing: "4%",
    },
  },
  components: {
    MuiPaper: {
      defaultProps: {
        elevation: 12,
      },
      styleOverrides: {
        root: {
          boxShadow: "none",
          transition: "opacity 10ms ease-in-out !important",
        },
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
          textTransform: "unset",
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
