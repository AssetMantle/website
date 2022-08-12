import {
  Box,
  CardMedia,
  Container,
  Grid,
  ImageList,
  ImageListItem,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import VerifiedIcon from "@mui/icons-material/Verified";

const InfoSectionConfigData = {
  textAlign: "", // >>> default: left
  fullWidth: false, // boolean
  smallDeviceColumnDirections: "", // only "reverse" or "" >>>>>>default is "no-reverse"
  contentMaxWidth: "", // "number+px"(ie. "100px") or "" >>>>>>default is "457px"
  title: "Distributed NFT economy",
  titleComponent: "h1",
  titleVariant: "h2",
  titleColor: "secondary.main",
  description: [
    "AssetMantle suite of products creates a distributed NFT Economy where users can create not only NFT collections but their own NFT marketplaces and storefronts.",
    "This shopifying of NFT assets, leads to a distributed network of networks, with world state stored collectively in the AssetMantle chain.",
  ],
  descriptionVariant: "body1",
  descriptionColor: "secondary.main",
  descriptionStyle: { maxWidth: "min(836px, 100%)", margin: "0 auto" }, // object of styles or false
  rightSidedImage: "",
  infos: [
    //   {
    //     title: "Info 1",
    //     description: "Description 1",
    //     icon: "https://uploads-ssl.webflow.com/623a0c9828949e55356286f9/623b5936a09ba064d3f5c894_Microscope.svg",
    //   },
    //   {
    //     title: "Info 2",
    //     description: "Description 2",
    //     icon: "https://uploads-ssl.webflow.com/623a0c9828949e55356286f9/623b5936a09ba064d3f5c894_Microscope.svg",
    //   },
  ],
  imageData: [
    {
      img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
      title: "Breakfast",
      name: "ALSlkaskal",
      author: "@slasl",
      rows: 2,
    },
    {
      img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
      title: "Burger",
      name: "ALSlkaskal",
      author: "@slasl",
    },
    {
      img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
      title: "Camera",
      name: "ALSlkaskal",
      author: "@slasl",
      rows: 2,
    },
    {
      img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
      title: "Coffee",
      name: "ALSlkaskal",
      author: "@slasl",
    },
    {
      img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
      title: "Hats",
      name: "ALSlkaskal",
      author: "@slasl",
      rows: 2,
    },
    {
      img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
      title: "Honey",
      name: "ALSlkaskal",
      author: "@slasl",
    },
    {
      img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
      title: "Basketball",
      name: "ALSlkaskal",
      author: "@slasl",
    },
    {
      img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
      title: "Fern",
      name: "ALSlkaskal",
      author: "@slasl",
    },
    {
      img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
      title: "Mushrooms",
      name: "ALSlkaskal",
      author: "@slasl",
    },
    {
      img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
      title: "Tomato basil",
      name: "ALSlkaskal",
      author: "@slasl",
      rows: 2,
    },
    {
      img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
      title: "Sea star",
      name: "ALSlkaskal",
      author: "@slasl",
      rows: 2,
    },
    {
      img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
      title: "Bike",
      name: "ALSlkaskal",
      author: "@slasl",
      rows: 2,
    },
  ],
};

const sectionStyle = {
  py: 10,
  color: "primary.light",
  mx: "auto",
  textAlign: {
    xs: "center",
    sm: "center",
    md: InfoSectionConfigData.textAlign
      ? InfoSectionConfigData.textAlign
      : "left",
  },
};

const listStyle = {
  margin: { xs: "auto", md: "auto 0" },
  height: "100%",
};

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

const Content = () => {
  return (
    <Grid container spacing={0} sx={{ alignItems: "center" }}>
      <Grid item xs={12} md={5}>
        <Box
          sx={listStyle}
          maxWidth={
            InfoSectionConfigData.contentMaxWidth
              ? InfoSectionConfigData.contentMaxWidth
              : "480px"
          }
        >
          {InfoSectionConfigData.title && (
            <Typography
              variant={
                InfoSectionConfigData.titleVariant
                  ? InfoSectionConfigData.titleVariant
                  : "h1"
              }
              color={InfoSectionConfigData.titleColor}
              gutterBottom
            >
              {InfoSectionConfigData.title}
            </Typography>
          )}
          {InfoSectionConfigData.description &&
          Array.isArray(InfoSectionConfigData.description) ? (
            <Stack
              spacing={4}
              sx={
                InfoSectionConfigData.descriptionStyle
                  ? InfoSectionConfigData.descriptionStyle
                  : {
                      pb: 2,
                      maxWidth: "92%",
                    }
              }
            >
              {InfoSectionConfigData.description.map((item, index) => (
                <Typography
                  variant={InfoSectionConfigData.descriptionVariant}
                  color={InfoSectionConfigData.descriptionColor}
                >
                  {item}
                </Typography>
              ))}
            </Stack>
          ) : (
            <Typography
              component="p"
              variant={InfoSectionConfigData.descriptionVariant}
              color={InfoSectionConfigData.descriptionColor}
              sx={
                InfoSectionConfigData.descriptionStyle
                  ? InfoSectionConfigData.descriptionStyle
                  : {
                      pb: 2,
                      maxWidth: "92%",
                    }
              }
            >
              {InfoSectionConfigData.description}
            </Typography>
          )}
          {InfoSectionConfigData.infos &&
            InfoSectionConfigData.infos.length > 0 && (
              <Box sx={{ pt: 4 }}>
                {InfoSectionConfigData.infos.map((data, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 2,
                      pb: 3,
                    }}
                  >
                    {data.icon && (
                      <CardMedia
                        sx={{ width: 32, aspectRatio: "1/1" }}
                        image={data.icon}
                      />
                    )}
                    <Box>
                      {data.title && (
                        <Typography
                          component="p"
                          variant="body1"
                          color="inherit"
                        >
                          {data.title}
                        </Typography>
                      )}
                      {data.description && (
                        <Typography
                          component="p"
                          variant="body2"
                          color="inherit"
                        >
                          {data.description}
                        </Typography>
                      )}
                    </Box>
                  </Box>
                ))}
              </Box>
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
          variant="quilted"
          cols={3}
          gap={16}
          rowHeight={130}
        >
          {Array.isArray(InfoSectionConfigData.imageData) &&
            InfoSectionConfigData.imageData &&
            InfoSectionConfigData.imageData.length &&
            InfoSectionConfigData.imageData.map((item) => (
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
                    <Typography
                      variant="body3"
                      color="primary.main"
                      component="h6"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      {item.author} <VerifiedIcon fontSize="inherit" />
                    </Typography>
                  )}
                  {item.name && (
                    <Typography component="p" variant="body4">
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

export default function InfoSection() {
  return (
    <Box component="section" sx={sectionStyle} maxWidth="xl">
      {InfoSectionConfigData.fullWidth ? (
        <Content />
      ) : (
        <Container maxWidth="lg">
          <Content />
        </Container>
      )}
    </Box>
  );
}
