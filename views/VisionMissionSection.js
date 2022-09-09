import { Grid, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import Section from "../components/Section";

export default function VisionMissionSection() {
  return (
    <>
      <Section
        background="url(/images/hero/Mantler_Vision_Mission.png) no-repeat left center / contain"
        title="Vision & Mission"
      >
        <Grid container>
          <Grid item xs={12} lg={4}></Grid>

          <Grid item xs={12} lg={8}>
            <Paper variant="translucent" sx={{ p: 4 }}>
              <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                  <Stack spacing={2}>
                    <img />
                    <Typography variant="h4" color="primary.main">
                      Vision
                    </Typography>
                    <Typography variant="subtitle2">
                      Build an open-source, community-driven framework for
                      inter-chain NFTs and metadata standardization by
                      contributing to interNFT standard
                    </Typography>
                  </Stack>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Stack spacing={2}>
                    <img />
                    <Typography variant="h4" color="primary.main">
                      Mission
                    </Typography>
                    <Typography variant="subtitle2">
                      Provide a platform that enables a diverse set of NFTs use
                      cases that extend beyond arts and collectibles and can
                      potentially change the representation of rights and
                      ownership of real-world assets like real estate and other
                      comodities.
                    </Typography>
                  </Stack>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Section>
    </>
  );
}
