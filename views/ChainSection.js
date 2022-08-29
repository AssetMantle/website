
import DownloadingIcon from "@mui/icons-material/Downloading";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import Section from "../components/Section";

const ChainSectionConfigData = {
  textAlign: "", // >>> default: left
  title: "The AssetMantle Chain",
  subTitle:
    "The AssetMantle Blockchain leverages the following web3 standards which makes it pioneer the NFT Ecosphere"
  subSectionTitle: "$MNTL",
  subSectionTitleIcon: "/images/chain/mntl.svg", // url:"/someImage.png">>> default: none
  subSectionTitleVariant: "h1",
  subSectionTitleColor: "secondary.light",
  subSectionDescription:
    "The native token which powers the AssetMantle’s NFT Economy",
  subSectionDescriptionVariant: "subtitle2",
  subSectionDescriptionColor: "secondary.light",
  subSectionDescriptionStyle: {
    textAlign: { xs: "center" },
    mx: { xs: "auto !important", sm: "0 !important" },
    maxWidth: "400px",
  }, // object of styles or false
  backgroundImage: "", // "url('/images/mantleplace.png')",
  defaultChainDescription:
    "One of the pioneering zones of the rich Cosmos Ecosystem ",
  ctas: [
    {
      title: "Buy Now ",
      url: "https://app.osmosis.zone/?from=USDC&to=MNTL",

      icon: <ShoppingCartIcon />, // url: "/" or component: <Icon/>
      target: "_blank", // valid values: "_blank", "_self", "_parent", "_top" >>>default: "_self"
      disabled: false,
      variant: "contained",
    },
    {
      title: "Airdrops",
      url: "https://airdrop.assetmantle.one/",

      icon: <DownloadingIcon />, // url: "/" or component: <Icon/>

      target: "_blank", // valid values: "_blank", "_self", "_parent", "_top" >>>default: "_self"
      disabled: false,
      variant: "outlined",
    },
  ],
  chains: [
    {

      icon: "/images/chain/cosmos.svg", // add url: "https://icon.png"
      alt: "modular",
      title: "Implements modular framework from the popular Cosmos SDK",
    },
    {
      icon: "/images/chain/modular.svg", // add url: "https://icon.png"
      alt: "cosmos",
      title: "Imbibes the leading Tendermint BFT Consensus Engine",
    },
    {
      icon: "/images/chain/connected.svg", // add url: "https://icon.png"
      alt: "connected",

      title: "Incorporates connectedness with Cosmos Zones using IBC",
    },
    {
      icon: "/images/chain/interNft.svg", // add url: "https://icon.png"
      alt: "internft",
Instills the plan to build open standards for interchain NFT",

      title: "Inherits the plan to build open standards for interchain NFT",
    },
  ],
};

export default function ChainSection() {
  const [showDescription, setShowDescription] = useState();

  return (
    <Section
      title={ChainSectionConfigData.title}
      subTitle={ChainSectionConfigData.subTitle}
    >

      <Grid container spacing={2} backgroundColor="transparent">
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "transparent",
          }}
        >
          {/* Left Sub-section */}
          <Stack
            spacing={2}
            direction="column"
            maxWidth="400px"

            display="flex"
            alignItems="center"
            justifyContent="center"
            backgroundColor="transparent"
          >
            {Array.isArray(ChainSectionConfigData.chains) &&
              ChainSectionConfigData.chains &&
              ChainSectionConfigData.chains.length > 0 && (
                <Grid container spacing={0}>
                  {ChainSectionConfigData.chains.map((data, index) => (
                    <Grid
                      item
                      xs={6}
                      justifyContent="center"
                      sx={{
                        backgroundColor: "transparent",
                        display: "flex",
                        alignItems: "center",

                        cursor: "pointer",
                      }}
                      zeroMinWidth
                      key={index}
                      onBlur={() => setShowDescription()}
                      onFocus={() => setShowDescription(index + 1)}
                      onMouseOver={() => setShowDescription(index + 1)}
                      onMouseOut={() => setShowDescription()}
                    >

                      <img src={data.icon} alt={data.alt} width="90%" />
                    </Grid>
                  ))}
                </Grid>
              )}
            <Typography
              variant="subtitle2"
              color="primary.main"
              textAlign="center"
              sx={{
                maxWidth: "380px",
              }}
            >
              {showDescription
                ? ChainSectionConfigData.chains[showDescription - 1].title
                : ChainSectionConfigData.defaultChainDescription}
            </Typography>
          </Stack>
        </Grid>

        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "transparent",
          }}
        >
          {/* Right Sub-section */}
          <Stack
            spacing={2}
            width="100%"
            direction="column"
            sx={{
              py: 4,
              display: "flex",
              flexGrow: 1,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "transparent",
            }}
          >
            <Stack
              spacing={2}
              direction="row"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "transparent",
              }}
            >
              {ChainSectionConfigData.subSectionTitleIcon && (
                <img
                  src={ChainSectionConfigData.subSectionTitleIcon}
                  alt={
                    ChainSectionConfigData.subSectionTitle &&
                    ChainSectionConfigData.subSectionTitle
                  }
                  style={{ width: "50%" }}
                />
              )}
              {ChainSectionConfigData.subSectionTitle && (
                <Typography
                  variant={
                    ChainSectionConfigData.subSectionTitleVariant || "h1"
                  }
                  color={
                    ChainSectionConfigData.subSectionTitleColor ||
                    "primary.main"
                  }
                >
                  {ChainSectionConfigData.subSectionTitle}
                </Typography>
              )}
            </Stack>
            {ChainSectionConfigData.subSectionDescription && (
              <Typography
                variant={
                  ChainSectionConfigData.subSectionDescriptionVariant || "body1"
                }
                color={
                  ChainSectionConfigData.subSectionDescriptionColor ||
                  "secondary.main"
                }
                sx={
                  ChainSectionConfigData.subSectionDescriptionStyle &&
                  ChainSectionConfigData.subSectionDescriptionStyle
                }
              >
                {ChainSectionConfigData.subSectionDescription}
              </Typography>
            )}
            {ChainSectionConfigData.ctas &&
              ChainSectionConfigData.ctas.length > 0 && (
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 2,
                    pt: 3,
                    justifyContent: { xs: "center" },
                  }}
                >
                  {ChainSectionConfigData.ctas.map((cta, index) => (
                    <Button
                      component="a"
                      variant={cta.variant ? cta.variant : "contained"}
                      key={index}
                      size="large"
                      href={cta.url && cta.url}
                      target={cta.target && cta.target}

                      endIcon={cta.icon ? cta.icon : null}
                    >
                      {cta.title && cta.title}
                    </Button>
                  ))}
                </Box>
              )}
          </Stack>
        </Grid>
      </Grid>
    </Section>
  );
}
