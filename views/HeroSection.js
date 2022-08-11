import AssignmentIcon from "@mui/icons-material/Assignment";
import { Box, Grid, Stack, Typography } from "@mui/material";
import { Container } from "@mui/system";
import Image from "next/image";
import React from "react";
// import mantler from "../public/static/heroSection/mantler.png";

// import Icon from '@mui/material/Icon';

const sectionStyle = {
  pt: 4,
  mt: 2,
  pb: 4,
  mb: 4,
  color: "primary.light",
  textAlign: { xs: "center", sm: "center", md: "center" },
  minWidth: "100vh",
  // backgroundColor: "orange",
};

const contentSheet = {
  title: "Redefining Digital Asset Ownership",
  subtitle:
    "Experience the first NFT marketplace with blockchain-based identity",
};

export default function HeroSection() {
  const LinksJSX = (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={2}
    >
      <AssignmentIcon fontSize="large" />
      <Typography variant="h2" color="primary">
        $MNTL
      </Typography>
    </Stack>
  );

  const TokenTickerJSX = (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={2}
    >
      <AssignmentIcon fontSize="large" />
      <Typography variant="h1" color="primary">
        $MNTL
      </Typography>
    </Stack>
  );

  // contents of right sub-section
  const LeftSubSectionJSX = (
    <Stack
      direction="column"
      // justifyContent="center"
      alignItems="left"
      spacing={2}
    >
      {/* Title */}
      <Typography
        variant="h1"
        color="primary"
        align="left"
        sx={{ maxWidth: 400 }}
      >
        {contentSheet.title}
      </Typography>

      {/* Subtitle */}
      <Typography
        variant="body1"
        color="primary"
        align="left"
        sx={{ maxWidth: 400 }}
      >
        {contentSheet.subtitle}
      </Typography>

      {/* Links */}
      {LinksJSX}
    </Stack>
  );

  // contents of left sub-section
  const RightSubSectionJSX = (
    // Hero Image
    <img
      src="/images/mantler.webp"
      alt="hero_image"
      style={{
        width: "300px",
        height: "auto",
      }}
      // layout="intrinsic"
      // width="300px"
      // height=""
    />
  );

  return (
    <Box component="section" sx={sectionStyle}>
      <Container maxWidth="lg">
        {/* Left & Right Sub-section */}
        <Grid container alignItems="center">
          {/* Left Sub-section */}
          <Grid item xs={12} md={5}>
            {LeftSubSectionJSX}
          </Grid>

          {/* Right Sub-section */}
          <Grid item xs={12} md={7} sx={{ backgroundColor: "transparent" }}>
            {RightSubSectionJSX}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
