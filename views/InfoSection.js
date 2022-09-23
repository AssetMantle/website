import {
  Box,
  Button,
  Grid,
  ImageList,
  ImageListItem,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import VerifiedIcon from "@mui/icons-material/Verified";
import Section from "../components/Section";
import TitleAndSubtitle from "../components/TitleAndSubtitle";

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

const Content = ({ infoSectionConfigData, listStyle }) => {
  return (
    <Grid container spacing={0} sx={{ alignItems: "center" }}>
      <Grid item xs={12} md={5}>
        <Box
          sx={listStyle}
          maxWidth={
            infoSectionConfigData.contentMaxWidth
              ? infoSectionConfigData.contentMaxWidth
              : "480px"
          }
        >
          {infoSectionConfigData.title && (
            <TitleAndSubtitle
              title={infoSectionConfigData.title}
              textAlign="left"
              isContent
            />
          )}
          {infoSectionConfigData.description &&
          Array.isArray(infoSectionConfigData.description) ? (
            <Stack
              spacing={4}
              sx={
                infoSectionConfigData.descriptionStyle || {
                  pb: 2,
                  maxWidth: "92%",
                  textAlign: "left",
                }
              }
            >
              {infoSectionConfigData.description.map((item, index) => (
                <Typography
                  variant={infoSectionConfigData.descriptionVariant}
                  color={infoSectionConfigData.descriptionColor}
                  key={index}
                  textAlign="left"
                >
                  {item}
                </Typography>
              ))}
            </Stack>
          ) : (
            <Typography
              component="p"
              variant={infoSectionConfigData.descriptionVariant}
              color={infoSectionConfigData.descriptionColor}
              sx={
                infoSectionConfigData.descriptionStyle
                  ? infoSectionConfigData.descriptionStyle
                  : {
                      pb: 2,
                      maxWidth: "92%",
                      textAlign: "left",
                    }
              }
            >
              {infoSectionConfigData.description}
            </Typography>
          )}
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        md={7}
        sx={{
          position: "relative",
          padding: { xs: " 56px 0 0", md: "32px" },
        }}
      >
        <ImageList
          sx={{ width: "min(640px, 100%)", margin: { xs: "auto", md: "0" } }}
          variant={infoSectionConfigData.imageListVariant}
          cols={3}
          gap={16}
          rowHeight={130}
        >
          {Array.isArray(infoSectionConfigData.imageData) &&
            infoSectionConfigData.imageData &&
            infoSectionConfigData.imageData.length &&
            infoSectionConfigData.imageData.map((item) => (
              <ImageListItem
                key={item.img}
                cols={item.cols || 1}
                rows={item.rows || 1}
                sx={{
                  borderRadius: "8px",
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <img
                  {...srcset(item.img, 121, item.rows, item.cols)}
                  alt={item.title}
                  loading="lazy"
                />
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    width: "100%",
                    height: "100%",
                    p: 1,
                    backgroundImage:
                      "linear-gradient(0deg,#000,transparent 70%,transparent)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                  }}
                >
                  {item.author && (
                    <Button
                      variant={infoSectionConfigData.authorVariant}
                      size="large"
                      component="a"
                      href={item.href ? item.href : null}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        justifyContent: "start",
                        gap: 1,
                        padding: 0,
                        textTransform: "capitalize",
                      }}
                    >
                      {item.author} <VerifiedIcon fontSize="inherit" />
                    </Button>
                  )}
                  {item.name && (
                    <Typography
                      component="p"
                      variant={infoSectionConfigData.artVariant}
                      color={infoSectionConfigData.artColor}
                    >
                      {item.name}
                    </Typography>
                  )}
                </Box>
              </ImageListItem>
            ))}
        </ImageList>
      </Grid>
    </Grid>
  );
};

export default function InfoSection({ infoSectionConfigData, listStyle }) {
  return (
    <Section>
      <Content
        infoSectionConfigData={infoSectionConfigData}
        listStyle={listStyle}
      />
    </Section>
  );
}
