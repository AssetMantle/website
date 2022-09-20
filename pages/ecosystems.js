import React from "react";
import CollabsHeroSection from "../views/CollabsHeroSection";
import CollabsSection from "../views/CollabsSection";

export default function Ecosystems(props) {
  return (
    <div>
      <CollabsHeroSection configData={props.collabsHeroSectionConfigData} />
      <CollabsSection configData={props.collabsSectionConfigData} />
    </div>
  );
}
export async function getStaticProps() {
  const collabsHeroSectionConfigData = {
    titleVariant: "h1",
    subTitleVariant: "secondary.light",
    titleColor: "subtitle2",
    subTitleColor: "primary.main",
    title: "Mantle Universe",
    subTitle:
      "Experience the first NFT marketplace with blockchain based identity",
    image: "/CollabsHeroSection/mantleUniverse.png",
  };
  const collabsSectionConfigData = {
    cardVariant: "translucent",
    textFieldVariant: "outlined",
    nameVariant: "h4",
    nameColor: "primary.main",
    filterColor: "primary",
    descriptionVariant: "body2",
    list: [
      {
        name: "Osmosis",
        filters: [
          "MantleChain Partners",
          "Token Integration Partners",
          "MantleLabs",
        ],
        description:
          "The leading decentralized Cosmos exchange to swap, earn, and build",
      },
      {
        name: "Axelar",
        filters: ["MantleChain Partners", "MantleLabs"],
        description:
          "Axelar delivers secure cross-chain communication for Web3. ",
      },
      {
        name: "Crescent",
        filters: ["MantleChain Partners", "MantleLabs"],
        description:
          "Innovating DeFi investment through advancements in inter-blockchain technology",
      },
      {
        name: "Juno",
        filters: ["MantleChain Partners", "MantleLabs"],
        description:
          " A digital banking platform that offers a high-yield checking account",
      },
      {
        name: "Evmos",
        filters: ["MantleChain Partners", "MantleLabs"],
        description:
          "Bringing the world of Ethereum-based applications and assets to the Cosmos ecosystem",
      },
      {
        name: "Gravity Bridge",
        filters: [
          "MantleChain Partners",
          "Token Integration Partners",
          "MantleLabs",
        ],
        description:
          "An open, decentralized bridge enabling interoperability & liquidity between blockchains",
      },
      {
        name: "OKC",
        filters: ["MantleChain Partners", "MantleLabs"],
        description:
          "A high-performance, decentralized, smart contract-enabled blockchain, optimized for trading",
      },
      {
        name: "RushRaids",
        filters: ["MantleGrants", "Ecosystem Projects", "MantleLabs"],
        description:
          "First Multiplayer Battle Royale Game where you play and earn Cryptos",
      },
      {
        name: "MyriadFlow",
        filters: [
          "MantleGrants",
          "Ecosystem Projects",
          "interNFT",
          "MantleLabs",
        ],
        description:
          "An innovative platform to explore & launch NFT Experiences",
      },
      {
        name: "GlitchCandies",
        filters: ["MantleGrants", "MantleLabs"],
        description:
          "Hand made collection of evolving sculptures, minted on Cosmos ecosystem",
      },
      {
        name: "Kevin Harrison",
        filters: ["MantleGrants", "MantleLabs"],
        description:
          "A proof-of-ownership Discord bot for AssetMantle NFTs with selective access control",
      },
      {
        name: "LumosLabs",
        filters: ["MantleGrants", "MantleLabs"],
        description:
          "A world built for developers, designed to open access to Web3 opportunities",
      },
      {
        name: "Cosmostation",
        filters: ["Validators", "MantleLabs"],
        description:
          "A performant Wallet for Cosmos Hub and related zone chains",
      },
      {
        name: "Everstake",
        filters: ["Validators", "MantleLabs"],
        description:
          "The biggest decentralized staking provider in the blockchain industry",
      },
      {
        name: "Citadel.one",
        filters: ["Validators", "MantleLabs"],
        description:
          "An all-in-one staking interface with a user-friendly non-custodial platform",
      },
      {
        name: "Forbole",
        filters: ["Validators", "MantleLabs"],
        description:
          "A pioneer in building blockchain solutions, increasing accessibility to people",
      },
      {
        name: "P2P.org",
        filters: ["Validators", "MantleLabs"],
        description:
          "Helping investors compound their crypto investments through non-custodial staking",
      },
      {
        name: "DSRV",
        filters: ["Validators", "MantleLabs"],
        description:
          "Leading validator and blockchain infrastructure provider based in Seoul",
      },
      {
        name: "INFStones",
        filters: ["Validators", "MantleLabs"],
        description:
          "Build decentralized applications on more than 60 leading blockchain protocols",
      },
      {
        name: "Cros-Nest",
        filters: ["Validators", "MantleLabs"],
        description:
          "State-of-the-art distributed & redundant validator infrastructure for PoS Blockchains",
      },
      {
        name: "BlockScope",
        filters: ["Validators", "MantleLabs"],
        description:
          "A reliable Staking service in multiple chains for crypto investors",
      },
      {
        name: "Frens",
        filters: ["Validators", "MantleLabs"],
        description:
          "A community growth platform to help NFT, DAO, DeFi and blockchain gaming projects",
      },
      {
        name: "AllNodes",
        filters: ["Validators", "MantleLabs"],
        description:
          "A non-custodial platform where you can partake in Staking in over 55 protocols",
      },
      {
        name: "DroidDAO",
        filters: ["Partnerships", "MantleLabs"],
        description:
          "a DAO that aims to capitalize upon leading, crypto native opportunities",
      },
      {
        name: "NHDAO",
        filters: ["Partnerships", "MantleLabs"],
        description:
          "Web3 consultancy with optimum experience in marketing and launching of NFTs",
      },
      {
        name: "AvigationAI",
        filters: ["Partnerships", "MantleLabs"],
        description:
          "An AI specialization company that identifies potentially viral content",
      },
      {
        name: "Tanukiverse",
        filters: ["Partnerships", "Metaverse", "MantleLabs"],
        description:
          "A community driven explore-to-earn game governed by Tanuki NFTs",
      },
      {
        name: "Vorlds",
        filters: ["Partnerships", "Metaverse", "MantleLabs"],
        description:
          "A creator based Metaverse platform that supports Polkadot & Ethereum ecosystems",
      },
      {
        name: "JunoSwap",
        filters: ["Token Integration Partners", "MantleLabs"],
        description:
          "First ever interchain DEX focussed on CW-20 (CosmWasm) asset adoption",
      },
      {
        name: "StakingRewards",
        filters: ["Token Integration Partners", "MantleLabs"],
        description:
          "Crypto Staking explorer providing data for staking and crypto-growth tools",
      },
      {
        name: "PolkaDot",
        filters: ["interNFT", "AssetMantle"],
        description:
          "An multichain ecosystem enabling truly interoperable decentralized web",
      },
      {
        name: "Memora",
        filters: ["interNFT", "AssetMantle"],
        description:
          "A Fintech Ecosystem that allows all actors of the arts world to monetize the assets",
      },
      {
        name: "IXO",
        filters: ["interNFT", "AssetMantle"],
        description:
          "An Internet-of-Impact for sustainable social, environmental and economic development",
      },
      {
        name: "HyperSign",
        filters: ["interNFT", "AssetMantle"],
        description:
          "An Identity and access management solution to authenticate employees and customers",
      },
      {
        name: "interChain Foundation",
        filters: ["interNFT", "AssetMantle"],
        description:
          "Stewards of interchain, funding the creation of interoperable decentralized ecosystem",
      },
      {
        name: "IRIS",
        filters: ["interNFT", "AssetMantle"],
        description:
          "A Cosmos zone enabling cross-chain interoperability through a unified service model",
      },
      {
        name: "AkashNetwork",
        filters: ["interNFT", "AssetMantle"],
        description:
          "A decentralized cloud for DApps, nodes, and other blockchain network components",
      },
      {
        name: "Membership NFTs",
        filters: ["MantleCreatives", "AssetMantle"],
        description:
          "An access to unlock a variety of exclusive utilities and rewards from the MantleEcosystem ",
      },
      {
        name: "Mantlers",
        filters: ["MantleCreatives", "AssetMantle"],
        description: "A collection of PFP based NFTs, released in MantlePlace",
      },
      {
        name: "MantlePlace",
        filters: ["Products", "AssetMantle"],
        description:
          "A decentralized, no-code NFT marketplace bringing trading features to creators with an easy to use interface",
      },
      {
        name: "MantleBuilder",
        filters: ["Products", "AssetMantle"],
        description:
          "No-code, customizable NFT marketplace builder helping creators build their own custom-branded NFT storefronts",
      },
      {
        name: "MantleWallet",
        filters: ["Products", "Integrations", "AssetMantle"],
        description: "A non-custodial blockchain wallet for AssetMantle chain",
      },
      {
        name: "Mantle-1",
        filters: ["Products", "AssetMantle"],
        description: "The core Layer 1 interoperable chain of AssetMantle",
      },
      {
        name: "$MNTL Token",
        filters: ["Products", "AssetMantle"],
        description:
          "The primary governance and staking token of AssetMantle that secures the MantleChain",
      },
      {
        name: "AssetMantle SDK Modules",
        filters: ["Products", "Integrations", "AssetMantle"],
        description:
          "The custom SDK modules of AssetMantle chain enabling NFT based transactions",
      },
      {
        name: "AsGuard",
        filters: ["Products", "AssetMantle"],
        description:
          "An AssetMantle validator providing highly incentivised staking services",
      },
      {
        name: "interNFT",
        filters: ["Community Initiatives", "AssetMantle"],
        description:
          "A community-led initiative to develop Interchain standards for Non-fungible Tokens ",
      },
      {
        name: "Artist4Web3",
        filters: ["Community Initiatives", "AssetMantle"],
        description:
          "A community initiative to increase the awareness and knowledge about NFTs and help onboard artists to Web3",
      },
      {
        name: "Xtrathin",
        filters: ["Ecosystem Projects", "MantleLabs"],
        description:
          "Utility Focused NFT Collection to create sub-communities around Joint Robots",
      },
      {
        name: "Analytics",
        filters: ["Integrations", "MantleLabs"],
        description:
          "The dashboard for Insights for all AssetMantle transfer of value",
      },
    ],
    dropdownFilters: [
      { text: "All Projects" },
      { text: "AssetMantle" },
      { text: "MantleLabs" },
    ],
  };
  return { props: { collabsHeroSectionConfigData, collabsSectionConfigData } };
}
