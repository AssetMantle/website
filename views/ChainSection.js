import AssignmentIcon from "@mui/icons-material/Assignment";
import { Box, Grid, Stack, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { Container } from "@mui/system";
import React from "react";

// import Icon from '@mui/material/Icon';

const sectionStyle = {
  py: 4,
  mb: 4,
  color: "primary.light",
  textAlign: { xs: "center", sm: "center", md: "center" },
  backgroundColor: "pink",
};

export default function ChainSection() {
  const LinksJSX = (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={2}
    >
      <AssignmentIcon fontSize="large" />
      <Typography variant="h2" color="primary">
        $MNTL
      </Typography>
    </Stack>
  );

  const TokenTickerJSX = (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={2}
    >
      <AssignmentIcon fontSize="large" />
      <Typography variant="h1" color="primary">
        $MNTL
      </Typography>
    </Stack>
  );

  // contents of left sub-section
  const LeftSubSectionJSX = (
    // Stack with Icons Grid & Chain Description
    <Stack
      direction="column"
      // justifyContent="center"
      alignItems="center"
      spacing={2}
      sx={{
        backgroundColor: "green",
      }}
    >
      {/* Icon Grid */}
      <Grid
        container
        // spacing={2}
        sx={{
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "green",
        }}
      >
        {/* Icons */}
        <Grid
          item
          xs={6}
          md={6}
          sx={{ backgroundColor: "rgba(0, 127, 127, 0.8)" }}
        >
          <Avatar variant="rounded" sx={{ width: "86", height: "56" }}>
            <AssignmentIcon />
          </Avatar>
        </Grid>
        <Grid
          item
          xs={6}
          md={6}
          sx={{ backgroundColor: "rgba(0, 127, 127, 0.8)" }}
        >
          <Avatar variant="rounded" sx={{ width: "86", height: "56" }}>
            <AssignmentIcon />
          </Avatar>
        </Grid>
        <Grid
          item
          xs={6}
          md={6}
          sx={{ backgroundColor: "rgba(0, 127, 127, 0.8)" }}
        >
          <Avatar variant="rounded" sx={{ width: "86", height: "56" }}>
            <AssignmentIcon />
          </Avatar>
        </Grid>
        <Grid
          item
          xs={6}
          md={6}
          sx={{ backgroundColor: "rgba(0, 127, 127, 0.8)" }}
        >
          <Avatar variant="rounded" sx={{ width: "86", height: "56" }}>
            <AssignmentIcon />
          </Avatar>
        </Grid>
      </Grid>

      {/* Chain Description */}
      <Typography
        variant="body1"
        color="primary"
        align="center"
        sx={{ maxWidth: 300, backgroundColor: "yellowgreen" }}
      >
        Part of rich Cosmos Ecosystem
      </Typography>
    </Stack>
  );

  // contents of right sub-section
  const RightSubSectionJSX = (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={2}
    >
      {/* Token Icon & Ticker */}
      {TokenTickerJSX}

      {/* Token Description */}
      <Typography
        variant="body1"
        color="primary"
        align="center"
        sx={{ maxWidth: 300 }}
      >
        The native token which powers the AssetMantle’s NFT Economy
      </Typography>

      {/* Links */}
      {LinksJSX}
    </Stack>
  );

  return (
    <Box component="section" sx={sectionStyle}>
      <Container maxWidth="lg" disableGutters>
        {/* Stack with Title & Section Contents */}
        <Stack
          direction="column"
          // justifyContent="center"
          // alignItems="center"
          spacing={4}
          sx={{ backgroundColor: "orange" }}
        >
          {/* Title */}
          <Typography
            variant="h1"
            color="primary"
            sx={{ backgroundColor: "blue" }}
          >
            The AssetMantle Chain
          </Typography>

          {/* Section Contents */}
          <Grid container>
            {/* Left Sub-section */}
            <Grid
              item
              xs={12}
              md={6}
              sm={6}
              lg={6}
              xl={6}
              sx={{ backgroundColor: "aliceblue" }}
            >
              {LeftSubSectionJSX}
            </Grid>

            {/* Right Sub-section */}
            <Grid
              item
              xs={12}
              md={6}
              sm={6}
              lg={6}
              xl={6}
              sx={{ backgroundColor: "red" }}
            >
              {RightSubSectionJSX}
            </Grid>
          </Grid>
        </Stack>
      </Container>
    </Box>
  );
}
