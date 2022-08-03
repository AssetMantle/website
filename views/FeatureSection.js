import React from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const FeatureConfigData = {
  textAlign: "center",
  title: "",
  titleComponent: "",
  titleVariant: "",
  description: "",
  descriptionStyle: "", // array of styles
  features: [
    {
      image: "",
      height: "",
      title: "",
      description: "",
      buttons: [
        {
          text: "",
          url: "",
        },
      ],
    },
    {
      image: "",
      height: "",
      title: "",
      description: "",
      buttons: [
        {
          text: "",
          url: "",
        },
      ],
    },
    {
      image: "",
      height: "",
      title: "",
      description: "",
      buttons: [
        {
          text: "",
          url: "",
        },
      ],
    },
    {
      image: "",
      height: "",
      title: "",
      description: "",
      buttons: [
        {
          text: "",
          url: "",
        },
      ],
    },
  ],
};

const sectionStyle = {
  mt: 13,
  paddingTop: "7px",
  color: "primary.light",
  textAlign: { xs: "center", sm: "center", md: "left" },
};

const optionContainerStyles = {
  display: "flex",
  justifyContent: { sm: "center", md: "space-between" },
  flexWrap: "wrap",
  gap: "30px",
  pt: 4,
};
const optionStyles = {
  borderRadius: "6px",
  backgroundColor: "transparent",
  maxWidth: 262,
  boxShadow: "none",
  textAlign: { xs: "center", md: "left" },
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
        {FeatureConfigData.features.length !== 0 && (
          <Box sx={optionContainerStyles}>
            {FeatureConfigData.features.map((feature, index) => (
              <Card sx={optionStyles}>
                <CardMedia
                  key={index}
                  component="img"
                  alt={feature.title}
                  height={feature.height ? feature.height : 420}
                  image={feature.image}
                  sx={{ border: "none" }}
                />
                <CardContent>
                  {feature.title && (
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      color="primary.light"
                    >
                      {feature.title}
                    </Typography>
                  )}
                  {feature.description && (
                    <Typography variant="body2" color="primary.light">
                      {feature.description}
                    </Typography>
                  )}
                </CardContent>
                {feature.buttons.length !== 0 && (
                  <CardActions>
                    {feature.buttons.map((button, index) => (
                      <Button
                        component="a"
                        href={button.url && button.url}
                        key={index}
                        size="small"
                      >
                        {button.text && (
                          <>
                            {button.text} <KeyboardArrowRightIcon />
                          </>
                        )}
                      </Button>
                    ))}
                  </CardActions>
                )}
              </Card>
            ))}
          </Box>
        )}
      </Container>
    </Box>
  );
}
