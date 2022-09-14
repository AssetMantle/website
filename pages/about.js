import React from "react";
import ExplanationSection from "../views/AboutUsExplanationSection";
import FAQSection from "../views/FAQSection";
import TokenDistribution from "../views/TokenDistribution";
import TokenInfo from "../views/TokenInfo";
import TokenUtility from "../views/TokenUtility";
import VisionMissionSection from "../views/VisionMissionSection";
import DownloadingIcon from "@mui/icons-material/Downloading";

export default function About(props) {
  return (
    <>
      <ExplanationSection
        explanationSectionData={props.explanationSectionData}
      />
      <VisionMissionSection
        visionMissionSectionData={props.visionMissionSectionData}
      />
      <TokenInfo tokenInfoConfigData={props.tokenInfoConfigData} />
      <TokenUtility />
      <TokenDistribution />
      <FAQSection />
    </>
  );
}
export async function getStaticProps() {
  const explanationSectionData = {
    question: "What is AssetMantle?",
    answer:
      "AssetMantle is a multi-tenant NFT marketplace framework that enables creators and collectors to securely mint, own, and trade digital assets on its fast-finality blockchain.",
  };
  const visionMissionSectionData = {
    title: "Vision & Mission",
    backgroundImage:
      "url(/images/hero/Mantler_Vision_Mission.png) no-repeat left center / contain",
    list: [
      {
        title: "Vision",
        info: "Build an open-source, community-driven framework for inter-chain NFTs and metadata standardization by contributing to interNFT standard",
      },
      {
        title: "Mission",
        info: " Provide a platform that enables a diverse set of NFTs use cases that extend beyond arts and collectibles and can potentially change the representation of rights and ownership of real-world assets like real estate and other comodities.",
      },
    ],
  };
  const tokenInfoConfigData = {
    title: "$MNTL Token Info",
    description:
      "Find out how the protocol token of AssetMantle chain is optimized for maximizing yield using across various DEXs",
    left: {
      title: "$MNTL",
      values: [
        {
          key: "APR",
          value: "140%",
        },
      ],
      ctas: [
        {
          title: "Airdrops",
          url: "https://airdrop.assetmantle.one/",
          endIcon: "downloading", // url: "/" or component: <Icon/>
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

  return {
    props: {
      explanationSectionData,
      visionMissionSectionData,
      tokenInfoConfigData,
    },
  };
}
