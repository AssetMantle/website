import React from "react";
import ExplanationSection from "../views/about/ExplanationSection";
import FAQSection from "../views/about/FAQSection";
import TokenDistribution from "../views/about/TokenDistribution";
import TokenInfo from "../views/about/TokenInfo";
import TokenUtility from "../views/about/TokenUtility";
import VisionMissionSection from "../views/about/VisionMissionSection";
import TeamSection from "../views/about/TeamSection";

export default function About(props) {
  return (
    <>
      <ExplanationSection
        explanationSectionData={props.explanationSectionData}
      />
      <VisionMissionSection
        visionMissionSectionData={props.visionMissionSectionData}
      />
      <TokenInfo tokenInfoData={props.tokenInfoData} />
      <TokenUtility tokenUtilityData={props.tokenUtilityData} />
      <TokenDistribution tokenDistributionData={props.tokenDistributionData} />
      <TeamSection configData={props.teamSectionConfigData} />
      <FAQSection FAQSectionData={props.FAQSectionData} />
    </>
  );
}
export async function getStaticProps() {
  const explanationSectionData = {
    questionVariant: "h2",
    answerVariant: "subtitle2",
    question: "What is AssetMantle?",
    answer:
      "AssetMantle is a multi-tenant NFT marketplace framework that enables creators and collectors to securely mint, own, and trade digital assets on its fast-finality blockchain.",
  };
  const visionMissionSectionData = {
    paperVariant: "translucent",
    titleVariant: "h4",
    infoVariant: "subtitle2",
    title: "Vision & Mission",
    backgroundImage:
      "url(/HeroSection/hero.png) no-repeat left center / contain",
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
  const tokenInfoData = {
    title: "$MNTL Token Info",
    description:
      "Find out how the protocol token of AssetMantle chain is optimized for maximizing yield  across various DEXs",
    left: {
      titleVariant: "h3",
      titleColor: "primary.main",
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
      mntlCoinImage: "/TokenInfoSection/mntlCoin.png",
      references: [
        {
          logo: "/TokenInfoSection/CoinGeckoLogo.png",
          name: "CoinGecko",
          url: "https://www.coingecko.com/en/coins/assetmantle/usd",
          target: "_blank",
        },
        {
          logo: "/TokenInfoSection/coinMarketCap.png",
          name: "CoinMarketCap",
          url: "https://coinmarketcap.com/currencies/assetmantle/",
          target: "_blank",
        },
        {
          logo: "/TokenInfoSection/Etherscan.png",
          name: "Etherscan",
          url: "https://etherscan.io/token/0x2c4f1df9c7de0c59778936c9b145ff56813f3295",
          target: "_blank",
        },
      ],
      data: [
        {
          title: "usd",
          variant: "h4",
          textColor: "secondary.light",
          valueColor: "primary.main",
        },
        {
          title: "apy",
          variant: "h4",
          textColor: "secondary.light",
          valueColor: "primary.main",
        },
      ],
    },
    right: {
      buttonVariant: "contained",
      paperVariant: "translucent",
      textVariant: "caption",
      textColor: "primary.main",
      tableHeaders: ["", "Exchange", "Pair", "Price"],
      tokenFrom2: [
        {
          logo: "/TokenInfoSection/osmosis.png",
          name: "Osmosis",
          pair: "MNTL/OSMO",
          title: "Buy",
          subTitle: "",
          url: "https://app.osmosis.zone/?from=OSMO&to=MNTL",
          target: "_blank",
          row: 2,
          col: 1,
        },
        {
          logo: "/TokenInfoSection/osmosis.png",
          name: "Osmosis",
          pair: "MNTL/OSMO",
          title: "Earn",
          subTitle: "(OSMO Pool)",
          url: "https://app.osmosis.zone/pool/690",
          target: "_blank",
          row: 5,
          col: 3,
        },
        {
          logo: "/TokenInfoSection/Uniswap.png",
          name: "Uniswap",
          pair: "MNTL/ERC20",
          title: "Buy",
          subTitle: "ERC20",
          url: "https://app.uniswap.org/#/swap?theme=dark&inputCurrency=ETH&outputCurrency=0x2c4f1df9c7de0c59778936c9b145ff56813f3295",
          target: "_blank",
          row: 4,
          col: 1,
        },
        {
          logo: "/TokenInfoSection/Uniswap.png",
          name: "Uniswap",
          pair: "MNTL/ERC20",
          title: "Earn",
          subTitle: "(ETH Pool)",
          url: "https://app.uniswap.org/#/add/ETH/0x2C4F1DF9c7DE0C59778936C9b145fF56813F3295/3000",
          target: "_blank",
          row: 4,
          col: 5,
        },

        {
          logo: "/TokenInfoSection/osmosis.png",
          name: "LBank",
          pair: "MNTL/USDT",
          title: "Buy",
          subTitle: "",
          url: "https://www.lbank.info/exchange/mntl/usdt",
          target: "_blank",
          row: 2,
          col: 1,
        },
        {
          logo: "/TokenInfoSection/Uniswap.png",
          name: "MEXC Global",
          pair: "MNTL/USDT",
          title: "Buy",
          subTitle: "ERC20",
          url: "https://www.mexc.com/exchange/MNTL_USDT?inviteCode=1498J",
          target: "_blank",
          row: 4,
          col: 1,
        },
        {
          logo: "/TokenInfoSection/osmosis.png",
          name: "P2B",
          pair: "MNTL/USDT",
          title: "Buy",
          subTitle: "(USDC Pool)",
          url: "https://p2pb2b.com/trade/MNTL_USDT/",
          target: "_blank",
          row: 1,
          col: 3,
        },
        {
          logo: "/TokenInfoSection/osmosis.png",
          name: "Coinsbit",
          pair: "MNTL/USDT",
          title: "Buy",
          subTitle: "(USDC Pool)",
          url: "https://coinsbit.io/trade/MNTL_USDT",
          target: "_blank",
          row: 1,
          col: 3,
        },
      ],
    },
  };
  const tokenUtilityData = {
    title: "$MNTL Token Utility",
    paperVariant: "translucent",
    optionsTitleVariant: "h4",
    optionsDescriptionVariant: "body2",
    optionsColor: "primary.light",
    description:
      "AssetMantle's protocol token is created using latest best practices for tokenization, realizing multiple types of utilities for its holder",
    options: [
      {
        icon: "/TokenUtilitySection/governance.svg",
        title: "Governance",
        description:
          "$MNTL token is required as a deposit to create on-chain governance proposals. The token holders can then vote on these proposals with their staked $MNTL. It also has in-built security against drastic protocol changes to make it more incremental.",
      },
      {
        icon: "/TokenUtilitySection/secure.svg",
        title: "Network Security",
        description:
          "MantleChain, runs on the Tendermint core, a dPoS (delegated Proof-of-Stake) based pBFT (Practical Byzantine Fault Tolerance) consensus engine. The token holders can get incentivized delegating their tokens to validators of their choice, improving security.",
      },
      {
        icon: "/TokenUtilitySection/Transactions.svg",
        title: "NFT Transactions",
        description:
          "$MNTL will be used to pay for transaction fees, platform commission, and creator royalties. The token will also be used for the curation of the platform (via curation DAO) which plays an integral role in an NFT marketplace governance.",
      },
      {
        icon: "/TokenUtilitySection/Incentive.svg",
        title: "Economic Incentive",
        description:
          "Initially, the token will also help bootstrap genesis creators, early adopters, early stakers. Post genesis will have campaigns to bootstrap the creators, liquidity providers, NFT minting & trading activities in several batches, and curator communities.",
      },
    ],
  };
  const tokenDistributionData = {
    title: "$MNTL Token Distribution",
    description:
      "Find out the crucial tokenomics pertaining to the protocol token of AssetMantle, optimizing it for long term value creation",
    chart: "/TokenDistributionSection/releaseSchedule.svg",
    chartName: "Release Schedule",
    paperVariant: "translucent",
    numberVariant: "h4",
    titleVariant: "body1",
    numberColor: "primary.main",
    overview: {
      genesis: {
        title: "Total Genesis Supply",
        number: "300M",
      },
      circular: {
        title: "Total Circulating Supply",
        number: "78M",
      },
      description:
        "At genesis, 26% (78 million $MNTL) of the supply will be circulating to bootstrap liquidity and incentivize the early adopters of the platform.",
    },
    pies: [
      {
        chart: "/TokenDistributionSection/genesisSupply.svg",
        name: "Genesis Supply",
      },
      {
        chart: "/TokenDistributionSection/circulatingSupply.svg",
        name: "Circulating Supply",
      },
    ],
  };
  const teamSectionConfigData = {
    memberColor: "primary.main",
    textAlign: "center", // >>> default: left
    title: "Meet our team",
    titleComponent: "h2",
    titleVariant: "h1",
    description:
      "Browse through the highly skilled and qualified AssetMantle cohort who make the scalable value creation happen",
    descriptionStyle: {
      mt: 4,
      mx: "auto",
      maxWidth: "min(836px, 100%)",
      margin: "0 auto",
    }, // object of styles or false
    descriptionVariant: "subtitle2",
    nameVariant: "subtile2",
    nameColor: "primary.main",
    designationVariant: "body2",
    designationColor: "primary.light",
    members: [
      // object template
      // {
      //   image: "/TeamSection/https://assetmantle.one/images/team/deepanshu.png",
      //   name: "Deepanshu Kumar",
      //   designation: "Founder, Core - Product Planning & Implementation​",
      //   designationType: "",
      //   social: [
      //     {
      //       icon: "LinkedIn",
      //       href: "",
      //     },
      //     {
      //       icon: "Twitter",
      //       href: "",
      //     },
      //     {
      //       icon: "GitHub",
      //       href: "",
      //     },
      //     {
      //       icon: "Behance",
      //       href: "",
      //     },
      //     {
      //       icon: "Website",
      //       href: "",
      //     },
      //   ],
      // },
      {
        image: "/TeamSection/deepanshu.png",
        name: "Deepanshu Tripathi",
        designation: "Founder & Chief Executive Officer",
        designationType: "Founding",
        social: [
          {
            icon: "LinkedIn",
            href: "http://linkedin.com/in/deepanshutr",
          },
          {
            icon: "Twitter",
            href: "https://twitter.com/deepanshutr",
          },
          {
            icon: "GitHub",
            href: "https://github.com/deepanshutr",
          },
        ],
      },
     /*  {
        image: "/TeamSection/abhinav.png",
        name: "Abhinav Kumar",
        designation: "Co-Founder & Chief Product Officer",
        designationType: "Founding",
        social: [
          {
            icon: "LinkedIn",
            href: "https://www.linkedin.com/in/avkr003/",
          },
          {
            icon: "Twitter",
            href: "https://twitter.com/avkr003",
          },
          {
            icon: "GitHub",
            href: "https://github.com/avkr003",
          },
        ],
      }, */
      {
        image: "/TeamSection/kamlesh.png",
        name: "Kamlesh Parikarath",
        designation: "Co-Founder & Chief Technology Officer",
        designationType: "Founding",
        social: [
          {
            icon: "LinkedIn",
            href: "https://www.linkedin.com/in/kamleshparikarath/",
          },
          {
            icon: "Twitter",
            href: "https://twitter.com/0xKombos",
          },
          {
            icon: "GitHub",
            href: "https://github.com/kombos",
          },
          {
            icon: "Behance",
            href: "https://www.behance.net/kombos",
          },
        ],
      },
      {
        image: "/TeamSection/aman.png",
        name: "Aman Tripathi",
        designation: "Chief Innovation Officer​",
        designationType: "Core",
        social: [
          {
            icon: "LinkedIn",
            href: "https://www.linkedin.com/in/aman-tripathi-at/",
          },
          {
            icon: "Twitter",
            href: "https://twitter.com/TheAmanTripathi",
          },
        ],
      },
      {
        image: "/TeamSection/namaha.png",
        name: "Namaha Shetty",
        designation: "Design Strategy Head",
        designationType: "Design",
        social: [
          {
            icon: "Website",
            href: "https://www.namahashetty.com",
          },
          {
            icon: "LinkedIn",
            href: "https://www.linkedin.com/in/namahashetty/",
          },
        ],
      },
      {
        image: "/TeamSection/akhlak.png",
        name: "Akhlak Hossain",
        designation: "UI Developer",
        designationType: "Developer",
        social: [
          {
            icon: "LinkedIn",
            href: "https://www.linkedin.com/in/akhlakhossainjim/",
          },
          {
            icon: "GitHub",
            href: "http://github.com/Akhlak-Hossain-Jim",
          },
          {
            icon: "Website",
            href: "http://ahjim.com/",
          },
        ],
      },
    ],
    optionStyles: {
      background: "transparent",
      borderRadius: "12px",
      maxWidth: 227,
      height: "100%",
      boxShadow: "none",
      padding: "0",
      textAlign: { xs: "center", md: "left" },
      display: "flex",
      flexDirection: "column",
      margin: { xs: "auto", md: "0" },
    },
    linkStyles: {
      color: "primary.light",
      "&:hover": {
        color: "primary.main",
      },
    },
  };
  const FAQSectionData = {
    accordionVariant: "translucent",
    accordionTextVariant: "body1",
    list: [
      {
        title: "What is an NFT?",
        info: "NFT stands for “Non-Fungible Token”. An NFT is an immutable token on the blockchain. It is cryptographically protected and can be treated as a digital certificate of ownership on the blockchain. NFTs on AssetMantle are part of the growing Cosmos ecosystem.",
      },
      {
        title: "What is MantlePlace?",
        info: "MantlePlace is the native NFT marketplace if AssetMantle.All creators on MantlePlace are verified for authenticity in an effort to minimize instances of frauds and rug pulls.",
      },
      {
        link: {
          text: "here",
          href: "https://docs.assetmantle.one/MantleBuilder_Overview",
        },
        title: "What is MantleBuilder?",
        info: "MantleBuilder is the revolutionary no-code NFT marketplace builder from AssetMantle. It's simple drag-and-drop interface empowers creators and brands to build their robust and custom-branded NFT storefronts in the Cosmos ecosystem. Read more about MantleBuilder",
      },
      {
        title: "What is IBC Protocol?",
        info: "IBC stands for “Inter-Blockchain Communication”. It is an open-source protocol that allows sovereign blockchains in the Cosmos ecosystem to transfer assets and information among themselves. This empowers NFT creators and collectors to utilize   their NFTs across different chains and metaverses.",
      },
      {
        title: "What makes AssetMantle special?",
        info: "AssetMantle is built from the ground up to completely redefine digital asset ownership. Some noteworthy features include:",
        accordionList: [
          "Support for fractional NFTs",
          "Negligible gas fees",
          "Ledger hardware support",
          "InterNFT standard",
          "IPFS storage mechanism",
          "Cross-chain interoperability",
          "Support for multiple asset types",
          "Real-world asset tokenization",
        ],
      },
    ],
  };

  return {
    props: {
      explanationSectionData,
      visionMissionSectionData,
      tokenInfoData,
      tokenUtilityData,
      tokenDistributionData,
      teamSectionConfigData,
      FAQSectionData,
    },
  };
}
