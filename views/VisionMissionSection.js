import { Grid, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import Section from "../components/Section";

export default function VisionMissionSection({ visionMissionSectionData }) {
  return (
    <>
      <Section
        background={visionMissionSectionData.backgroundImage}
        title={visionMissionSectionData.title}
      >
        <Grid container>
          <Grid item xs={12} lg={4}></Grid>

          <Grid item xs={12} lg={8}>
            <Paper
              variant={visionMissionSectionData.paperVariant}
              sx={{ p: 4 }}
            >
              <Grid container spacing={4}>
                {visionMissionSectionData.list.map((ele, index) => (
                  <Grid key={index} item xs={12} md={6}>
                    <Stack spacing={2}>
                      <Typography
                        variant={visionMissionSectionData.titleVariant}
                        color="primary.main"
                      >
                        {ele.title}
                      </Typography>
                      <Typography
                        variant={visionMissionSectionData.infoVariant}
                      >
                        {ele.info}
                      </Typography>
                    </Stack>
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Section>
    </>
  );
}
