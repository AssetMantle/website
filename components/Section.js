import { Box, Stack, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";

const Section = (props) => {
  const {
    title = null,
    subTitle = null,
    background = "none",
    backgroundColor = "transparent",
    children,
  } = props;


  const sectionStyle = {
    my: 16,
    py: 4,
    textAlign: { xs: "center", md: "left" },
    backgroundColor,

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

  // console.log("TitleAndSubtitleJSX: ", TitleAndSubtitleJSX);

  return (
    <Box
      component="section"
      sx={sectionStyle}
      id={
        SectionConfigData.title &&
        SectionConfigData.title.toLowerCase().replaceAll(" ", "-")
      }
    >
      <Container
        maxWidth="lg"
        sx={{
          textAlign: SectionConfigData.textAlign || "left",
          background,

        }}
      >
        {TitleAndSubtitleJSX ? (
          <Stack spacing={8} direction="column" alignItems="center">
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
