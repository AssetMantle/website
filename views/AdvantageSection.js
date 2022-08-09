import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import Button from "../components/Buttons";
import CallMadeIcon from "@mui/icons-material/CallMade";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";

import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";

const InitiativeSectionConfigData = {
  textAlign: "", // >>> default: left
  title: "THE ASSETMANTLE ADVANTAGE",
  titleComponent: "h2",
  titleVariant: "h1",
  description: "The native token which powers the AssetMantle’s NFT Economy",
  descriptionStyle: {
    pt: 7,
    width: "min(100%, 343px)",
  }, // object of styles or false
  backgroundImage: "", // "url('/images/mantleplace.png')",
  ctas: [
    {
      title: "Whitepaper",
      url: "",
      icon: <CallMadeIcon />, // url: "/" or component: <Icon/>
      target: "_blank", // valid values: "_blank", "_self", "_parent", "_top" >>>default: "_self"
      disabled: false,
      variant: "primary",
    },
    {
      title: "litepaper",
      url: "",
      icon: <FileDownloadOutlinedIcon />, // url: "/" or component: <Icon/>
      target: "_blank", // valid values: "_blank", "_self", "_parent", "_top" >>>default: "_self"
      disabled: false,
      variant: "secondary",
    },
  ],
  initiatives: [
    {
      icon: (
        <TrendingUpOutlinedIcon
          sx={{ fontSize: "56px", color: "primary.main" }}
        />
      ), // add component: <Icon /> or url: "https://icon.png"
      title: "Multi-Chain Access",
      description:
        "Trade NFT on other chains or show them off across metaverses",
    },
    {
      icon: (
        <TrendingUpOutlinedIcon
          sx={{ fontSize: "56px", color: "primary.main" }}
        />
      ), // add component: <Icon /> or url: "https://icon.png"
      title: "Highly Economical ROI",
      description:
        "Leverage a rich NFT Economy on an IBC enabled Cosmos Ecosystem at negligible cost",
    },
    {
      icon: (
        <TrendingUpOutlinedIcon
          sx={{ fontSize: "56px", color: "primary.main" }}
        />
      ), // add component: <Icon /> or url: "https://icon.png"
      title: "Multiple Payment Modes",
      description:
        "Experience AssetMantle with fiat currency, coins or stablecoins",
    },
    {
      icon: (
        <TrendingUpOutlinedIcon
          sx={{ fontSize: "56px", color: "primary.main" }}
        />
      ), // add component: <Icon /> or url: "https://icon.png"
      title: "No-Code Customization Engine",
      description:
        "Experience No-Code NFT Marketplace creation with plug-and-play NFT Modules",
    },
  ],
};

const sectionStyle = {
  my: 10,
  py: 4,
  color: "primary.light",
  textAlign: { xs: "center", sm: "center", md: "left" },
};

const listStyle = {
  background:
    "linear-gradient(157.26deg, rgba(217, 217, 217, 0.24) -5.39%, rgba(217, 217, 217, 0.12) 108.05%)",
  backdropFilter: "blur(47.4479px)",
  pl: 3,
  pt: 5,
  pr: 2,
  pb: 2,
  mx: { xs: "auto", md: 0 },
  marginLeft: "auto",
  width: "min(441px, 100%)",
  borderRadius: "6px",
  backdropFilter: "blur(2px)",
  color: "primary.light",
  display: "flex",
  alignItems: "center",
  gap: 2,
};

export default function AdvantageSection() {
  return (
    <Box component="section" sx={sectionStyle}>
      <Container
        maxWidth="lg"
        sx={{
          textAlign: InitiativeSectionConfigData.textAlign
            ? InitiativeSectionConfigData.textAlign
            : "left",
          backgroundImage: InitiativeSectionConfigData.backgroundImage,
          backgroundSize: "100%",
          backgroundPosition: "top left",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Grid container spacing={2} maxWidth="lg">
          <Grid
            item
            xs={12}
            md={7}
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            {InitiativeSectionConfigData.title && (
              <Typography
                component={
                  InitiativeSectionConfigData.titleComponent
                    ? InitiativeSectionConfigData.titleComponent
                    : "h2"
                }
                variant={
                  InitiativeSectionConfigData.titleVariant
                    ? InitiativeSectionConfigData.titleVariant
                    : "h2"
                }
                color="inherit"
                sx={{
                  maxWidth: "min(625px, 100%)",
                }}
              >
                {InitiativeSectionConfigData.title}
              </Typography>
            )}
            {InitiativeSectionConfigData.description && (
              <Typography
                component="p"
                variant="body1"
                color="inherit"
                sx={
                  InitiativeSectionConfigData.descriptionStyle
                    ? InitiativeSectionConfigData.descriptionStyle
                    : {
                        pt: 2,
                      }
                }
              >
                {InitiativeSectionConfigData.description}
              </Typography>
            )}
            {InitiativeSectionConfigData.ctas &&
              InitiativeSectionConfigData.ctas.length > 0 && (
                <Box
                  sx={{
                    display: "flex",
                    gap: 2,
                    pt: 8,
                  }}
                >
                  {InitiativeSectionConfigData.ctas.map((cta, index) => (
                    <Button
                      key={index}
                      text={cta.title && cta.title}
                      href={cta.url && cta.url}
                      icon={cta.icon && cta.icon}
                      target={cta.target && cta.target}
                      disabled={cta.disabled && cta.disabled}
                      variant={cta.variant && cta.variant}
                    />
                  ))}
                </Box>
              )}
          </Grid>
          <Grid item xs={12} md={5}>
            {InitiativeSectionConfigData.initiatives &&
              InitiativeSectionConfigData.initiatives.length > 0 && (
                <Box
                  sx={{
                    display: "flex",
                    gap: "10px",
                    flexDirection: "column",
                    mt: { xs: 8, md: 0 },
                  }}
                >
                  {InitiativeSectionConfigData.initiatives.map(
                    (initiative, index) => (
                      <Card key={index} sx={listStyle}>
                        {initiative.icon &&
                          (typeof initiative.icon === "string" ? (
                            <CardMedia
                              src={initiative.icon}
                              alt={initiative.title}
                              title={initiative.title}
                            />
                          ) : (
                            initiative.icon
                          ))}
                        <CardContent sx={{ padding: "0" }}>
                          <Typography
                            variant="h6"
                            component="h6"
                            color="inherit"
                          >
                            {initiative.title && initiative.title}
                          </Typography>
                          <Typography
                            variant="body2"
                            component="p"
                            sx={{ pt: 3 }}
                          >
                            {initiative.description && initiative.description}
                          </Typography>
                        </CardContent>
                      </Card>
                    )
                  )}
                </Box>
              )}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
