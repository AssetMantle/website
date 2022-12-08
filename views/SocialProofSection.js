import { Box, Card, CardMedia } from "@mui/material";
import React from "react";
import Section from "../components/Section";

export default function SocialProofSection({
  socialProofConfigData,
  optionContainerStyles,
}) {
  return (
    <Section
      title={socialProofConfigData.title}
      subTitle={socialProofConfigData.description}
    >
      {Array.isArray(socialProofConfigData.features) &&
        socialProofConfigData.features &&
        socialProofConfigData.features.length > 0 && (
          <Box sx={optionContainerStyles}>
            {socialProofConfigData.features.map((feature, index) => (
              <Card
                sx={{
                  width: "min(208px,100%)",
                  padding: 3,
                  backgroundColor: "transparent",
                  height: "100%",
                  display: "flex",
                  boxShadow: "none",
                  transition: "all 300ms ease-in-out",
                  backgroundImage: "none",
                  filter: "contrast(0%)",
                  "&:hover": {
                    transform: "scale(1.2)",
                    filter: "contrast(100%)",
                  },
                }}
                key={index}
                component="a"
                href={feature.link && feature.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <CardMedia
                  component="img"
                  alt={feature.title && feature.title}
                  image={feature.image && feature.image}
                  sx={{ border: "none", width: "100%", height: "auto" }}
                />
              </Card>
            ))}
          </Box>
        )}
    </Section>
  );
}
