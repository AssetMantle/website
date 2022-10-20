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

                  backgroundImage: "none",
                  "&:hover": {
                    boxShadow: "0px 0px 4px 4px rgba(0,0,0,0.2)",
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
