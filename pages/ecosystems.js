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
    title: "The Mantle Universe",
    subTitle:
      "Apart from the AssetMantle ecosystem, there is an extended ecosystem called MantleLabs that commits to community driven development",
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
        icon: "/CollabsSection/osmosis.png",
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
        icon: "/CollabsSection/axelar.png",
        name: "Axelar",
        filters: ["MantleChain Partners", "MantleLabs"],
        description:
          "Axelar delivers secure cross-chain communication for Web3. ",
      },
      {
        icon: "/CollabsSection/crescent.png",
        name: "Crescent",
        filters: ["MantleChain Partners", "MantleLabs"],
        description:
          "Innovating DeFi investment through advancements in inter-blockchain technology",
      },
      {
        icon: "/CollabsSection/juno.png",
        name: "Juno",
        filters: ["MantleChain Partners", "MantleLabs"],
        description:
          " A digital banking platform that offers a high-yield checking account",
      },
      {
        icon: "/CollabsSection/evmos.png",
        name: "Evmos",
        filters: ["MantleChain Partners", "MantleLabs"],
        description:
          "Bringing the world of Ethereum-based applications and assets to the Cosmos ecosystem",
      },
      {
        icon: "/CollabsSection/gravitybridge.png",
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
        icon: "/CollabsSection/.png",
        name: "OKC",
        filters: ["MantleChain Partners", "MantleLabs"],
        description:
          "A high-performance, decentralized, smart contract-enabled blockchain, optimized for trading",
      },
      {
        icon: "/CollabsSection/rushraids.png",
        name: "RushRaids",
        filters: ["MantleGrants", "Ecosystem Projects", "MantleLabs"],
        description:
          "First Multiplayer Battle Royale Game where you play and earn Cryptos",
      },
      {
        icon: "/CollabsSection/myriadflow.png",
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
        icon: "/CollabsSection/glitchcandies.png",
        name: "GlitchCandies",
        filters: ["MantleGrants", "MantleLabs"],
        description:
          "Hand made collection of evolving sculptures, minted on Cosmos ecosystem",
      },
      {
        icon: "/CollabsSection/.png",
        name: "Kevin Harrison",
        filters: ["MantleGrants", "MantleLabs"],
        description:
          "A proof-of-ownership Discord bot for AssetMantle NFTs with selective access control",
      },
      {
        icon: "/CollabsSection/lumoslabs.png",
        name: "LumosLabs",
        filters: ["MantleGrants", "MantleLabs"],
        description:
          "A world built for developers, designed to open access to Web3 opportunities",
      },
      {
        icon: "/CollabsSection/cosmostation.png",
        name: "Cosmostation",
        filters: ["Validators", "MantleLabs"],
        description:
          "A performant Wallet for Cosmos Hub and related zone chains",
      },
      {
        icon: "/CollabsSection/everstake.png",
        name: "Everstake",
        filters: ["Validators", "MantleLabs"],
        description:
          "The biggest decentralized staking provider in the blockchain industry",
      },
      {
        icon: "/CollabsSection/citadel_one.png",
        name: "Citadel.one",
        filters: ["Validators", "MantleLabs"],
        description:
          "An all-in-one staking interface with a user-friendly non-custodial platform",
      },
      {
        icon: "/CollabsSection/forbole.png",
        name: "Forbole",
        filters: ["Validators", "MantleLabs"],
        description:
          "A pioneer in building blockchain solutions, increasing accessibility to people",
      },
      {
        icon: "/CollabsSection/p2p.png",
        name: "P2P.org",
        filters: ["Validators", "MantleLabs"],
        description:
          "Helping investors compound their crypto investments through non-custodial staking",
      },
      {
        icon: "/CollabsSection/dsrv.png",
        name: "DSRV",
        filters: ["Validators", "MantleLabs"],
        description:
          "Leading validator and blockchain infrastructure provider based in Seoul",
      },
      {
        icon: "/CollabsSection/infstones.png",
        name: "INFStones",
        filters: ["Validators", "MantleLabs"],
        description:
          "Build decentralized applications on more than 60 leading blockchain protocols",
      },
      {
        icon: "/CollabsSection/.png",
        name: "Cros-Nest",
        filters: ["Validators", "MantleLabs"],
        description:
          "State-of-the-art distributed & redundant validator infrastructure for PoS Blockchains",
      },
      {
        icon: "/CollabsSection/blockscope.png",
        name: "BlockScope",
        filters: ["Validators", "MantleLabs"],
        description:
          "A reliable Staking service in multiple chains for crypto investors",
      },
      {
        icon: "/CollabsSection/frens.png",
        name: "Frens",
        filters: ["Validators", "MantleLabs"],
        description:
          "A community growth platform to help NFT, DAO, DeFi and blockchain gaming projects",
      },
      {
        icon: "/CollabsSection/allnodes.png",
        name: "AllNodes",
        filters: ["Validators", "MantleLabs"],
        description:
          "A non-custodial platform where you can partake in Staking in over 55 protocols",
      },
      {
        icon: "/CollabsSection/droid.png",
        name: "DroidDAO",
        filters: ["Partnerships", "MantleLabs"],
        description:
          "a DAO that aims to capitalize upon leading, crypto native opportunities",
      },
      {
        icon: "/CollabsSection/.png",
        name: "NHDAO",
        filters: ["Partnerships", "MantleLabs"],
        description:
          "Web3 consultancy with optimum experience in marketing and launching of NFTs",
      },
      {
        icon: "/CollabsSection/avigation.png",
        name: "AvigationAI",
        filters: ["Partnerships", "MantleLabs"],
        description:
          "An AI specialization company that identifies potentially viral content",
      },
      {
        icon: "/CollabsSection/tanukiverse.png",
        name: "Tanukiverse",
        filters: ["Partnerships", "Metaverse", "MantleLabs"],
        description:
          "A community driven explore-to-earn game governed by Tanuki NFTs",
      },
      {
        icon: "/CollabsSection/osmosis.png",
        name: "Vorlds",
        filters: ["Partnerships", "Metaverse", "MantleLabs"],
        description:
          "A creator based Metaverse platform that supports Polkadot & Ethereum ecosystems",
      },
      {
        icon: "/CollabsSection/junoswap.png",
        name: "JunoSwap",
        filters: ["Token Integration Partners", "MantleLabs"],
        description:
          "First ever interchain DEX focussed on CW-20 (CosmWasm) asset adoption",
      },
      {
        icon: "/CollabsSection/stakingrewards.png",
        name: "StakingRewards",
        filters: ["Token Integration Partners", "MantleLabs"],
        description:
          "Crypto Staking explorer providing data for staking and crypto-growth tools",
      },
      {
        icon: "/CollabsSection/polkadot.png",
        name: "PolkaDot",
        filters: ["interNFT", "AssetMantle"],
        description:
          "An multichain ecosystem enabling truly interoperable decentralized web",
      },
      {
        icon: "/CollabsSection/memora.png",
        name: "Memora",
        filters: ["interNFT", "AssetMantle"],
        description:
          "A Fintech Ecosystem that allows all actors of the arts world to monetize the assets",
      },
      {
        icon: "/CollabsSection/ixo.png",
        name: "IXO",
        filters: ["interNFT", "AssetMantle"],
        description:
          "An Internet-of-Impact for sustainable social, environmental and economic development",
      },
      {
        icon: "/CollabsSection/hypersign.png",
        name: "HyperSign",
        filters: ["interNFT", "AssetMantle"],
        description:
          "An Identity and access management solution to authenticate employees and customers",
      },
      {
        icon: "/CollabsSection/interchainfoundation.png",
        name: "interChain Foundation",
        filters: ["interNFT", "AssetMantle"],
        description:
          "Stewards of interchain, funding the creation of interoperable decentralized ecosystem",
      },
      {
        icon: "/CollabsSection/iris.png",
        name: "IRIS",
        filters: ["interNFT", "AssetMantle"],
        description:
          "A Cosmos zone enabling cross-chain interoperability through a unified service model",
      },
      {
        icon: "/CollabsSection/akash.png",
        name: "AkashNetwork",
        filters: ["interNFT", "AssetMantle"],
        description:
          "A decentralized cloud for DApps, nodes, and other blockchain network components",
      },
      {
        icon: "/CollabsSection/.png",
        name: "Membership NFTs",
        filters: ["MantleCreatives", "AssetMantle"],
        description:
          "An access to unlock a variety of exclusive utilities and rewards from the MantleEcosystem ",
      },
      {
        icon: "/CollabsSection/.png",
        name: "Mantlers",
        filters: ["MantleCreatives", "AssetMantle"],
        description: "A collection of PFP based NFTs, released in MantlePlace",
      },
      {
        icon: "/CollabsSection/.png",
        name: "MantlePlace",
        filters: ["Products", "AssetMantle"],
        description:
          "A decentralized, no-code NFT marketplace bringing trading features to creators with an easy to use interface",
      },
      {
        icon: "/CollabsSection/.png",
        name: "MantleBuilder",
        filters: ["Products", "AssetMantle"],
        description:
          "No-code, customizable NFT marketplace builder helping creators build their own custom-branded NFT storefronts",
      },
      {
        icon: "/CollabsSection/.png",
        name: "MantleWallet",
        filters: ["Products", "Integrations", "AssetMantle"],
        description: "A non-custodial blockchain wallet for AssetMantle chain",
      },
      {
        icon: "/CollabsSection/.png",
        name: "Mantle-1",
        filters: ["Products", "AssetMantle"],
        description: "The core Layer 1 interoperable chain of AssetMantle",
      },
      {
        icon: "/CollabsSection/.png",
        name: "$MNTL Token",
        filters: ["Products", "AssetMantle"],
        description:
          "The primary governance and staking token of AssetMantle that secures the MantleChain",
      },
      {
        icon: "/CollabsSection/.png",
        name: "AssetMantle SDK Modules",
        filters: ["Products", "Integrations", "AssetMantle"],
        description:
          "The custom SDK modules of AssetMantle chain enabling NFT based transactions",
      },
      {
        icon: "/CollabsSection/.png",
        name: "AsGuard",
        filters: ["Products", "AssetMantle"],
        description:
          "An AssetMantle validator providing highly incentivised staking services",
      },
      {
        icon: "/CollabsSection/.png",
        name: "interNFT",
        filters: ["Community Initiatives", "AssetMantle"],
        description:
          "A community-led initiative to develop Interchain standards for Non-fungible Tokens ",
      },
      {
        icon: "/CollabsSection/.png",
        name: "Artist4Web3",
        filters: ["Community Initiatives", "AssetMantle"],
        description:
          "A community initiative to increase the awareness and knowledge about NFTs and help onboard artists to Web3",
      },
      {
        icon: "/CollabsSection/.png",
        name: "Xtrathin",
        filters: ["Ecosystem Projects", "MantleLabs"],
        description:
          "Utility Focused NFT Collection to create sub-communities around Joint Robots",
      },
      {
        icon: "/CollabsSection/.png",
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
