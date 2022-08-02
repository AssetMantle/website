import { Typography, useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import * as React from "react";

const sectionStyles = {
  display: "flex",
  height: "min(950px, 100vh)",
  backgroundImage:
    "linear-gradient(180deg, rgba(17, 17, 17, 0) 80%, #111111 97.82%), url(/static/hero-bg.svg)",
  backgroundRepeat: "no-repeat",
  backgroundSize: "100%, cover",
  backgroundPosition: "bottom left, top left",
  margin: "0 auto",
  textAlign: { xs: "center", sm: "center", md: "left" },
};

const containerStyles = {
  display: "flex",
  width: "100%",
  margin: "auto",
  mr: 0,
  background:
    "linear-gradient(270.23deg, #111111 51.94%, rgba(17, 17, 17, 0) 98.63%)",
  width: "min(947px, 100%)",
};

const contentStyles = {
  margin: "auto",
  color: "primary.light",
  padding: "28px 24px 27px 47px",
  width: "min(calc(768px + 24px + 47px), 100%)",
  "@media (max-width:900px)": {
    padding: "28px 24px 27px",
  },
};

function HeroSection() {
  const theme = useTheme();
  // console.log("theme: ", theme);
  return (
    <Box component="section" sx={sectionStyles} maxWidth="xl">
      <Box sx={containerStyles}>
        <Box sx={contentStyles}>
          <Typography
            color="inherit"
            variant="h1"
            component="h1"
            sx={{
              pb: 1,
              backgroundImage: "url(/static/line.svg)",
              backgroundPosition: "bottom left",
              backgroundRepeat: "no-repeat",
              width: "min(762px,100%)",
            }}
          >
            Interchain NFTs + Metadata
          </Typography>
          <Typography
            variant="subtitle1"
            component="p"
            sx={{
              paddingTop: "11px",
              textTransform: "uppercase",
              fontWeight: "200",
            }}
          >
            New open standards for tokenising resources within <br />
            <Typography component="strong">
              the Internet of Blockchains
            </Typography>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default HeroSection;
