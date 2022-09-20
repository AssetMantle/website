import React from "react";
import { Box } from "@mui/system";
import Section from "../components/Section";

export default function CollabsHeroSection({ configData }) {
  return (
    <>
      <Section
        title="The Mantle Universe"
        subTitle="Apart from the AssetMantle ecosystem, there is an extended ecosystem called MantleLabs that commits to community driven product & service creation"
      >
        <Box>
          <img src={configData.image} alt="image" width="100%" />
        </Box>
      </Section>
    </>
  );
}
