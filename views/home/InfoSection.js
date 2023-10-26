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
import Section from "../../components/Section";
import TitleAndSubtitle from "../../components/TitleAndSubtitle";

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

const Content = ({ configData, listStyle }) => {
  return (
    <Grid container spacing={0} sx={{ alignItems: "center" }}>
      <Grid item xs={12} md={5}>
        <Box
          sx={listStyle}
          maxWidth={
            configData.contentMaxWidth ? configData.contentMaxWidth : "480px"
          }
        >
          {configData.title && (
            <TitleAndSubtitle
              title={configData.title}
              textAlign="left"
              isContent
            />
          )}
          {configData.description && Array.isArray(configData.description) ? (
            <Stack
              spacing={4}
              sx={
                configData.descriptionStyle || {
                  pb: 2,
                  maxWidth: "92%",
                  textAlign: "left",
                }
              }
            >
              {configData.description.map((item, index) => (
                <Typography
                  variant={configData.descriptionVariant}
                  color={configData.descriptionColor}
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
              variant={configData.descriptionVariant}
              color={configData.descriptionColor}
              sx={
                configData.descriptionStyle
                  ? configData.descriptionStyle
                  : {
                      pb: 2,
                      maxWidth: "92%",
                      textAlign: "left",
                    }
              }
            >
              {configData.description}
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
          variant={configData.imageListVariant}
          cols={3}
          gap={16}
          rowHeight={130}
        >
          {Array.isArray(configData.imageData) &&
            configData.imageData &&
            configData.imageData.length &&
            configData.imageData.map((item) => (
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
                      variant={configData.authorVariant}
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
                      variant={configData.artVariant}
                      color={configData.artColor}
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

export default function InfoSection({ configData }) {
  return (
    <Section>
      <Content configData={configData} listStyle={configData.listStyle} />
    </Section>
  );
}
