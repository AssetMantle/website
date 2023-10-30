import { Stack, Typography } from "@mui/material";
import React from "react";
import NextLink from "./NextLink";

const TitleAndSubtitle = (props) => {
  const {
    title = null,
    subTitle = null,
    textAlign = "center",
    isContent = false,
    titleVariant,
    subTitleVariant,
    subtitleSx,
  } = props;
  const SectionConfigData = {
    title,
    titleVariant: titleVariant ? titleVariant : "h2",
    titleColor: "secondary.light",
    subTitle,
    subTitleVariant: subTitleVariant || "subtitle1",
    subTitleColor: "secondary.light",
    subTitleStyle:
      subtitleSx && subtitleSx?.maxWidth
        ? subtitleSx
        : { maxWidth: "min(836px, 100%)" }, // object of styles or false
  };

  return (
    <Stack
      spacing={4}
      direction="column"
      alignItems="center"
      textAlign={textAlign}
    >
      {SectionConfigData.title && (
        <Typography
          variant={SectionConfigData.titleVariant || "h2"}
          color={SectionConfigData.titleColor || "inherit"}
        >
          <NextLink
            color="inherit"
            underline="none"
            href={`#${
              SectionConfigData.title &&
              SectionConfigData.title
                .toLowerCase()
                .replaceAll(" ", "-")
                .replace(/[^a-z-]/g, "")
            }`}
          >
            {SectionConfigData.title}
          </NextLink>
        </Typography>
      )}

      {SectionConfigData.subTitle && (
        <Typography
          variant={SectionConfigData.subTitleVariant || "subtitle1"}
          color={SectionConfigData.subTitleColor || "inherit"}
          sx={{ ...SectionConfigData.subTitleStyle }}
          component={"p"}
        >
          {SectionConfigData.subTitle}
        </Typography>
      )}
    </Stack>
  );
};

export default TitleAndSubtitle;
