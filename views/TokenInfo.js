import DownloadingIcon from "@mui/icons-material/Downloading";
import {
  Button,
  Card,
  CardActions,
  CardMedia,
  Grid,
  Link,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Section from "../components/Section";

const TokenInfoConfigData = {
  title: "$MNTL Token Info",
  description:
    "Find out how the protocol token of AssetMantle chain is optimized for maximizing yield using across various DEXs",
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
        endIcon: <DownloadingIcon />, // url: "/" or component: <Icon/>
        target: "_blank", // valid values: "_blank", "_self", "_parent", "_top" >>>default: "_self"
        disabled: false,
        variant: "contained",
        size: "large",
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
    tokenFrom2: [
      {
        logo: "/images/tokenInfo/osmosis.png",
        name: "Osmosis",
        title: "Buy $MNTL",
        subTitle: "",
        url: "https://app.osmosis.zone/pool/738",
        target: "_blank",
        row: 2,
        col: 1,
      },
      {
        logo: "/images/tokenInfo/Uniswap.png",
        name: "Uniswap",
        title: "Buy $MNTL",
        subTitle: "ERC20",
        url: "https://app.uniswap.org/#/swap?chain=mainnet",
        target: "_blank",
        row: 4,
        col: 1,
      },
      {
        logo: "/images/tokenInfo/osmosis.png",
        name: "Osmosis",
        title: "Buy $MNTL",
        subTitle: "(USDC Pool)",
        url: "https://app.osmosis.zone/pool/738",
        target: "_blank",
        row: 1,
        col: 3,
      },
      {
        logo: "/images/tokenInfo/mntl.png",
        name: "mntl token",
        title: "Stake Now",
        subTitle: "",
        url: "https://wallet.assetmantle.one/#all",
        target: "_blank",
        row: 3,
        col: 3, // valid values: "_blank", "_self", "_parent", "_top" >>>default: "_self"
      },
      {
        logo: "/images/tokenInfo/osmosis.png",
        name: "Osmosis",
        title: "Earn $MNTL",
        subTitle: "(OSMO Pool)",
        url: "https://app.osmosis.zone/pool/690",
        target: "_blank",
        row: 5,
        col: 3,
      },
      {
        logo: "/images/tokenInfo/osmosis.png",
        name: "Osmosis",
        title: "Buy $MNTL",
        subTitle: "(ATOM Pool)",
        url: "https://app.osmosis.zone/pool/686",
        target: "_blank",
        row: 2,
        col: 5,
      },
      {
        logo: "/images/tokenInfo/Uniswap.png",
        name: "Uniswap",
        title: "Earn $MNTL ERC20",
        subTitle: "(ETH Pool)",
        url: "https://app.uniswap.org/#/add/ETH/0x2C4F1DF9c7DE0C59778936C9b145fF56813F3295/3000",
        target: "_blank",
        row: 4,
        col: 5,
      },
    ],
  },
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
            <Box
              sx={{
                width: "min(204px, 100%)",
              }}
            >
              <img
                src="/images/tokenInfo/mntlCoin.png"
                alt="MNTL token illustration"
                style={{
                  width: "100%",
                  height: "auto",
                  objectPosition: "center",
                }}
              />
            </Box>
            <Stack direction="column" spacing={3}>
              <Typography variant="h2" color="primary.main">
                {TokenInfoConfigData.left.title &&
                  TokenInfoConfigData.left.title}
              </Typography>
              <Stack>
                {TokenInfoConfigData.left.values &&
                  Array.isArray(TokenInfoConfigData.left.values) &&
                  TokenInfoConfigData.left.values.length > 0 &&
                  React.Children.toArray(
                    TokenInfoConfigData.left.values.map((value) => (
                      <Typography
                        component="span"
                        sx={{ display: "inline" }}
                        variant="h4"
                        color="secondary.light"
                      >
                        {value.key}:{" "}
                        <Typography
                          sx={{ display: "inline" }}
                          variant="h4"
                          color="primary.main"
                        >
                          {value.value}
                        </Typography>
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
                        size={cta.size}
                        href={cta.url && cta.url}
                        target={cta.target && cta.target}
                        endIcon={cta.endIcon ? cta.endIcon : null}
                      >
                        {cta.title}
                      </Button>
                    ))
                  )}
              </Stack>
              <Stack direction="row" spacing={2.5}>
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
                  <Paper
                    variant="translucent"
                    sx={{
                      gridColumn: `${token.col} / span 3`,
                      gridRow: `${token.row} / span 2`,
                      clipPath:
                        "polygon(30% 0%, 70% 0%, 95% 50%, 70% 100%, 30% 100%, 5% 50%)",
                    }}
                  >
                    <Card
                      sx={{
                        aspectRatio: "5/4",
                        background: "transparent",
                        boxShadow: "none",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        textAlign: "center",
                        flexDirection: "column",
                      }}
                    >
                      <CardMedia
                        component="img"
                        alt={token.name}
                        image={token.logo && token.logo}
                        sx={{
                          margin: "0 auto",
                          border: "none",
                          width: "30%",
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
                  </Paper>
                ))
              )}
          </Box>
        </Grid>
      </Grid>
    </Section>
  );
}
