import { Box, Card, CardMedia, Paper, Typography } from "@mui/material";
import React from "react";
import Section from "../components/Section";

const optionContainerStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexWrap: "wrap",
  gap: "14px",
  mt: 5,
};
const optionStyles = {
  background: "transparent",
  maxWidth: 374,
  boxShadow: "none",
  padding: "16px 22px",
  minHeight: "296px",
  transition: "all 0.3s ease-in-out",
  color: "primary.light",
  "&:hover": {
    backgroundColor: "navBg",
  },
};

export default function FeatureSection({
  featureSectionConfigData,
  optionContainerStyles,
  optionStyles,
}) {
  return (
    <Section
      title={featureSectionConfigData.title && featureSectionConfigData.title}
      subTitle={
        featureSectionConfigData.description &&
        featureSectionConfigData.description
      }
    >
      {Array.isArray(featureSectionConfigData.featuresArray) &&
        featureSectionConfigData.featuresArray &&
        featureSectionConfigData.featuresArray.length > 0 && (
          <Box sx={optionContainerStyles}>
            {featureSectionConfigData.featuresArray.map((feature, index) => (
              <Paper
                variant={featureSectionConfigData.paperVariant}
                sx={{ overflow: "hidden" }}
                key={index}
              >
                <Card sx={optionStyles}>
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
