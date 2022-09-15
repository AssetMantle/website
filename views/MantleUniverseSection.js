import React from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";
import Section from "../components/Section";

export default function EcosystemsHeroSection() {
  return (
    <>
      {" "}
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
              // backgroundColor: "transparent",
            }}
          >
            {/* Left Sub-section */}

            <Stack spacing={1} maxWidth="300px">
              <Typography variant="h1" color="primary">
                Mantle Universe
              </Typography>
              <Typography color="white">
                Experience the first NFT marketplace with blockchain based
                identity
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
              <img src="/images/hero/capture.png" alt="image" width="100%" />
            </Stack>
          </Grid>
        </Grid>
      </Section>
    </>
  );
}
