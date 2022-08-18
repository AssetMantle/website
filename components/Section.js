import { Box, Stack, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";

const Section = (props) => {
  const {
    title = null,
    subTitle = null,
    backgroundImage = "none",
    backgroundColor = "transparent",
    children,
  } = props;

  console.log("props: ", props);

  const sectionStyle = {
    my: 10,
    py: 4,
    textAlign: { xs: "center", md: "left" },
    backgroundColor,
    backgroundImage,
  };

  const SectionConfigData = {
    textAlign: "", // >>> default: left
    title,
    titleVariant: "h1",
    titleColor: "secondary.light",
    subTitle,
    subTitleVariant: "subtitle1",
    subTitleColor: "secondary.light",
    subTitleStyle: { maxWidth: "min(836px, 100%)" }, // object of styles or false
  };

  const getTitleAndSubtitleJSX = () => {
    if (SectionConfigData.title || SectionConfigData.subTitle) {
      if (SectionConfigData.title && SectionConfigData.subTitle) {
        return (
          <Stack
            spacing={0}
            direction="column"
            alignItems="center"
            textAlign="center"
          >
            {SectionConfigData.title && (
              <Typography
                variant={SectionConfigData.titleVariant || "h1"}
                color={SectionConfigData.titleColor || "inherit"}
              >
                {SectionConfigData.title}
              </Typography>
            )}

            {SectionConfigData.subTitle && (
              <Typography
                variant={SectionConfigData.subTitleVariant || "subtitle1"}
                color={SectionConfigData.subTitleColor || "inherit"}
                sx={SectionConfigData.subTitleStyle}
              >
                {SectionConfigData.subTitle}
              </Typography>
            )}
          </Stack>
        );
      } else {
        return SectionConfigData.title ? (
          <Typography
            variant={SectionConfigData.titleVariant || "h1"}
            color={SectionConfigData.titleColor || "inherit"}
          >
            {SectionConfigData.title}
          </Typography>
        ) : (
          <Typography
            variant={SectionConfigData.subTitleVariant || "subtitle1"}
            color={SectionConfigData.subTitleColor || "inherit"}
            sx={SectionConfigData.subTitleStyle}
          >
            {SectionConfigData.subTitle}
          </Typography>
        );
      }
    } else {
      return null;
    }
  };

  const TitleAndSubtitleJSX = getTitleAndSubtitleJSX();
  console.log("TitleAndSubtitleJSX: ", TitleAndSubtitleJSX);

  return (
    <Box component="section" sx={sectionStyle}>
      <Container
        maxWidth="lg"
        sx={{
          textAlign: SectionConfigData.textAlign || "left",
        }}
      >
        {TitleAndSubtitleJSX ? (
          <Stack spacing={4} direction="column" alignItems="center">
            {TitleAndSubtitleJSX}
            {children}
          </Stack>
        ) : (
          children
        )}
      </Container>
    </Box>
  );
};

export default Section;
