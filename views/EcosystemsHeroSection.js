import React from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";
import Section from "../components/Section";

const configData = {
  title: "Mantle Universe",
  subTitle:
    "Experience the first NFT marketplace with blockchain based identity",
  image: "/images/hero/capture.png",
};

export default function AboutPageHeroSection() {
  return (
    <>
      <Section>
        <Grid backgroundColor="transparent" container>
          <Grid
            backgroundColor="transparent"
            item
            xs={12}
            md={4}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            {/* Left Sub-section */}

            <Stack spacing={1} maxWidth="300px">
              <Typography variant="h1" color="secondary.light">
                {configData.title}
              </Typography>
              <Typography variant="subtitle2" color="primary.main">
                {configData.subTitle}
              </Typography>
            </Stack>
          </Grid>

          <Grid
            // backgroundColor="transparent"
            item
            xs={12}
            md={8}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              // backgroundColor: "transparent",
            }}
          >
            {/* Right Sub-section */}
            <Stack
              spacing={2}
              width="100%"
              direction="column"
              sx={{
                py: 4,
                display: "flex",
                flexGrow: 1,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "transparent",
              }}
            >
              <img src={configData.image} alt="image" width="100%" />
            </Stack>
          </Grid>
        </Grid>
      </Section>
    </>
  );
}
