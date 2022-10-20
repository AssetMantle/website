import { Container, Stack } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Section from "../components/Section";
import TitleAndSubtitle from "../components/TitleAndSubtitle";

export default function CollabsHeroSection({ configData }) {
  return (
    <Container
      maxWidth="lg"
      sx={{
        textAlign: "center",
        my: 4,
        py: 2,
        backgroundColor: "transparent",
      }}
    >
      <Stack spacing={4}>
        <TitleAndSubtitle
          title={configData.title}
          subTitle={configData.subTitle}
        />
        <Box>
          <img src={configData.image} alt="image" width="100%" />
        </Box>
      </Stack>
    </Container>
  );
}
