import {
  Box,
  Button,
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
  imageData: [
    {
      img: "/images/info/Archetypes.webp",
      title: "Archetypes",
      name: "Archetypes",
      author: "Oblitus Mantra",
      href: "https://twitter.com/Archetypes0nft",
      rows: 2,
    },
    {
      img: "/images/info/arto.webp",
      title: "Arto DAO",
      name: "Arto DAO",
      author: "Arto DAO",
      href: "https://twitter.com/ArtoDAO",
    },
    {
      img: "/images/info/Aequanimity.webp",
      title: "Aequanimity",
      name: "Aequanimity",
      author: "pratykarya",
      href: "https://twitter.com/PratykArya",
      rows: 2,
    },
    {
      img: "/images/info/Christiopkosin.webp",
      title: "Christiopkosin",
      name: "Christiopkosin",
      author: "Christiopkosin",
      href: "",
    },
    {
      img: "/images/info/the_dansant.webp",
      title: "The Dansant",
      name: "The Dansant",
      author: "the_dansant",
      href: "https://twitter.com/the_dansant",
      rows: 2,
    },
    {
      img: "/images/info/boldwockeez.webp",
      title: "boldwockeez",
      name: "boldwockeez",
      author: "cryptoduuudes",
      href: "https://twitter.com/CryptoDuuudes",
    },
    {
      img: "/images/info/MantleMonkeys.webp",
      title: "Mantle Monkeys",
      name: "Mantle Monkeys",
      author: "MantleMonkeys",
      href: "https://twitter.com/MantleMonkeys",
    },
    {
      img: "/images/info/mantlewarriors.webp",
      title: "Mantle Warriors",
      name: "Mantle Warriors",
      author: "mantlewarriors",
      href: "https://twitter.com/mantlewarriors",
    },
    {
      img: "/images/info/OblitusMantra1.webp",
      title: "Oblitus Mantra - Forgotten Worlds",
      name: "Oblitus Mantra",
      author: "Oblitus",
      href: "https://twitter.com/Oblitus_NFT",
    },
    {
      img: "/images/info/OblitusMantra2.webp",
      title: "Oblitus Mantra - Forgotten Worlds",
      name: "Oblitus Mantra",
      author: "Oblitus",
      href: "https://twitter.com/Oblitus_NFT",
      rows: 2,
    },
    {
      img: "/images/info/Pinnacle1.webp",
      title: "Pinnacle",
      name: "Pinnacle",
      author: "Zeelectric",
      href: "",
      rows: 2,
    },
    {
      img: "/images/info/Pinnacle2.webp",
      title: "Pinnacle",
      name: "Pinnacle",
      author: "Zeelectric",
      href: "",
      rows: 2,
    },
  ],
};

const sectionStyle = {
  my: 10,
  py: 4,
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
                  key={index}
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
                    <Button
                      variant="text"
                      size="large"
                      component="a"
                      href={item.href ? item.href : null}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        padding: "0",
                        justifyContent: "start",
                        width: "100%",
                        gap: 1,
                        textTransform: "capitalize",
                      }}
                    >
                      {item.author} <VerifiedIcon fontSize="inherit" />
                    </Button>
                  )}
                  {item.name && (
                    <Typography component="p" variant="body3">
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
