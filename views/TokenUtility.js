import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import Section from "../components/Section";

const tokenUtilityConfigData = {
  title: "$MNTL Token Utility",
  description:
    "AssetMantle’s foundation is built using the best-in-class core blockchain principles, and optimized for the next evolution of NFT economy",
  options: [
    {
      icon: "/images/tokenUtility/governance.svg",
      title: "Governance",
      description:
        "$MNTL token is required as a deposit to create on-chain governance proposals. The token holders can then vote on these proposals with their staked $MNTL. It also has in-built security against drastic protocol changes to make it more incremental.",
    },
    {
      icon: "/images/tokenUtility/secure.svg",
      title: "Network Security",
      description:
        "MantleChain, runs on the Tendermint core, a dPoS (delegated Proof-of-Stake) based pBFT (Practical Byzantine Fault Tolerance) consensus engine. The token holders can get incentivized delegating their tokens to validators of their choice, improving security.",
    },
    {
      icon: "/images/tokenUtility/Transactions.svg",
      title: "NFT Transactions",
      description:
        "$MNTL will be used to pay for transaction fees, platform commission, and creator royalties. The token will also be used for the curation of the platform (via curation DAO) which plays an integral role in an NFT marketplace governance.",
    },
    {
      icon: "/images/tokenUtility/Incentive.svg",
      title: "Economic Incentive",
      description:
        "Initially, the token will also help bootstrap genesis creators, early adopters, early stakers. Post genesis will have campaigns to bootstrap the creators, liquidity providers, NFT minting & trading activities in several batches, and curator communities.",
    },
  ],
};

export default function TokenUtility() {
  return (
    <Section
      title={tokenUtilityConfigData.title}
      subTitle={tokenUtilityConfigData.description}
    >
      <Grid container sx={{ gap: 3 }}>
        {tokenUtilityConfigData.options &&
          Array.isArray(tokenUtilityConfigData.options) &&
          tokenUtilityConfigData.options.length > 0 &&
          React.Children.toArray(
            tokenUtilityConfigData.options.map((option) => (
              <Grid item xs={12} sm={6}>
                <Paper variant="translucent">
                  <Card sx={{ background: "transparent", textAlign: "center" }}>
                    <CardMedia
                      component="img"
                      alt={option.title}
                      image={option.icon && option.icon}
                      sx={{
                        margin: "40px auto 10px",
                        border: "none",
                        width: "80px",
                        height: "auto",
                        objectPosition: "center",
                      }}
                    />
                    <CardContent>
                      <Typography variant="h3">{option.title}</Typography>
                      <Typography variant="body1" sx={{ pt: 4 }}>
                        {option.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Paper>
              </Grid>
            ))
          )}
      </Grid>
    </Section>
  );
}
