import React from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";
import Section from "../components/Section";

export default function CollabsHeroSection({ configData }) {
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
              <Typography
                variant={configData.titleVariant}
                color={configData.titleColor}
              >
                {configData.title}
              </Typography>
              <Typography
                variant={configData.subTitleVariant}
                color={configData.subTitleColor}
              >
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
