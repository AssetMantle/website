import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import CallMadeIcon from "@mui/icons-material/CallMade";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import Section from "../components/Section";

const InitiativeSectionConfigData = {
  textAlign: "center", // >>> default: left
  title: "The AssetMantle Advantage",
  titleOnLeft: false, // >>> default: false
  titleComponent: "h2",
  titleVariant: "h1",
  description: "",
  descriptionOnLeft: false, // >>> default: false
  descriptionStyle: false, // object of styles or false
  backgroundImage: "", // "url('/images/mantleplace.png')",
  leftImage: "/images/advantage/advantage_bg.png", // "url('/images/mantleplace.png')",
  ctas: [
    {
      title: "Whitepaper",
      url: "https://docs.assetmantle.one/AssetMantle_Whitepaper/",
      icon: <CallMadeIcon />, // url: "/" or component: <Icon/>
      target: "_blank", // valid values: "_blank", "_self", "_parent", "_top" >>>default: "_self"
      disabled: false,
      variant: "contained",
    },
    {
      title: "litepaper",
      url: "/litepaper.pdf",
      icon: <FileDownloadOutlinedIcon />, // url: "/" or component: <Icon/>
      target: "_blank", // valid values: "_blank", "_self", "_parent", "_top" >>>default: "_self"
      disabled: false,
      variant: "outlined",
    },
  ],
  initiatives: [
    {
      icon: "/images/advantage/multiChain.svg", // add component: <Icon sx={styles} /> or url: "https://icon.png"
      title: "Multi-Chain Access",
      description:
        "Trade NFT on other chains or show them off across metaverses",
    },
    {
      icon: "/images/advantage/highEconomical.svg", // add component: <Icon sx={styles} /> or url: "https://icon.png"
      title: "Highly Economical ROI",
      description:
        "Leverage a rich NFT Economy on an IBC enabled Cosmos Ecosystem at negligible cost",
    },
    {
      icon: "/images/advantage/multiplePayment.svg", // add component: <Icon sx={styles} /> or url: "https://icon.png"
      title: "Multiple Payment Modes",
      description:
        "Experience AssetMantle with fiat currency, coins or stablecoins",
    },
    {
      icon: "/images/advantage/noCodeCustomization.svg", // add component: <Icon sx={styles} /> or url: "https://icon.png"
      title: "No-Code Customization Engine",
      description:
        "Experience No-Code NFT Marketplace creation with plug-and-play NFT Modules",
    },
  ],
};

const listStyle = {
  background: "transparent",
  pl: { xs: 2, md: 0 },
  pr: 2,
  py: 3,
  color: "primary.light",
  display: "flex",
  flexDirection: { xs: "column", md: "row" },
  alignItems: "center",
  textAlign: { xs: "center", md: "left" },
};

export default function AdvantageSection() {
  return (
    <Section
      title={InitiativeSectionConfigData.title}
      subTitle={
        InitiativeSectionConfigData.description &&
        !InitiativeSectionConfigData.descriptionOnLeft &&
        InitiativeSectionConfigData.description
      }
    >
      <Grid container spacing={2} maxWidth="lg">
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: { xs: "center", md: "flex-start" },
            textAlign: { xs: "center", md: "left" },
            backgroundImage:
              InitiativeSectionConfigData.leftImage &&
              `url('${InitiativeSectionConfigData.leftImage}')`,
            backgroundSize: "contain",
            backgroundPosition: { xs: "center", md: "left" },
            backgroundRepeat: "no-repeat",
            aspectRatio: InitiativeSectionConfigData.leftImage && {
              xs: "2/1",
              md: "auto",
            },
          }}
        >
          {InitiativeSectionConfigData.ctas &&
            InitiativeSectionConfigData.ctas.length > 0 && (
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 2,
                  pt: 8,
                  justifyContent: "center",
                  width: "100%",
                  mt:
                    InitiativeSectionConfigData.descriptionOnLeft ||
                    InitiativeSectionConfigData.titleOnLeft
                      ? 0
                      : "auto",
                  mb:
                    InitiativeSectionConfigData.descriptionOnLeft ||
                    InitiativeSectionConfigData.titleOnLeft
                      ? 0
                      : 8,
                }}
              >
                {InitiativeSectionConfigData.ctas.map((cta, index) => (
                  <Button
                    component="a"
                    variant={cta.variant ? cta.variant : "contained"}
                    key={index}
                    size="large"
                    href={cta.url && cta.url}
                    target={cta.target && cta.target}
                    sx={{
                      borderRadius: 8,
                      // padding: "12px 34px",
                      // textTransform: "capitali ze",
                    }}
                    endIcon={cta.icon ? cta.icon : null}
                  >
                    {cta.title && cta.title}
                  </Button>
                ))}
              </Box>
            )}
        </Grid>
        <Grid item xs={12} md={6}>
          {Array.isArray(InitiativeSectionConfigData.initiatives) &&
            InitiativeSectionConfigData.initiatives &&
            InitiativeSectionConfigData.initiatives.length > 0 && (
              <Stack
                sx={{
                  gap: "10px",
                  flexDirection: "column",
                  mt: { xs: 8, md: 0 },
                  backgroundColor: "transparent",
                }}
              >
                {InitiativeSectionConfigData.initiatives.map(
                  (initiative, index) => (
                    <Paper
                      variant="translucent"
                      sx={{
                        mx: { xs: "auto", md: 0 },
                        ml: { md: "auto" },
                        width: "min(500px, 100%)",
                      }}
                    >
                      <Card key={index} sx={listStyle}>
                        {initiative.icon &&
                          (typeof initiative.icon === "string" ? (
                            <CardMedia
                              component="img"
                              image={initiative.icon}
                              alt={initiative.title}
                              title={initiative.title}
                              sx={{
                                width: "min(112px, 100%)",
                                height: "auto",
                              }}
                            />
                          ) : (
                            initiative.icon
                          ))}
                        <CardContent sx={{ padding: "0 !important" }}>
                          <Typography variant="h4" color="primary.main">
                            {initiative.title && initiative.title}
                          </Typography>
                          <Typography variant="body1" sx={{ pt: 1 }}>
                            {initiative.description && initiative.description}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Paper>
                  )
                )}
              </Stack>
            )}
        </Grid>
      </Grid>
    </Section>
  );
}
