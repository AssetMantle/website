import ArticleIcon from "@mui/icons-material/Article";
import {
  Box,
  Button,
  Divider,
  Grid,
  Icon,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import SocialIcons from "../components/SocialIcons";
// import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

// import Icon from '@mui/material/Icon';

export default function HeroSection({ heroSectionConfigData, sectionStyle }) {
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
        variant={sectionStyle.titleVariant}
        color={sectionStyle.titleColor}
        // align={}
        sx={{ maxWidth: 375, textAlign: { xs: "center", md: "left" } }}
      >
        {heroSectionConfigData.title}
      </Typography>
      {/* Subtitle */}
      <Typography
        variant={sectionStyle.subTitleVariant}
        color={sectionStyle.subTitleColor}
        align="left"
        sx={{ maxWidth: 375, textAlign: { xs: "center", md: "left" } }}
      >
        {heroSectionConfigData.subtitle}
      </Typography>
      {/* CTA */}
      <Grid container pt={2} pb={4} sx={{ backgroundColor: "transparent" }}>
        {heroSectionConfigData.buttons.map((ele, index) => (
          <Grid key={index} item xs={12} md={6}>
            <Button
              variant={ele.variant}
              size="large"
              endIcon={<Icon>{ele.endIcon}</Icon>}
              href={ele.href}
              target="_blank"
            >
              {ele.label}
            </Button>
          </Grid>
        ))}
      </Grid>

      <SocialIcons />
    </Stack>
  );

  // contents of left sub-section
  const RightSubSectionJSX = (
    // Hero Image
    <img
      src={heroSectionConfigData.image}
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
        heroSectionConfigData.title &&
        heroSectionConfigData.title.toLowerCase().replaceAll(" ", "-")
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
            {heroSectionConfigData.translucentStripData.map((ele, index) => (
              <Grid
                key={index}
                item
                xs={12}
                sm={6}
                md={4}
                backgroundColor="transparent"
                justifyContent="center"
              >
                <Stack
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  spacing={2}
                >
                  <Typography variant="h3" color="primary.main">
                    {ele.amount}
                  </Typography>
                  <Typography
                    variant="caption"
                    textAlign="left"
                    // sx={{ fontWeight: "400", textTransform: "capitalize" }}
                  >
                    {ele.top}
                    <br />
                    {ele.bottom}
                  </Typography>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
}
