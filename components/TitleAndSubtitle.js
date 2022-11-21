import { Stack, Typography } from "@mui/material";
import React from "react";
import NextLink from "./NextLink";

const TitleAndSubtitle = (props) => {
  const {
    title = null,
    subTitle = null,
    textAlign = "center",
    isContent = false,
  } = props;
  const SectionConfigData = {
    title,
    titleVariant: isContent ? "h2" : "h1",
    titleColor: "secondary.light",
    subTitle,
    subTitleVariant: "subtitle1",
    subTitleColor: "secondary.light",
    subTitleStyle: { maxWidth: "min(836px, 100%)" }, // object of styles or false
  };

  return (
    <Stack
      spacing={0}
      direction="column"
      alignItems="center"
      textAlign={textAlign}
      id={
        title &&
        title
          .toLowerCase()
          .replaceAll(" ", "-")
          .replace(/[^a-z-]/g, "")
      }
    >
      {SectionConfigData.title && (
        <Typography
          variant={SectionConfigData.titleVariant || "h1"}
          color={SectionConfigData.titleColor || "inherit"}
        >
          <NextLink
            color="inherit"
            underline="hover"
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
          sx={SectionConfigData.subTitleStyle}
        >
          {SectionConfigData.subTitle}
        </Typography>
      )}
    </Stack>
  );
};

export default TitleAndSubtitle;
