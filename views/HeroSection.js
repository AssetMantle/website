import ArticleIcon from "@mui/icons-material/Article";
import {
  Box,
  Button,
  Divider,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
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
  // minHeight: { xs: "100vh", xl: "0vh" },
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
      alignItems={{ xs: "center", md: "flex-start" }}
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

          endIcon={<ArticleIcon />}
          href="https://docs.assetmantle.one/"
          target="_blank"
        >
          Documentation
        </Button>
      </Box>
      {/* <Divider
        variant="fullWidth"
        orientation="horizontal"
        light={true}
        sx={{
          width: { xs: "100%", md: "80%" },
          borderColor: "primary.light",
          margin: "16px 0 !important",
        }}
      /> */}
      <SocialIcons />
    </Stack>
  );

  // contents of left sub-section
  const RightSubSectionJSX = (
    // Hero Image
    <img
      src="/images/hero/mantler.webp"
      alt="hero_image"
      style={{
        width: "95%",
        height: "auto",
      }}
    />
  );

  return (

    <Box
      component="section"
      sx={sectionStyle}
      id={
        contentSheet.title &&
        contentSheet.title.toLowerCase().replaceAll(" ", "-")
      }
    >
      <Container maxWidth="lg" sx={{ position: "relative" }}>
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

        <Paper
          variant="translucent"
          sx={{
            width: { xs: "100%", md: "min(1200px, 90vw)" },
            position: { xs: "relative", md: "absolute" },
            bottom: { xs: "0", md: "-24px" },
          }}
        >

          <Grid
            container
            alignItems="center"
            spacing={2}
            sx={{
              px: 6,
              py: 4,
              display: "flex",
            }}
          >
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              backgroundColor="transparent"
              justifyContent="center"
            >
              <Stack direction="row" alignItems="center" spacing={2}>
                <Typography variant="h3" color="primary.main">
                  35k+
                </Typography>
                <Typography
                  variant="caption"
                  textAlign="left"
                  // sx={{ fontWeight: "400", textTransform: "capitalize" }}
                >
                  COMMUNITY
                  <br />
                  MEMBERS
                </Typography>
              </Stack>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              backgroundColor="transparent"
              justifyContent="center"
            >
              <Stack direction="row" alignItems="center" spacing={2}>
                <Typography variant="h3" color="primary.main">
                  93k+
                </Typography>
                <Typography
                  variant="caption"
                  textAlign="left"
                  // sx={{ fontWeight: "400", textTransform: "capitalize" }}
                >
                  UNIQUE WALLETS
                  <br />& USERS
                </Typography>
              </Stack>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              backgroundColor="transparent"
              justifyContent="center"
            >
              <Stack direction="row" alignItems="center" spacing={2}>
                <Typography variant="h3" color="primary.main">
                  3M+
                </Typography>
                <Typography
                  variant="caption"
                  textAlign="left"
                  // sx={{ fontWeight: "400", textTransform: "capitalize" }}
                >
                  TRANSACTIONS
                  <br />
                  ON-CHAIN
                </Typography>
              </Stack>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
}
