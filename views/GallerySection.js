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
  textAlign: "", // >>> default: left
  title: "our products",
  titleComponent: "h2",
  titleVariant: "h1",
  description:
    "AssetMantle’s suite of products help you up your game of digital asset ownership",
  descriptionStyle: {
    maxWidth: "480px",
    mt: 6,
  }, // object of styles or false
  galleries: [
    // object template
    // {
    //   image: "/images/mantleplace.png",
    //   title: "",
    //   description: "",
    //   buttons: [
    //     {
    //       text: "",
    //       url: "",
    //     },
    //   ],
    // },
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
            component="p"
            variant="body1"
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
                          variant="h4"
                          component="h4"
                          color="primary.light"
                        >
                          {Gallery.title}
                        </Typography>
                      )}
                      {Gallery.description && (
                        <Typography variant="body2" color="primary.light">
                          {Gallery.description}
                        </Typography>
                      )}
                    </CardContent>
                  )}
                  {Gallery.buttons.length !== 0 && (
                    <CardActions sx={{ marginTop: "auto", pb: 3 }}>
                      {Gallery.buttons.map((button, index) => (
                        <Button
                          component="a"
                          href={button.url && button.url}
                          key={index}
                          size="small"
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
