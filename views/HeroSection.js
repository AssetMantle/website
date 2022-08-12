import ArticleIcon from "@mui/icons-material/Article";
import { Box, Button, Divider, Grid, Stack, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import SocialIcons from "../components/SocialIcons";

// import Icon from '@mui/material/Icon';

const sectionStyle = {
  pt: 4,
  mt: 2,
  pb: 4,
  mb: 4,
  color: "primary.light",
  textAlign: { xs: "center", sm: "center", md: "center" },
  minWidth: { xs: "100vh", xl: "none" },
  // backgroundColor: "orange",
};

const contentSheet = {
  title: "Redefining Digital Asset Ownership",
  subtitle:
    "Experience the first NFT marketplace with blockchain-based identity",
};

export default function HeroSection() {
  // contents of right sub-section
  const LeftSubSectionJSX = (
    <Stack
      direction="column"
      // justifyContent="center"
      alignItems={{ xs: "center", md: "left" }}
      spacing={2}
    >
      {/* Title */}
      <Typography
        variant="h1"
        color="secondary.main"
        // align={}
        sx={{ maxWidth: 375, textAlign: { xs: "center", md: "left" } }}
      >
        {contentSheet.title}
      </Typography>
      {/* Subtitle */}
      <Typography
        variant="subtitle1"
        color="primary.main"
        align="left"
        sx={{ maxWidth: 375, textAlign: { xs: "center", md: "left" } }}
      >
        {contentSheet.subtitle}
      </Typography>
      {/* CTA */}
      <Box
        display="flex"
        alignItems="left"
        pt={2}
        pb={4}
        sx={{ backgroundColor: "transparent" }}
      >
        <Button
          variant="contained"
          size="large"
          sx={{
            borderRadius: 8,
          }}
          endIcon={<ArticleIcon />}
        >
          Documentation
        </Button>
      </Box>
      <Divider variant="inset" orientation="horizontal" light />
      <SocialIcons />
    </Stack>
  );

  // contents of left sub-section
  const RightSubSectionJSX = (
    // Hero Image
    <img
      src="/images/mantler.webp"
      alt="hero_image"
      style={{
        height: "700px",
        width: "auto",
      }}
    />
  );

  return (
    <Box component="section" sx={sectionStyle}>
      <Container maxWidth="lg">
        {/* Left & Right Sub-section */}
        <Grid container alignItems="center">
          {/* Left Sub-section */}
          <Grid
            item
            xs={12}
            md={5}
            py={10}
            sx={{ backgroundColor: "transparent" }}
          >
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
