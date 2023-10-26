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
import SocialIcons from "../../components/SocialIcons";
// import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

// import Icon from '@mui/material/Icon';

export default function HeroSection({ configData }) {
  const customH1Styles = {
    background: "-webkit-linear-gradient(120deg, #0aabad 20%, #FF930F 90%)",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    backgroundSize: "200%",
    backgroundPosition: "50% 50%",
    color: "transparent",
    margin: "0 !important",
    animation: "gradientAnimation 6s ease-in-out infinite",
    "@keyframes gradientAnimation": {
      "0%": {
        backgroundPosition: "0 50%",
      },
      "50%": {
        backgroundPosition: "100% 50%",
      },
      "100%": {
        backgroundPosition: "0 50%",
      },
    },
  };
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
        variant={configData.sectionStyle.titleVariant}
        color={configData.sectionStyle.titleColor}
        // align={}
        sx={{ maxWidth: 375, textAlign: { xs: "center", md: "left" } }}
      >
        {configData.titleText1}
      </Typography>
      <Typography
        variant={configData.sectionStyle.titleVariant}
        color={configData.sectionStyle.titleColor}
        // align={}
      >
        {configData.titleText2}
      </Typography>
      <Typography
        variant={configData.sectionStyle.titleVariant}
        color={configData.sectionStyle.titleColor}
        // align={}
        sx={customH1Styles}
        // sx={{
        //   maxWidth: 375,
        //   textAlign: { xs: "center", md: "left" },
        //   margin: "0 !important",
        // }}
      >
        {configData.titleText3}
      </Typography>
      {/* Subtitle */}
      <Typography
        variant={configData.sectionStyle.subTitleVariant}
        color={configData.sectionStyle.subTitleColor}
        align="left"
        sx={{ textAlign: { xs: "center", md: "left" } }}
      >
        {configData.subtitle}
      </Typography>
      {/* CTA */}
      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent={{ xs: "center", md: "flex-start" }}
        gap={2}
        pt={2}
        pb={4}
        sx={{ backgroundColor: "transparent" }}
      >
        {configData.buttons.map((ele, index) => (
          <Button
            key={index}
            variant={ele.variant}
            size="large"
            endIcon={<Icon>{ele.endIcon}</Icon>}
            href={ele.href}
            target="_blank"
          >
            {ele.label}
          </Button>
        ))}
      </Box>

      <Divider
        variant="middle"
        light={true}
        sx={{ height: "1px", width: "100%" }}
      />
      <SocialIcons />
    </Stack>
  );

  // contents of left sub-section
  const RightSubSectionJSX = (
    // Hero Image
    <img
      src={configData.image}
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
      sx={configData.sectionStyle}
      id={
        configData.title && configData.title.toLowerCase().replaceAll(" ", "-")
      }
    >
      <Container maxWidth="lg" sx={{ position: "relative" }}>
        {/* Left & Right Sub-section */}
        <Grid container alignItems="center">
          {/* Left Sub-section */}
          <Grid
            item
            xs={12}
            md={6}
            py={10}
            sx={{ backgroundColor: "transparent" }}
          >
            {LeftSubSectionJSX}
          </Grid>

          {/* Right Sub-section */}
          <Grid item xs={12} md={6} sx={{ backgroundColor: "transparent" }}>
            {RightSubSectionJSX}
          </Grid>
        </Grid>

        <Paper
          variant="translucent"
          sx={{
            width: { xs: "100%", md: "min(1200px, 90vw)" },
            position: { xs: "relative", md: "absolute" },
            bottom: { xs: "0", md: "-48px" },
            display: "flex",
          }}
        >
          <Grid
            container
            alignItems="center"
            justifyContent="space-between"
            // backgroundColor="red"
            // spacing={2}
            sx={{
              px: 4,
              py: 3,
              display: "flex",
            }}
          >
            {configData.translucentStripData.map((ele, index) => (
              <Grid
                key={index}
                item
                xs={12}
                sm={6}
                md={4}
                // backgroundColor={`rgba(${index * 29}, ${index * 24}, ${
                //   index * 92
                // })`}
                justifyContent="center"
                sx={{
                  py: 1,
                  display: "flex",
                }}
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
