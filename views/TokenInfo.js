import {
  Button,
  Card,
  CardActions,
  CardMedia,
  Grid,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import Section from "../components/Section";
import CallMadeIcon from "@mui/icons-material/CallMade";
import { Box } from "@mui/system";

const TokenInfoConfigData = {
  title: "$MNTL Token Info",
  description: "",
  left: {
    title: "$MNTL",
    values: [
      {
        key: "USD",
        value: "$0.100711",
      },
      {
        key: "APR",
        value: "140%",
      },
    ],
    ctas: [
      {
        title: "Airdrops",
        url: "https://airdrop.assetmantle.one/",
        endIcon: <CallMadeIcon />, // url: "/" or component: <Icon/>
        target: "_blank", // valid values: "_blank", "_self", "_parent", "_top" >>>default: "_self"
        disabled: false,
        variant: "contained",
      },
    ],
    references: [
      {
        logo: "/images/tokenInfo/CoinGeckoLogo.png",
        name: "CoinGecko",
        url: "https://www.coingecko.com/en/coins/assetmantle/usd",
        target: "_blank",
      },
      {
        logo: "/images/tokenInfo/coinMarketCap.png",
        name: "CoinMarketCap",
        url: "https://coinmarketcap.com/currencies/assetmantle/",
        target: "_blank",
      },
      {
        logo: "/images/tokenInfo/Etherscan.png",
        name: "Etherscan",
        url: "https://etherscan.io/token/0x2c4f1df9c7de0c59778936c9b145ff56813f3295",
        target: "_blank",
      },
    ],
  },
  right: {
    tokenFrom: {
      left: [
        {
          logo: "/images/tokenInfo/osmosis.png",
          name: "Osmosis",
          title: "Buy $MNTL>",
          subTitle: "",
          url: "https://app.osmosis.zone/pool/738",
          target: "_blank",
        },
        {
          logo: "/images/tokenInfo/Uniswap.png",
          name: "Uniswap",
          title: "Buy $MNTL>",
          subTitle: "ECR 20",
          url: "https://app.uniswap.org/#/swap?chain=mainnet",
          target: "_blank",
        },
      ],
      center: [
        {
          logo: "/images/tokenInfo/osmosis.png",
          name: "Osmosis",
          title: "Buy $MNTL>",
          subTitle: "(USDC Pool)",
          url: "https://app.osmosis.zone/pool/738",
          target: "_blank",
        },
        {
          logo: "/images/tokenInfo/mntl.png",
          name: "mntl token",
          title: "Stake Now >",
          subTitle: "",
          url: "https://wallet.assetmantle.one/#all",
          target: "_blank", // valid values: "_blank", "_self", "_parent", "_top" >>>default: "_self"
        },
        {
          logo: "/images/tokenInfo/osmosis.png",
          name: "Osmosis",
          title: "Earn $MNTL>",
          subTitle: "(OSMO Pool)",
          url: "https://app.osmosis.zone/pool/690",
          target: "_blank",
        },
      ],
      right: [
        {
          logo: "/images/tokenInfo/osmosis.png",
          name: "Osmosis",
          title: "Buy $MNTL>",
          subTitle: "(ATOM Pool)",
          url: "https://app.osmosis.zone/pool/686",
          target: "_blank",
        },
        {
          logo: "/images/tokenInfo/Uniswap.png",
          name: "Uniswap",
          title: "Earn $MNTL ERC 20>",
          subTitle: "(ETH Pool)",
          url: "https://app.uniswap.org/#/add/ETH/0x2C4F1DF9c7DE0C59778936C9b145fF56813F3295/3000",
          target: "_blank",
        },
      ],
    },
    tokenFrom2: [
      {
        logo: "/images/tokenInfo/osmosis.png",
        name: "Osmosis",
        title: "Buy $MNTL>",
        subTitle: "",
        url: "https://app.osmosis.zone/pool/738",
        target: "_blank",
        row: 2,
        col: 1,
      },
      {
        logo: "/images/tokenInfo/Uniswap.png",
        name: "Uniswap",
        title: "Buy $MNTL>",
        subTitle: "ECR 20",
        url: "https://app.uniswap.org/#/swap?chain=mainnet",
        target: "_blank",
        row: 4,
        col: 1,
      },
      {
        logo: "/images/tokenInfo/osmosis.png",
        name: "Osmosis",
        title: "Buy $MNTL>",
        subTitle: "(USDC Pool)",
        url: "https://app.osmosis.zone/pool/738",
        target: "_blank",
        row: 1,
        col: 3,
      },
      {
        logo: "/images/tokenInfo/mntl.png",
        name: "mntl token",
        title: "Stake Now >",
        subTitle: "",
        url: "https://wallet.assetmantle.one/#all",
        target: "_blank",
        row: 3,
        col: 3, // valid values: "_blank", "_self", "_parent", "_top" >>>default: "_self"
      },
      {
        logo: "/images/tokenInfo/osmosis.png",
        name: "Osmosis",
        title: "Earn $MNTL>",
        subTitle: "(OSMO Pool)",
        url: "https://app.osmosis.zone/pool/690",
        target: "_blank",
        row: 5,
        col: 3,
      },
      {
        logo: "/images/tokenInfo/osmosis.png",
        name: "Osmosis",
        title: "Buy $MNTL>",
        subTitle: "(ATOM Pool)",
        url: "https://app.osmosis.zone/pool/686",
        target: "_blank",
        row: 2,
        col: 5,
      },
      {
        logo: "/images/tokenInfo/Uniswap.png",
        name: "Uniswap",
        title: "Earn $MNTL ERC 20>",
        subTitle: "(ETH Pool)",
        url: "https://app.uniswap.org/#/add/ETH/0x2C4F1DF9c7DE0C59778936C9b145fF56813F3295/3000",
        target: "_blank",
        row: 4,
        col: 5,
      },
    ],
  },
};

const cardContainer = {
  display: "flex",
  flexDirection: "column",
  gap: 1,
  "&:nth-child(2)": {
    mx: "-52px",
  },
};

const cardStyle = {
  width: "min(250px,100%)",
  background: "transparent",
  aspectRatio: "1/1",
  boxShadow: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  flexDirection: "column",
  "&:first-child": {
    marginTop: "auto",
  },
  "&:last-child": {
    marginBottom: "auto",
  },
  backgroundImage: "url(/images/tokenInfo/Polygon.png)",
  backgroundSize: "100% 100%",
  backgroundRepeat: "no-repeat",
};

export default function TokenInfo() {
  return (
    <Section
      title={TokenInfoConfigData.title}
      subTitle={TokenInfoConfigData.description}
    >
      <Grid container spacing={{ xs: 0, md: 3 }}>
        <Grid
          item
          xs={12}
          md={5}
          sx={{
            display: "flex",
            justifyContent: { xs: "center", sm: "start" },
            textAlign: { xs: "center", sm: "left" },
          }}
        >
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={3}
            alignItems="center"
            justifyContent={{ xs: "center", sm: "start" }}
            sx={{ my: "auto" }}
          >
            <img
              src="/images/tokenInfo/mntlCoin.png"
              alt="MNTL token illustration"
              style={{
                width: "min(204px, 100%)",
                height: "auto",
                objectPosition: "center",
              }}
            />
            <Stack direction="column" spacing={3}>
              <Typography variant="h2">
                {TokenInfoConfigData.left.title &&
                  TokenInfoConfigData.left.title}
              </Typography>
              <Stack>
                {TokenInfoConfigData.left.values &&
                  Array.isArray(TokenInfoConfigData.left.values) &&
                  TokenInfoConfigData.left.values.length > 0 &&
                  React.Children.toArray(
                    TokenInfoConfigData.left.values.map((value) => (
                      <Typography variant="body1" fontWeight={400}>
                        {value.key}: {value.value}
                      </Typography>
                    ))
                  )}
              </Stack>
              <Stack
                direction="row"
                spacing={2}
                justifyContent={{ xs: "center", sm: "start" }}
              >
                {TokenInfoConfigData.left.ctas &&
                  Array.isArray(TokenInfoConfigData.left.ctas) &&
                  TokenInfoConfigData.left.ctas.length > 0 &&
                  React.Children.toArray(
                    TokenInfoConfigData.left.ctas.map((cta) => (
                      <Button
                        component="a"
                        variant={cta.variant ? cta.variant : "contained"}
                        size="medium"
                        href={cta.url && cta.url}
                        target={cta.target && cta.target}
                        endIcon={cta.endIcon ? cta.endIcon : null}
                      >
                        {cta.title}
                      </Button>
                    ))
                  )}
              </Stack>
              <Stack direction="row" spacing={4}>
                {TokenInfoConfigData.left.references &&
                  Array.isArray(TokenInfoConfigData.left.references) &&
                  TokenInfoConfigData.left.references.length > 0 &&
                  React.Children.toArray(
                    TokenInfoConfigData.left.references.map((reference) => (
                      <Link
                        href={reference.url && reference.url}
                        target={reference.target && reference.target}
                        sx={{ width: "45px" }}
                      >
                        <img
                          src={reference.logo && reference.logo}
                          alt={reference.name}
                          sx={{
                            width: "100%",
                            height: "auto",
                            objectPosition: "center",
                          }}
                        />
                      </Link>
                    ))
                  )}
              </Stack>
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={12} md={7}>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(7, 1fr)",
              gap: "5px",
              mt: 7,
            }}
          >
            {TokenInfoConfigData.right.tokenFrom2 &&
              Array.isArray(TokenInfoConfigData.right.tokenFrom2) &&
              TokenInfoConfigData.right.tokenFrom2.length > 0 &&
              React.Children.toArray(
                TokenInfoConfigData.right.tokenFrom2.map((token) => (
                  <Card
                    sx={{
                      aspectRatio: "5/4",
                      gridColumn: `${token.col} / span 3`,
                      gridRow: `${token.row} / span 2`,
                      background: "transparent",
                      boxShadow: "none",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      textAlign: "center",
                      flexDirection: "column",
                      backgroundImage: "url(/images/tokenInfo/Polygon.png)",
                      backgroundSize: "88% 100%",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                    }}
                  >
                    <CardMedia
                      component="img"
                      alt={token.name}
                      image={token.logo && token.logo}
                      sx={{
                        margin: "0 auto",
                        border: "none",
                        width: {
                          xs: "calc(20px + 10vmin)",
                          sm: "min(90px,100%)",
                        },
                        height: "auto",
                        objectPosition: "center",
                      }}
                    />
                    <CardActions>
                      <Link
                        href={token.url}
                        variant="caption"
                        textAlign="center"
                        underline="none"
                        fontWeight={400}
                        target={token.target && token.target}
                        fontSize={{ xs: "60%", md: "90%" }}
                      >
                        {token.title && token.title}
                        {
                          <>
                            <br />
                            {token.subTitle && token.subTitle}
                          </>
                        }
                      </Link>
                    </CardActions>
                  </Card>
                ))
              )}
          </Box>
        </Grid>
      </Grid>
    </Section>
  );
}
