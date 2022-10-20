import { Box, Grid, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import Section from "../components/Section";

export default function TokenDistribution({ tokenDistributionData }) {
  // console.log(tokenDistributionData);
  return (
    <Section
      title={tokenDistributionData.title}
      subTitle={tokenDistributionData.description}
    >
      <Box
        sx={{
          width: "100%",
          overflow: "auto",
          scrollbarWidth: "none",
        }}
      >
        <img
          src={tokenDistributionData.chart}
          alt={tokenDistributionData.chartName}
        />
      </Box>
      <Paper variant={tokenDistributionData.paperVariant}>
        <Grid container spacing={3} sx={{ alignItems: "center", p: 3 }}>
          <Grid item xs={12} sm={6} md={3}>
            <Stack direction="row" gap={2} alignItems="center">
              <Typography
                variant={tokenDistributionData.numberVariant}
                color={tokenDistributionData.numberColor}
              >
                {tokenDistributionData.overview.genesis.number}
              </Typography>
              <Typography
                variant={tokenDistributionData.titleVariant}
                lineHeight="100%"
              >
                {tokenDistributionData.overview.genesis.title}
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Stack direction="row" gap={2} alignItems="center">
              <Typography
                variant={tokenDistributionData.numberVariant}
                color={tokenDistributionData.numberColor}
              >
                {tokenDistributionData.overview.circular.number}
              </Typography>
              <Typography
                variant={tokenDistributionData.titleVariant}
                lineHeight="100%"
              >
                {tokenDistributionData.overview.circular.title}
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} md={5}>
            <Typography
              variant="body2"
              textAlign={{ xs: "center", md: "left" }}
            >
              {tokenDistributionData.overview.description}
            </Typography>
          </Grid>
        </Grid>
      </Paper>
      <Grid container spacing={{ xs: 0, sm: 3 }}>
        {tokenDistributionData.pies &&
          Array.isArray(tokenDistributionData.pies) &&
          tokenDistributionData.pies.length > 0 &&
          React.Children.toArray(
            tokenDistributionData.pies.map((pie) => (
              <Grid item xs={12} md={6}>
                <img
                  src={pie.chart}
                  alt={pie.name}
                  style={{ width: "100%", height: "auto" }}
                />
              </Grid>
            ))
          )}
      </Grid>
    </Section>
  );
}
