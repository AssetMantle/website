import { Box, CardMedia, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";

const FeatureConfigData = {
  textAlign: "center",
  title: "Get mixin'",
  titleComponent: "",
  titleVariant: "h1",
  description: "",
  descriptionStyle: "", // array of styles
  features: [
    {
      href: "",
      icon: "https://uploads-ssl.webflow.com/623a0c9828949e55356286f9/623b5936a09ba064d3f5c894_Microscope.svg",
      title: "Analyze",
      description:
        "Science begins with observation. Dig into charts and data on assets, liquidity.",
    },
    {
      href: "",
      icon: "https://uploads-ssl.webflow.com/623a0c9828949e55356286f9/623b5b5e05aa442fc4394245_Govern%20icon.svg",
      title: "Govern",
      description:
        "We all steer the ship together. Explore proposals and discuss upcoming experiments.",
    },
    {
      href: "",
      icon: "https://uploads-ssl.webflow.com/623a0c9828949e55356286f9/623b5bc8b3d885802355c0c1_Build%20icon.svg",
      title: "Build",
      description:
        "Roll up your sleeves. Build interchain-native apps and smart contracts.",
    },
  ],
};

const sectionStyle = {
  my: 10,
  paddingTop: "7px",
  color: "primary.light",
  textAlign: { xs: "center", sm: "center", md: "left" },
};

const optionContainerStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: { xs: "center", sm: "center", md: "space-around" },
  flexWrap: { xs: "wrap", md: "nowrap" },
  gap: "28px",
  mt: 4,
};
const optionStyles = {
  width: "min(360px,100%)",
  height: "100%",
  backgroundColor: "secondary.dark",
  borderRadius: "25px",
  textAlign: "left",
  padding: "28px 30px 39px",
  transition: "all 0.3s ease-in-out",
  "&:hover": {
    backgroundColor: "navBg",
  },
};

export default function FeatureSection() {
  return (
    <Box component="section" sx={sectionStyle}>
      <Container
        maxWidth="lg"
        sx={{
          textAlign: FeatureConfigData.textAlign
            ? FeatureConfigData.textAlign
            : "left",
        }}
      >
        {FeatureConfigData.title && (
          <Typography
            component={
              FeatureConfigData.titleComponent
                ? FeatureConfigData.titleComponent
                : "h2"
            }
            variant={
              FeatureConfigData.titleVariant
                ? FeatureConfigData.titleVariant
                : "h2"
            }
            color="inherit"
            sx={{
              pb: 2,
            }}
          >
            {FeatureConfigData.title}
          </Typography>
        )}
        {FeatureConfigData.description && (
          <Typography
            component="p"
            variant="subtitle1"
            color="inherit"
            sx={
              FeatureConfigData.descriptionStyle
                ? FeatureConfigData.descriptionStyle
                : {
                    pb: 2,
                  }
            }
          >
            {FeatureConfigData.description}
          </Typography>
        )}
        {FeatureConfigData.features && FeatureConfigData.features.length > 0 && (
          <Box sx={optionContainerStyles}>
            {FeatureConfigData.features.map((feature, index) => (
              <Box sx={optionStyles} key={index}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "flex-end",
                    gap: 2,
                    pb: 3,
                  }}
                >
                  {feature.icon && (
                    <CardMedia
                      sx={{ width: 32, aspectRatio: "1/1" }}
                      image={feature.icon}
                    />
                  )}
                  {feature.title && (
                    <Typography component="h3" variant="h3" color="inherit">
                      {feature.title}
                    </Typography>
                  )}
                </Box>
                {feature.description && (
                  <Typography component="p" variant="body1" color="inherit">
                    {feature.description}
                  </Typography>
                )}
              </Box>
            ))}
          </Box>
        )}
      </Container>
    </Box>
  );
}
