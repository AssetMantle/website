import {
  Box,
  Button,
  Card,
  CardMedia,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CallMadeIcon from "@mui/icons-material/CallMade";

const ChainSectionConfigData = {
  textAlign: "", // >>> default: left
  title: "$MNTL",
  titleIcon: "/images/chain/mntl.svg", // url:"/someImage.png">>> default: none
  titleComponent: "h2",
  titleVariant: "h2",
  description: "The native token which powers the AssetMantle’s NFT Economy",
  descriptionStyle: {
    maxWidth: "450px",
    fontWeight: "400",
    textAlign: { xs: "center", sm: "left" },
    mx: { xs: "auto !important", sm: "0 !important" },
  }, // object of styles or false
  backgroundImage: "", // "url('/images/mantleplace.png')",
  defaultChainDescription: "Part of Rich Cosmos Ecosystem",
  ctas: [
    {
      title: "Buy Now ",
      url: "https://app.osmosis.zone/?from=USDC&to=MNTL",
      icon: <ArrowForwardIosIcon />, // url: "/" or component: <Icon/>
      target: "_blank", // valid values: "_blank", "_self", "_parent", "_top" >>>default: "_self"
      disabled: false,
      variant: "contained",
    },
    {
      title: "Airdrops",
      url: "https://airdrop.assetmantle.one/",
      icon: <CallMadeIcon />, // url: "/" or component: <Icon/>
      target: "_blank", // valid values: "_blank", "_self", "_parent", "_top" >>>default: "_self"
      disabled: false,
      variant: "outlined",
    },
  ],
  chains: [
    {
      icon: "/images/chain/modular.svg", // add url: "https://icon.png"
      title: "Inherits modular framework of Cosmos SDK",
    },
    {
      icon: "/images/chain/cosmos.svg", // add url: "https://icon.png"
      title: "Imbibes the leading BFT Consensus Engine",
    },
    {
      icon: "/images/chain/connected.svg", // add url: "https://icon.png"
      title: "Implements connectedness across other Cosmos Zones",
    },
    {
      icon: "/images/chain/interNft.svg", // add url: "https://icon.png"
      title: "Instills the plan to build open standards for interchain NFT",
    },
  ],
};

const sectionStyle = {
  my: 10,
  py: 4,
  color: "primary.light",
  textAlign: { xs: "center", sm: "center", md: "left" },
};

export default function ChainSection() {
  const [showDescription, setShowDescription] = React.useState();

  return (
    <Box component="section" sx={sectionStyle}>
      <Container
        maxWidth="lg"
        sx={{
          textAlign: ChainSectionConfigData.textAlign
            ? ChainSectionConfigData.textAlign
            : "left",
        }}
      >
        <Grid container spacing={2}>
          {/* Left Sub-section */}
          <Grid item xs={12} sm={6}>
            <Stack spacing={2}>
              {Array.isArray(ChainSectionConfigData.chains) &&
                ChainSectionConfigData.chains &&
                ChainSectionConfigData.chains.length > 0 && (
                  <Grid container>
                    {ChainSectionConfigData.chains.map((data, index) => (
                      <Grid
                        item
                        xs={6}
                        sx={{ margin: "-12px" }}
                        key={index}
                        onBlur={() => setShowDescription()}
                        onFocus={() => setShowDescription(index)}
                        onMouseOver={() => setShowDescription(index)}
                        onMouseOut={() => setShowDescription()}
                      >
                        <Card
                          sx={{
                            backgroundColor: "transparent",
                            boxShadow: "none",
                          }}
                        >
                          <CardMedia
                            component="img"
                            alt={data.title && data.title}
                            image={data.icon && data.icon}
                            title={data.title && data.title}
                            sx={{
                              width: "min(244px,100%)",
                              height: "auto",
                            }}
                          />
                        </Card>
                      </Grid>
                    ))}
                  </Grid>
                )}
              {showDescription ? (
                <Typography
                  variant="body2"
                  color="primary.main"
                  textAlign="center"
                >
                  {ChainSectionConfigData.chains[showDescription].title}
                </Typography>
              ) : (
                <Typography
                  variant="body2"
                  color="primary.main"
                  textAlign="center"
                >
                  {ChainSectionConfigData.defaultChainDescription}
                </Typography>
              )}
            </Stack>
          </Grid>

          {/* Right Sub-section */}
          <Grid item xs={12} sm={6}>
            <Stack spacing={4}>
              <Grid container alignItems="center">
                {ChainSectionConfigData.titleIcon && (
                  <Grid item xs={6}>
                    <img
                      src={ChainSectionConfigData.titleIcon}
                      alt={
                        ChainSectionConfigData.title &&
                        ChainSectionConfigData.title
                      }
                      style={{ width: "min(220px, 100%)", height: "auto" }}
                    />
                  </Grid>
                )}
                {ChainSectionConfigData.title && (
                  <Grid item xs={6}>
                    <Typography
                      variant={
                        ChainSectionConfigData.titleVariant
                          ? ChainSectionConfigData.titleVariant
                          : "h1"
                      }
                    >
                      {ChainSectionConfigData.title}
                    </Typography>
                  </Grid>
                )}
              </Grid>
              {ChainSectionConfigData.description && (
                <Typography
                  component="p"
                  variant="subtitle2"
                  color="inherit"
                  sx={
                    ChainSectionConfigData.descriptionStyle &&
                    ChainSectionConfigData.descriptionStyle
                  }
                >
                  {ChainSectionConfigData.description}
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
                      justifyContent: { xs: "center", sm: "flex-start" },
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
                        sx={{
                          borderRadius: 8,
                          fontWeight: "700",
                          // padding: "12px 34px",
                          // textTransform: "capitalize",
                        }}
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
      </Container>
    </Box>
  );
}
