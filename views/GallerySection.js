import React from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Icon,
  Paper,
  Typography,
} from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Section from "../components/Section";

const gallerySectionConfigData = {
  paperVariant: "translucent",
  titleVariant: "h3",
  titleColor: "primary.main",
  descriptionVariant: "body1",
  descriptionColor: "primary.light",
  textAlign: "center", // >>> default: left
  title: "Our Products",
  titleComponent: "h1",
  endIcon: "keyboard_arrow_right",
  description:
    "AssetMantle’s suite of products, which is focussed on NFT ecosystem, helps you up your game of digital asset ownership",
  descriptionStyle: { maxWidth: "min(836px, 100%)", margin: "0 auto" }, // object of styles or false
  galleries: [
    // object template
    // {
    //   image: "/GallerySection//mantleplace.png",
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
      image: "/GallerySection//MantlePlace.png",
      title: "MantlePlace",
      description:
        "A new, highly optimized NFT marketplace for Cosmos Ecosystem",
      buttons: [
        {
          text: "Learn More",
          url: "https://marketplace.assetmantle.one/",
        },
      ],
    },
    {
      image: "/GallerySection//MantleBuilder.png",
      title: "MantleBuilder",
      description:
        "Coming soon, a no-code marketplace builder for NFT shopifying",
      buttons: [
        {
          text: "Learn More",
          url: "https://docs.assetmantle.one/MantleBuilder_Overview/",
        },
      ],
    },
    {
      image: "/GallerySection//MantleWallet.png",
      title: "MantleWallet",
      description: "A non-custodial blockchain wallet for AssetMantle chain",
      buttons: [
        {
          text: "Learn More",
          url: "https://wallet.assetmantle.one/",
        },
      ],
    },
    {
      image: "/GallerySection//MantleExplorer.png",
      title: "MantleExplorer",
      description: "A detailed blockchain explorer for the AssetMantle chain",
      buttons: [
        {
          text: "Learn More",
          url: "https://explorer.assetmantle.one/",
        },
      ],
    },
  ],
};
const optionStyles = {
  background: "transparent",
  maxWidth: 272,
  boxShadow: "none",
  height: "100%",
  mx: "auto",
  padding: "0 11px",
  textAlign: { xs: "center", md: "left" },
  display: "flex",
  flexDirection: "column",
};

export default function GallerySection({
  gallerySectionConfigData,
  optionStyles,
}) {
  return (
    <Section
      title={gallerySectionConfigData.title && gallerySectionConfigData.title}
      subTitle={
        gallerySectionConfigData.description &&
        gallerySectionConfigData.description
      }
    >
      {Array.isArray(gallerySectionConfigData.galleries) &&
        gallerySectionConfigData.galleries &&
        gallerySectionConfigData.galleries.length > 0 && (
          <Grid container spacing={0}>
            {gallerySectionConfigData.galleries.map((Gallery, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                lg={3}
                key={index}
                sx={{
                  backgroundColor: "transparent",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    p: 1,
                    justifyContent: "center",
                  }}
                >
                  <Paper
                    variant={gallerySectionConfigData.paperVariant}
                    sx={{
                      width: { xs: "100%" },
                    }}
                  >
                    <Card sx={optionStyles}>
                      {Gallery.image && (
                        <CardMedia
                          component="img"
                          alt={Gallery.title}
                          // height={Gallery.height ? Gallery.height : 420}
                          image={Gallery.image}
                          sx={{
                            border: "none",
                            width: "100%",
                            aspectRatio: "1/1",
                          }}
                        />
                      )}
                      {(Gallery.title || Gallery.description) && (
                        <CardContent sx={{ p: 0.5 }}>
                          {Gallery.title && (
                            <Typography
                              gutterBottom
                              variant={gallerySectionConfigData.titleVariant}
                              component="h3"
                              color={gallerySectionConfigData.titleColor}
                            >
                              {Gallery.title}
                            </Typography>
                          )}
                          {Gallery.description && (
                            <Typography
                              variant={
                                gallerySectionConfigData.descriptionVariant
                              }
                              color={gallerySectionConfigData.descriptionColor}
                            >
                              {Gallery.description}
                            </Typography>
                          )}
                        </CardContent>
                      )}
                      {Gallery.buttons.length !== 0 && (
                        <CardActions
                          sx={{
                            mt: "auto",
                            pb: 2,
                            px: 0.5,
                            justifyContent: { xs: "center", md: "flex-start" },
                            justifySelf: "flex-end",
                          }}
                        >
                          {Gallery.buttons.map((button, i) => (
                            <Button
                              key={`ff${i}`}
                              component="a"
                              href={button.url && button.url}
                              sx={{
                                px: 0,
                              }}
                              aria-label={`${button.text} about ${Gallery.title}`}
                              // size="small"
                            >
                              {button.text && (
                                <>
                                  {button.text}{" "}
                                  <Icon>
                                    {gallerySectionConfigData.endIcon}
                                  </Icon>
                                </>
                              )}
                            </Button>
                          ))}
                        </CardActions>
                      )}
                    </Card>
                  </Paper>
                </Box>
              </Grid>
            ))}
          </Grid>
        )}
    </Section>
  );
}
