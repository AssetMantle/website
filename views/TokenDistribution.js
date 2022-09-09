import { Box, Grid, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import Section from "../components/Section";

const TokenDistributionConfig = {
  title: "$MNTL TOKEN DISTRIBUTION",
  description: "",
  chart: "/images/tokenDistribution/releaseSchedule.svg",
  chartName: "Release Schedule",
  overview: {
    genesis: {
      title: "Total Genesis Supply",
      number: "300M",
    },
    circular: {
      title: "Total Circulating Supply",
      number: "78M",
    },
    description:
      "At genesis, 26% (78 million $MNTL) of the supply will be circulating to bootstrap liquidity and incentivize the early adopters of the platform.",
  },
  pies: [
    {
      chart: "/images/tokenDistribution/genesisSupply.svg",
      name: "Genesis Supply",
    },
    {
      chart: "/images/tokenDistribution/circulatingSupply.svg",
      name: "Circulating Supply",
    },
  ],
};

export default function TokenDistribution() {
  return (
    <Section
      title={TokenDistributionConfig.title}
      subTitle={TokenDistributionConfig.description}
    >
      <Box
        sx={{
          width: "100%",
          overflow: "auto",
          scrollbarWidth: "none",
        }}
      >
        <img
          src={TokenDistributionConfig.chart}
          alt={TokenDistributionConfig.chartName}
        />
      </Box>
      <Paper variant="translucent">
        <Grid container spacing={3} sx={{ alignItems: "center", p: 3 }}>
          <Grid item xs={12} sm={6} md={3}>
            <Stack direction="row" gap={2} alignItems="center">
              <Typography variant="h3" color="primary.main">
                {TokenDistributionConfig.overview.genesis.number}
              </Typography>
              <Typography variant="body1" lineHeight="100%">
                {TokenDistributionConfig.overview.genesis.title}
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Stack direction="row" gap={2} alignItems="center">
              <Typography variant="h3" color="primary.main">
                {TokenDistributionConfig.overview.circular.number}
              </Typography>
              <Typography variant="body1" lineHeight="100%">
                {TokenDistributionConfig.overview.circular.title}
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} md={5}>
            <Typography variant="body2">
              {TokenDistributionConfig.overview.description}
            </Typography>
          </Grid>
        </Grid>
      </Paper>
      <Grid container spacing={3}>
        {TokenDistributionConfig.pies &&
          Array.isArray(TokenDistributionConfig.pies) &&
          TokenDistributionConfig.pies.length > 0 &&
          React.Children.toArray(
            TokenDistributionConfig.pies.map((pie) => (
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
