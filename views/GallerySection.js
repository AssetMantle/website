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

const GalleryConfigData = {
  textAlign: "center",
  title: "Our Products",
  titleComponent: "h1",
  titleVariant: "h1",
  description:
    "AssetMantle’s suite of products, which is focussed on NFT ecosystem, helps you up your game of digital asset ownership",
  descriptionStyle: { maxWidth: "min(836px, 100%)", margin: "0 auto" }, // object of styles or false

  galleries: [
    {
      image: "/images/MantlePlace.png",
      title: "MantlePlace",
      description:
        "A new, highly optimized NFT marketplace for Cosmos Ecosystem",
      buttons: [
        {
          text: "Learn More",
          url: "",
        },
      ],
    },
    {
      image: "/images/MantleBuilder.png",
      title: "MantleBuilder",
      description:
        "A no-code marketplace builder enabling instant NFT shopifying",
      buttons: [
        {
          text: "Learn More",
          url: "",
        },
      ],
    },
    {
      image: "/images/MantleWallet.png",
      title: "MantleWallet",
      description: "A non-custodial blockchain wallet for AssetMantle chain",
      buttons: [
        {
          text: "Learn More",
          url: "",
        },
      ],
    },
    {
      image: "/images/MantleExplorer.png",
      title: "MantleExplorer",
      description: "A blockchain explorer for the AssetMantle chain",
      buttons: [
        {
          text: "Learn More",
          url: "",
        },
      ],
    },
  ],
};

const sectionStyle = {
  my: 10,
  py: 4,
  paddingTop: "7px",
  color: "primary.light",
  textAlign: { xs: "center", sm: "center", md: "left" },
};
const optionContainerStyles = {
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  gap: "21px",
  pt: 8,
};
const optionStyles = {
  background:
    "linear-gradient(157.26deg, rgba(217, 217, 217, 0.24) -5.39%, rgba(217, 217, 217, 0.12) 108.05%)",
  backdropFilter: "blur(47.4479px)",
  borderRadius: "16px",
  maxWidth: 272,
  boxShadow: "none",
  padding: "0 11px",
  textAlign: { xs: "center", md: "left" },
  display: "flex",
  flexDirection: "column",
};

export default function GallerySection() {
  return (
    <Box component="section" sx={sectionStyle}>
      <Container
        maxWidth="lg"
        sx={{
          textAlign: GalleryConfigData.textAlign
            ? GalleryConfigData.textAlign
            : "left",
        }}
      >
        {GalleryConfigData.title && (
          <Typography
            component={
              GalleryConfigData.titleComponent
                ? GalleryConfigData.titleComponent
                : "h2"
            }
            variant={
              GalleryConfigData.titleVariant
                ? GalleryConfigData.titleVariant
                : "h2"
            }
            color="inherit"
          >
            {GalleryConfigData.title}
          </Typography>
        )}
        {GalleryConfigData.description && (
          <Typography
            variant="subtitle2"
            color="inherit"
            sx={
              GalleryConfigData.descriptionStyle
                ? GalleryConfigData.descriptionStyle
                : {
                    pb: 2,
                  }
            }
          >
            {GalleryConfigData.description}
          </Typography>
        )}
        {Array.isArray(GalleryConfigData.galleries) &&
          GalleryConfigData.galleries &&
          GalleryConfigData.galleries.length > 0 && (
            <Box sx={optionContainerStyles}>
              {GalleryConfigData.galleries.map((Gallery, index) => (
                <Card sx={optionStyles} key={index}>
                  {Gallery.image && (
                    <CardMedia
                      component="img"
                      alt={Gallery.title}
                      // height={Gallery.height ? Gallery.height : 420}
                      image={Gallery.image}
                      sx={{ border: "none", width: "100%", aspectRatio: "1/1" }}
                    />
                  )}
                  {(Gallery.title || Gallery.description) && (
                    <CardContent>
                      {Gallery.title && (
                        <Typography
                          gutterBottom
                          variant="h3"
                          component="h3"
                          color="primary.main"
                        >
                          {Gallery.title}
                        </Typography>
                      )}
                      {Gallery.description && (
                        <Typography variant="body1" color="primary.light">
                          {Gallery.description}
                        </Typography>
                      )}
                    </CardContent>
                  )}
                  {Gallery.buttons.length !== 0 && (
                    <CardActions sx={{ pb: 2 }}>
                      {Gallery.buttons.map((button, index) => (
                        <Button
                          component="a"
                          href={button.url && button.url}
                          key={index}
                          // size="small"
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
