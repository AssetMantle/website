import { Box, Card, CardMedia, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";

const SocialProofConfigData = {
  textAlign: "center",
  title: "Featured In",
  titleComponent: "",
  titleVariant: "h1",
  description: "",
  descriptionStyle: { maxWidth: "min(836px, 100%)", margin: "0 auto" }, // object of styles or false
  features: [
    // object template
    // {
    //   title: "",
    //   image: "",
    //   link: "",
    // },
    {
      title: "yahoo finance",
      image: "https://assetmantle.one/images/landing/yahoo_finance.png",
      link: "https://finance.yahoo.com/news/assetmantle-launches-long-awaited-mainnet-150000066.html",
    },
    {
      title: "coinquora",
      image: "https://assetmantle.one/images/landing/coinquora.png",
      link: "https://coinquora.com/avigation-ai-collabs-with-assetmantle-to-revamp-nfts-via-ai-integration/",
    },
    {
      title: "digitaljournal",
      image: "https://assetmantle.one/images/landing/digitaljournal.png",
      link: "https://www.digitaljournal.com/pr/assetmantle-launches-its-long-awaited-mainnet",
    },
    {
      title: "investing.com",
      image: "https://assetmantle.one/images/landing/investing.png",
      link: "https://m.investing.com/news/cryptocurrency-news/avigation-ai-collabs-with-assetmantle-to-revamp-nfts-via-ai-integration-2820215?ampMode=1",
    },
    {
      title: "techbullion",
      image: "https://assetmantle.one/images/landing/techbullion.png",
      link: "https://techbullion.com/talking-nfts-with-assetmantle-founder-deepanshu-tripathi/",
    },
  ],
};

const sectionStyle = {
  my: 10,
  py: 4,
  color: "primary.light",
  textAlign: { xs: "center", sm: "center", md: "left" },
};
const optionContainerStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: { xs: "center", md: "space-around" },
  flexWrap: "wrap",

  pt: 10,
};

export default function SocialProofSection() {
  return (
    <Box component="section" sx={sectionStyle}>
      <Container
        maxWidth="lg"
        sx={{
          textAlign: SocialProofConfigData.textAlign
            ? SocialProofConfigData.textAlign
            : "left",
        }}
      >
        {SocialProofConfigData.title && (
          <Typography
            component={
              SocialProofConfigData.titleComponent
                ? SocialProofConfigData.titleComponent
                : "h2"
            }
            variant={
              SocialProofConfigData.titleVariant
                ? SocialProofConfigData.titleVariant
                : "h2"
            }
            color="inherit"
            sx={{
              pb: 2,
            }}
          >
            {SocialProofConfigData.title}
          </Typography>
        )}
        {SocialProofConfigData.description && (
          <Typography
            component="p"
            variant="body1"
            color="inherit"
            sx={
              SocialProofConfigData.descriptionStyle
                ? SocialProofConfigData.descriptionStyle
                : {
                    pb: 2,
                  }
            }
          >
            {SocialProofConfigData.description}
          </Typography>
        )}
        {Array.isArray(SocialProofConfigData.features) &&
          SocialProofConfigData.features &&
          SocialProofConfigData.features.length > 0 && (
            <Box sx={optionContainerStyles}>
              {SocialProofConfigData.features.map((feature, index) => (
                <Card
                  sx={{
                    width: "min(208px,100%)",
                    padding: 3,
                    backgroundColor: "transparent",
                    height: "100%",
                    display: "flex",
                    boxShadow: "none",
                    "&:hover": {
                      boxShadow: "0px 0px 4px 4px rgba(0,0,0,0.2)",
                    },
                  }}
                  key={index}
                  component="a"
                  href={feature.link && feature.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <CardMedia
                    component="img"
                    alt={feature.title && feature.title}
                    image={feature.image && feature.image}
                    sx={{ border: "none", width: "100%", height: "auto" }}
                  />
                </Card>
              ))}
            </Box>
          )}
      </Container>
    </Box>
  );
}
