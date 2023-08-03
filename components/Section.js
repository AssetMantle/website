import { Box, Stack } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import TitleAndSubtitle from "./TitleAndSubtitle";

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

  return (
    <Box component="section" sx={{ ...sectionStyle, position: "relative" }}>
      <Box
        style={{ position: "absolute", top: "-50px" }}
        id={
          title &&
          title
            .toLowerCase()
            .replaceAll(" ", "-")
            .replace(/[^a-z-]/g, "")
        }
      />
      <Container
        maxWidth="lg"
        sx={{
          // textAlign: "center",
          background,
        }}
      >
        {title || subTitle ? (
          <Stack spacing={8} direction="column" alignItems="center">
            <TitleAndSubtitle title={title} subTitle={subTitle} />
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
