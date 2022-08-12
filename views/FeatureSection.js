import { Box, Card, CardMedia, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import HubOutlinedIcon from "@mui/icons-material/HubOutlined";
import MoneyOffIcon from "@mui/icons-material/MoneyOff";
import FastForwardOutlinedIcon from "@mui/icons-material/FastForwardOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import SwapHorizOutlinedIcon from "@mui/icons-material/SwapHorizOutlined";

const FeatureConfigData = {
  textAlign: "center",
  title: "Why choose us?",
  titleComponent: "",
  titleVariant: "h1",
  description:
    "AssetMantle’s foundation is built using the best-in-class core blockchain principles, and optimized for the next evolution of NFT economy",
  descriptionStyle: { maxWidth: "min(836px, 100%)", margin: "0 auto" }, // object of styles or false
  featuresArray: [
    {
      href: "",
      icon: (
        <CategoryOutlinedIcon
          sx={{ fontSize: "56px", color: "primary.main" }}
        />
      ), // put icon component or url >>don't forgot to change the below
      iconType: "component", // >>>>put nothing if icon is a img or url
      title: "Optimized for NFTs",
      titleVariant: "h4",
      titleColor: "primary.main",
      description:
        "We’re building a suite of NFT products, with the chain specifically calibrated with features like Verified NFT Creators, customized NFT properties, in-built whitelisting features etc.",
      descriptionVariant: "body2",
      descriptionColor: "secondary.main",
    },
    {
      href: "",
      icon: (
        <HubOutlinedIcon sx={{ fontSize: "56px", color: "primary.main" }} />
      ), // put icon component or url >>don't forgot to change the below
      iconType: "component", // >>>>put nothing if icon is a img or url
      title: "Cosmos Ecosystem",
      titleVariant: "h4",
      titleColor: "primary.main",
      description:
        "AssetMantle being one of the top zones of the Cosmos Hub, leverages features like Tendermint Core for Consensus and a highly modular SDK framework.",
      descriptionVariant: "body2",
      descriptionColor: "secondary.main",
    },
    {
      href: "",
      icon: <MoneyOffIcon sx={{ fontSize: "56px", color: "primary.main" }} />, // put icon component or url >>don't forgot to change the below
      iconType: "component", // >>>>put nothing if icon is a img or url
      title: "Extremely Low Fees",
      titleVariant: "h4",
      titleColor: "primary.main",
      description:
        "This network offers the basis for an economical network, with gas fees as low as $0.01 per transaction, it has the lowest transaction fees compared to any popular network.",
      descriptionVariant: "body2",
      descriptionColor: "secondary.main",
    },
    {
      href: "",
      icon: (
        <FastForwardOutlinedIcon
          sx={{ fontSize: "56px", color: "primary.main" }}
        />
      ), // put icon component or url >>don't forgot to change the below
      iconType: "component", // >>>>put nothing if icon is a img or url
      title: "Fast Order Fulfillments",
      titleVariant: "h4",
      titleColor: "primary.main",
      description:
        "Extremely fast transactions nearing 7 seconds enables almost zero waiting time for fulfillment of orders of buy, sell, auction etc.",
      descriptionVariant: "body2",
      descriptionColor: "secondary.main",
    },
    {
      href: "",
      icon: (
        <SecurityOutlinedIcon
          sx={{ fontSize: "56px", color: "primary.main" }}
        />
      ), // put icon component or url >>don't forgot to change the below
      iconType: "component", // >>>>put nothing if icon is a img or url
      title: "Completely Secure",
      titleVariant: "h4",
      titleColor: "primary.main",
      description:
        "With high level of network security, and leveraging the native token $MNTL, AssetMantle can provide the level of protection required for your asset ownership.",
      descriptionVariant: "body2",
      descriptionColor: "secondary.main",
    },
    {
      href: "",
      icon: (
        <SwapHorizOutlinedIcon
          sx={{ fontSize: "56px", color: "primary.main" }}
        />
      ), // put icon component or url >>don't forgot to change the below
      iconType: "component", // >>>>put nothing if icon is a img or url
      title: "Future Interoperability",
      titleVariant: "h4",
      titleColor: "primary.main",
      description:
        "InterNFT can potentially enable NFTs to be transferred to other connected chains, thereby creating a larger shared market economy.",
      descriptionVariant: "body2",
      descriptionColor: "secondary.main",
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
  justifyContent: "center",
  flexWrap: "wrap",
  gap: "14px",
  mt: 5,
};
const optionStyles = {
  background:
    "linear-gradient(157.26deg, rgba(217, 217, 217, 0.24) -5.39%, rgba(217, 217, 217, 0.12) 108.05%)",
  backdropFilter: "blur(47.4479px)",
  borderRadius: "16px",
  maxWidth: 374,
  boxShadow: "none",
  padding: "16px 22px",
  borderRadius: "25px",
  minHeight: "265px",
  transition: "all 0.3s ease-in-out",
  color: "primary.light",
  "&:hover": {
    backgroundColor: "navBg",
  },
};

export default function FeatureSection() {
  return (
    <Box component="section" sx={sectionStyle}>
      <Container
        maxWidth="lg"
        sx={{
          textAlign: FeatureConfigData.textAlign
            ? FeatureConfigData.textAlign
            : "left",
        }}
      >
        {FeatureConfigData.title && (
          <Typography
            component={
              FeatureConfigData.titleComponent
                ? FeatureConfigData.titleComponent
                : "h2"
            }
            variant={
              FeatureConfigData.titleVariant
                ? FeatureConfigData.titleVariant
                : "h3"
            }
            color={FeatureConfigData.titleColor}
            sx={{
              pb: 2,
            }}
          >
            {FeatureConfigData.title}
          </Typography>
        )}
        {FeatureConfigData.description && (
          <Typography
            component="p"
            variant="subtitle2"
            sx={
              FeatureConfigData.descriptionStyle
                ? FeatureConfigData.descriptionStyle
                : {
                    pb: 2,
                  }
            }
          >
            {FeatureConfigData.description}
          </Typography>
        )}
        {Array.isArray(FeatureConfigData.featuresArray) &&
          FeatureConfigData.featuresArray &&
          FeatureConfigData.featuresArray.length > 0 && (
            <Box sx={optionContainerStyles}>
              {FeatureConfigData.featuresArray.map((feature, index) => (
                <Card sx={optionStyles} key={index}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexDirection: "column",
                      gap: 2,
                      pb: 2,
                    }}
                  >
                    {feature.iconType === "component"
                      ? feature.icon && feature.icon
                      : feature.icon && (
                          <CardMedia
                            sx={{ width: 32, aspectRatio: "1/1" }}
                            image={feature.icon}
                          />
                        )}
                    {feature.title && (
                      <Typography
                        variant={feature.titleVariant}
                        color={feature.titleColor}
                      >
                        {feature.title}
                      </Typography>
                    )}
                  </Box>
                  {feature.description && (
                    <Typography
                      variant={feature.descriptionVariant}
                      color={feature.descriptionColor}
                    >
                      {feature.description}
                    </Typography>
                  )}
                </Card>
              ))}
            </Box>
          )}
      </Container>
    </Box>
  );
}
