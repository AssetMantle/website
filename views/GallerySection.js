import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Section from "../components/Section";

const GalleryConfigData = {
  textAlign: "center", // >>> default: left
  title: "Our Products",
  titleComponent: "h1",
  titleVariant: "h1",
  description:
    "AssetMantle’s suite of products, which is focussed on NFT ecosystem, helps you up your game of digital asset ownership",
  descriptionStyle: { maxWidth: "min(836px, 100%)", margin: "0 auto" }, // object of styles or false
  galleries: [
    // object template
    // {
    //   image: "/images/products/mantleplace.png",
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
      image: "/images/products/MantlePlace.png",
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
      image: "/images/products/MantleBuilder.png",
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
      image: "/images/products/MantleWallet.png",
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
      image: "/images/products/MantleExplorer.png",
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
  background:
    "linear-gradient(157.26deg, rgba(217, 217, 217, 0.12) -5.39%, rgba(217, 217, 217, 0.08) 108.05%)",
  backdropFilter: "blur(47.4479px)",
  borderRadius: "16px",
  maxWidth: 272,
  boxShadow: "none",
  height: "100%",
  mx: "auto",
  padding: "0 11px",
  textAlign: { xs: "center", md: "left" },
  display: "flex",
  flexDirection: "column",
};

export default function GallerySection() {
  return (
    <Section
      title={GalleryConfigData.title && GalleryConfigData.title}
      subTitle={GalleryConfigData.description && GalleryConfigData.description}
    >
      {Array.isArray(GalleryConfigData.galleries) &&
        GalleryConfigData.galleries &&
        GalleryConfigData.galleries.length > 0 && (
          <Grid container spacing={2} sx={{ pt: 8 }}>
            {GalleryConfigData.galleries.map((Gallery, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
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
                    <CardActions
                      sx={{
                        mt: "auto",
                        pb: 2,
                        px: 0.5,
                        justifyContent: { xs: "center", md: "flex-start" },
                        justifySelf: "flex-end",
                      }}
                    >
                      {Gallery.buttons.map((button, index) => (
                        <Button
                          component="a"
                          href={button.url && button.url}
                          key={index}
                          sx={{
                            px: 0,
                          }}
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
              </Grid>
            ))}
          </Grid>
        )}
    </Section>
  );
}
