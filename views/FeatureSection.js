import { Box, Card, CardMedia, Paper, Typography } from "@mui/material";
import React from "react";
import Section from "../components/Section";

export default function FeatureSection({ configData }) {
  return (
    <Section
      title={configData.title && configData.title}
      subTitle={configData.description && configData.description}
    >
      {Array.isArray(configData.featuresArray) &&
        configData.featuresArray &&
        configData.featuresArray.length > 0 && (
          <Box sx={configData.optionContainerStyles}>
            {configData.featuresArray.map((feature, index) => (
              <Paper
                variant={configData.paperVariant}
                sx={{ overflow: "hidden" }}
                key={index}
              >
                <Card sx={configData.optionStyles}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexDirection: "column",
                      gap: 2,
                      pb: 2,
                    }}
                  >
                    {feature.icon && typeof feature.icon === "string" ? (
                      <CardMedia
                        sx={{ width: "56px", aspectRatio: "1/1" }}
                        image={feature.icon}
                      />
                    ) : (
                      feature.icon
                    )}
                    {feature.title && (
                      <Typography
                        variant={feature.titleVariant}
                        color={feature.titleColor}
                      >
                        {feature.title}
                      </Typography>
                    )}
                  </Box>
                  {feature.description && (
                    <Typography
                      variant={feature.descriptionVariant}
                      color={feature.descriptionColor}
                    >
                      {feature.description}
                    </Typography>
                  )}
                </Card>
              </Paper>
            ))}
          </Box>
        )}
    </Section>
  );
}
