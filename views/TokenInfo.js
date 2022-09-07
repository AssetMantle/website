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
        title: "Stake Now",
        url: "https://wallet.assetmantle.one/#all",
        endIcon: <CallMadeIcon />, // url: "/" or component: <Icon/>
        target: "_blank", // valid values: "_blank", "_self", "_parent", "_top" >>>default: "_self"
        disabled: false,
        variant: "contained",
      },
      {
        title: "Airdrops",
        url: "https://airdrop.assetmantle.one/",
        endIcon: <CallMadeIcon />, // url: "/" or component: <Icon/>
        target: "_blank", // valid values: "_blank", "_self", "_parent", "_top" >>>default: "_self"
        disabled: false,
        variant: "outlined",
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
    tokenFrom: [
      {
        logo: "/images/tokenInfo/osmosis.png",
        name: "Osmosis",
        title: "Buy $MNTL>",
        subTitle: "",
        url: "https://app.osmosis.zone/pool/738",
        target: "_blank",
      },
      {
        logo: "/images/tokenInfo/osmosis.png",
        name: "Osmosis",
        title: "Buy $MNTL>",
        subTitle: "(USDC Pool)",
        url: "https://app.osmosis.zone/pool/738",
        target: "_blank",
      },
      {
        logo: "/images/tokenInfo/osmosis.png",
        name: "Osmosis",
        title: "Buy $MNTL>",
        subTitle: "(ATOM Pool)",
        url: "",
        target: "_blank",
      },
      {
        logo: "/images/tokenInfo/Uniswap.png",
        name: "Uniswap",
        title: "Buy $MNTL>",
        subTitle: "ECR 20",
        url: "",
        target: "_blank",
      },
      {
        logo: "/images/tokenInfo/Uniswap.png",
        name: "Uniswap",
        title: "Earn $MNTL ERC 20>",
        subTitle: "(ETH Pool)",
        url: "",
        target: "_blank",
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
  },
};

export default function TokenInfo() {
  return (
    <Section
      title={TokenInfoConfigData.title}
      subTitle={TokenInfoConfigData.description}
    >
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Stack direction="row" spacing={3} alignItems="center">
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
              <Stack direction="row" spacing={2}>
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
        <Grid item xs={12} md={6}>
          <Grid container spacing={1}>
            {TokenInfoConfigData.right.tokenFrom &&
              Array.isArray(TokenInfoConfigData.right.tokenFrom) &&
              TokenInfoConfigData.right.tokenFrom.length > 0 &&
              React.Children.toArray(
                TokenInfoConfigData.right.tokenFrom.map((token) => (
                  <Grid item xs={12} sm={6} md={4}>
                    <Card
                      sx={{
                        width: "max-content",
                        margin: "auto",
                        background: "transparent",
                        boxShadow: "none",
                      }}
                    >
                      <CardMedia
                        component="img"
                        alt={token.name}
                        image={token.logo && token.logo}
                        sx={{
                          margin: "0 auto",
                          border: "none",
                          height: "min(90px,100%)",
                          width: "auto",
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
                  </Grid>
                ))
              )}
          </Grid>
        </Grid>
      </Grid>
    </Section>
  );
}
