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
        dimensions: { width: "124px", height: "30px" },
        description:
          "The leading decentralized Cosmos exchange to swap, earn, and build",
      },
      {
        icon: "/CollabsSection/axelar.png",
        name: "Axelar",
        filters: ["MantleChain Partners", "MantleLabs"],
        dimensions: { width: "113px", height: "27px" },
        description:
          "Axelar delivers secure cross-chain communication for Web3. ",
      },
      {
        icon: "/CollabsSection/crescent.png",
        name: "Crescent",
        filters: ["MantleChain Partners", "MantleLabs"],
        dimensions: { width: "143px", height: "30px" },
        description:
          "Innovating DeFi investment through advancements in inter-blockchain technology",
      },
      {
        icon: "/CollabsSection/juno.png",
        name: "Juno",
        filters: ["MantleChain Partners", "MantleLabs"],
        dimensions: { width: "76px", height: "24px" },
        description:
          " A digital banking platform that offers a high-yield checking account",
      },
      {
        icon: "/CollabsSection/evmos.png",
        name: "Evmos",
        filters: ["MantleChain Partners", "MantleLabs"],
        dimensions: { width: "136px", height: "30px" },
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
        dimensions: { width: "173px", height: "25px" },
        description:
          "An open, decentralized bridge enabling interoperability & liquidity between blockchains",
      },
      {
        icon: "/CollabsSection/OKC.png",
        name: "OKC",
        filters: ["MantleChain Partners", "MantleLabs"],
        dimensions: { width: "67px", height: "36px" },
        description:
          "A high-performance, decentralized, smart contract-enabled blockchain, optimized for trading",
      },
      {
        icon: "/CollabsSection/rushraids.png",
        name: "RushRaids",
        filters: ["MantleGrants", "Ecosystem Projects", "MantleLabs"],
        dimensions: { width: "161px", height: "30px" },
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
        dimensions: { width: "140px", height: "38px" },
        description:
          "An innovative platform to explore & launch NFT Experiences",
      },
      {
        icon: "/CollabsSection/glitchcandies.png",
        name: "GlitchCandies",
        filters: ["MantleGrants", "MantleLabs"],
        dimensions: { width: "153px", height: "25px" },
        description:
          "Hand made collection of evolving sculptures, minted on Cosmos ecosystem",
      },
      {
        heading: "Kevin Harrison",
        name: "Kevin Harrison",
        filters: ["MantleGrants", "MantleLabs"],
        dimensions: { width: "100px", height: "100px" },
        description:
          "A proof-of-ownership Discord bot for AssetMantle NFTs with selective access control",
      },
      {
        icon: "/CollabsSection/lumoslabs.png",
        name: "LumosLabs",
        filters: ["MantleGrants", "MantleLabs"],
        dimensions: { width: "107px", height: "27px" },
        description:
          "A world built for developers, designed to open access to Web3 opportunities",
      },
      {
        icon: "/CollabsSection/cosmostation.png",
        name: "Cosmostation",
        filters: ["Validators", "MantleLabs"],
        dimensions: { width: "195.43px", height: "36px" },
        description:
          "A performant Wallet for Cosmos Hub and related zone chains",
      },
      {
        icon: "/CollabsSection/everstake.png",
        name: "Everstake",
        filters: ["Validators", "MantleLabs"],
        dimensions: { width: "150px", height: "24px" },
        description:
          "The biggest decentralized staking provider in the blockchain industry",
      },
      {
        icon: "/CollabsSection/citadel_one.png",
        name: "Citadel.one",
        filters: ["Validators", "MantleLabs"],
        dimensions: { width: "135px", height: "22px" },
        description:
          "An all-in-one staking interface with a user-friendly non-custodial platform",
      },
      {
        icon: "/CollabsSection/forbole.png",
        name: "Forbole",
        filters: ["Validators", "MantleLabs"],
        dimensions: { width: "140.97px", height: "28px" },
        description:
          "A pioneer in building blockchain solutions, increasing accessibility to people",
      },
      {
        icon: "/CollabsSection/p2p.png",
        name: "P2P.org",
        filters: ["Validators", "MantleLabs"],
        dimensions: { width: "109px", height: "29px" },
        description:
          "Helping investors compound their crypto investments through non-custodial staking",
      },
      {
        icon: "/CollabsSection/dsrv.png",
        name: "DSRV",
        filters: ["Validators", "MantleLabs"],
        dimensions: { width: "90px", height: "27px" },
        description:
          "Leading validator and blockchain infrastructure provider based in Seoul",
      },
      {
        icon: "/CollabsSection/infstones.png",
        name: "INFStones",
        filters: ["Validators", "MantleLabs"],
        dimensions: { width: "158px", height: "26px" },
        description:
          "Build decentralized applications on more than 60 leading blockchain protocols",
      },
      {
        icon: "/CollabsSection/cros-nest.png",
        name: "Cros-Nest",
        filters: ["Validators", "MantleLabs"],
        dimensions: { width: "47px", height: "47px" },
        description:
          "State-of-the-art distributed & redundant validator infrastructure for PoS Blockchains",
      },
      {
        icon: "/CollabsSection/blockscope.png",
        name: "BlockScope",
        filters: ["Validators", "MantleLabs"],
        dimensions: { width: "163px", height: "29.29px" },
        description:
          "A reliable Staking service in multiple chains for crypto investors",
      },
      {
        icon: "/CollabsSection/frens.png",
        name: "Frens",
        filters: ["Validators", "MantleLabs"],
        dimensions: { width: "111px", height: "39px" },
        description:
          "A community growth platform to help NFT, DAO, DeFi and blockchain gaming projects",
      },
      {
        icon: "/CollabsSection/allnodes.png",
        name: "AllNodes",
        filters: ["Validators", "MantleLabs"],
        dimensions: { width: "151px", height: "31px" },
        description:
          "A non-custodial platform where you can partake in Staking in over 55 protocols",
      },
      {
        icon: "/CollabsSection/droid.png",
        name: "DroidDAO",
        filters: ["Partnerships", "MantleLabs"],
        dimensions: { width: "96px", height: "31px" },
        description:
          "a DAO that aims to capitalize upon leading, crypto native opportunities",
      },
      {
        icon: "/CollabsSection/nerdhaven.png",
        name: "NHDAO",
        filters: ["Partnerships", "MantleLabs"],
        dimensions: { width: "165.55px", height: "15.77px" },
        description:
          "Web3 consultancy with optimum experience in marketing and launching of NFTs",
      },
      {
        icon: "/CollabsSection/avigation.png",
        name: "AvigationAI",
        filters: ["Partnerships", "MantleLabs"],
        dimensions: { width: "145px", height: "29px" },
        description:
          "An AI specialization company that identifies potentially viral content",
      },
      {
        icon: "/CollabsSection/tanukiverse.png",
        name: "Tanukiverse",
        filters: ["Partnerships", "Metaverse", "MantleLabs"],
        dimensions: { width: "150px", height: "35x" },
        description:
          "A community driven explore-to-earn game governed by Tanuki NFTs",
      },
      {
        icon: "/CollabsSection/vorlds.png",
        name: "Vorlds",
        filters: ["Partnerships", "Metaverse", "MantleLabs"],
        dimensions: { width: "99px", height: "31px" },
        description:
          "A creator based Metaverse platform that supports Polkadot & Ethereum ecosystems",
      },
      {
        icon: "/CollabsSection/junoswap.png",
        name: "JunoSwap",
        filters: ["Token Integration Partners", "MantleLabs"],
        dimensions: { width: "134px", height: "32px" },
        description:
          "First ever interchain DEX focussed on CW-20 (CosmWasm) asset adoption",
      },
      {
        icon: "/CollabsSection/stakingrewards.png",
        name: "StakingRewards",
        filters: ["Token Integration Partners", "MantleLabs"],
        dimensions: { width: "170px", height: "27px" },
        description:
          "Crypto Staking explorer providing data for staking and crypto-growth tools",
      },
      {
        icon: "/CollabsSection/polkadot.png",
        name: "PolkaDot",
        filters: ["interNFT", "AssetMantle"],
        dimensions: { width: "144px", height: "30.72px" },
        description:
          "An multichain ecosystem enabling truly interoperable decentralized web",
      },
      {
        icon: "/CollabsSection/memora.png",
        name: "Memora",
        filters: ["interNFT", "AssetMantle"],
        dimensions: { width: "128px", height: "32px" },
        description:
          "A Fintech Ecosystem that allows all actors of the arts world to monetize the assets",
      },
      {
        icon: "/CollabsSection/ixo.png",
        name: "IXO",
        filters: ["interNFT", "AssetMantle"],
        dimensions: { width: "59px", height: "35px" },
        description:
          "An Internet-of-Impact for sustainable social, environmental and economic development",
      },
      {
        icon: "/CollabsSection/hypersign.png",
        name: "HyperSign",
        filters: ["interNFT", "AssetMantle"],
        dimensions: { width: "148px", height: "38px" },
        description:
          "An Identity and access management solution to authenticate employees and customers",
      },
      {
        icon: "/CollabsSection/interchainfoundation.png",
        name: "interChain Foundation",
        filters: ["interNFT", "AssetMantle"],
        dimensions: { width: "106px", height: "29px" },
        description:
          "Stewards of interchain, funding the creation of interoperable decentralized ecosystem",
      },
      {
        icon: "/CollabsSection/iris.png",
        name: "IRIS",
        filters: ["interNFT", "AssetMantle"],
        dimensions: { width: "115px", height: "34px" },
        description:
          "A Cosmos zone enabling cross-chain interoperability through a unified service model",
      },
      {
        icon: "/CollabsSection/akash.png",
        name: "AkashNetwork",
        filters: ["interNFT", "AssetMantle"],
        dimensions: { width: "134px", height: "37px" },
        description:
          "A decentralized cloud for DApps, nodes, and other blockchain network components",
      },
      {
        icon: "/CollabsSection/AM_Logo.png",
        name: "Membership NFTs",
        filters: ["MantleCreatives", "AssetMantle"],
        dimensions: { width: "100px", height: "100px" },
        description:
          "An access to unlock a variety of exclusive utilities and rewards from the MantleEcosystem ",
      },
      {
        icon: "/CollabsSection/AM_Logo.png",
        name: "Mantlers",
        filters: ["MantleCreatives", "AssetMantle"],
        dimensions: { width: "100px", height: "100px" },
        description: "A collection of PFP based NFTs, released in MantlePlace",
      },
      {
        icon: "/CollabsSection/mantleplace.svg",
        name: "MantlePlace",
        filters: ["Products", "AssetMantle"],
        dimensions: { width: "153px", height: "27px" },
        description:
          "A decentralized, no-code NFT marketplace bringing trading features to creators with an easy to use interface",
      },
      {
        icon: "/CollabsSection/mantlebuilder.svg",
        name: "MantleBuilder",
        filters: ["Products", "AssetMantle"],
        dimensions: { width: "168.75px", height: "27px" },
        description:
          "No-code, customizable NFT marketplace builder helping creators build their own custom-branded NFT storefronts",
      },
      {
        icon: "/CollabsSection/mantlewallet.svg",
        name: "MantleWallet",
        filters: ["Products", "Integrations", "AssetMantle"],
        dimensions: { width: "159.39px", height: "27px" },
        description: "A non-custodial blockchain wallet for AssetMantle chain",
      },
      {
        icon: "/CollabsSection/AM_Logo.png",
        name: "Mantle-1",
        filters: ["Products", "AssetMantle"],
        dimensions: { width: "100px", height: "100px" },
        description: "The core Layer 1 interoperable chain of AssetMantle",
      },
      {
        heading: "$MNTL Token",
        icon: "/CollabsSection/mantletoken.png",
        name: "$MNTL Token",
        filters: ["Products", "AssetMantle"],
        dimensions: { width: "164.95px", height: "27px" },
        description:
          "The primary governance and staking token of AssetMantle that secures the MantleChain",
      },
      {
        icon: "/CollabsSection/AM_Logo.png",
        name: "AssetMantle SDK ",
        filters: ["Products", "Integrations", "AssetMantle"],
        dimensions: { width: "100px", height: "100px" },
        description:
          "The custom SDK modules of AssetMantle chain enabling NFT based transactions",
      },
      {
        icon: "/CollabsSection/asguard.svg",
        name: "AsGuard",
        filters: ["Products", "AssetMantle"],
        dimensions: { width: "112.96px", height: "27px" },
        description:
          "An AssetMantle validator providing highly incentivised staking services",
      },
      {
        icon: "/CollabsSection/internft.png",
        name: "interNFT",
        filters: ["Community Initiatives", "AssetMantle"],
        dimensions: { width: "103.54px", height: "53.96px" },
        description:
          "A community-led initiative to develop Interchain standards for Non-fungible Tokens ",
      },
      {
        icon: "/CollabsSection/AM_Logo.png",
        name: "Artists4Web3",
        filters: ["Community Initiatives", "AssetMantle"],
        dimensions: { width: "100px", height: "100px" },
        description:
          "A community initiative to increase the awareness and knowledge about NFTs and help onboard artists to Web3",
      },
      {
        icon: "/CollabsSection/xtrathin.png",
        name: "Xtrathin",
        filters: ["Ecosystem Projects", "MantleLabs"],
        dimensions: { width: "100px", height: "100px" },
        description:
          "Utility Focused NFT Collection to create sub-communities around Joint Robots",
      },
      {
        icon: "/CollabsSection/AM_Logo.png",
        name: "Mirage Metaverse",
        filters: ["MantleGrants", "AssetMantle"],
        dimensions: { width: "112.96px", height: "27px" },
        description:
          "A Social Commerce Metaverse made for the next generation. A Metaverse where you can buy, sell, trade, socialize, attend concerts, learn,  game, and experience many more exciting stuff!",
      },
      {
        icon: "/CollabsSection/Leap_light.png",
        name: "Leap Wallet",
        filters: ["Token Integration Partners", "AssetMantle"],
        dimensions: { width: "103.54px", height: "53.96px" },
        description:
          "A non-custodial super wallet for Cosmos & Terra 2.0 .Leap is the simplest & safest way to send, swap, and stake tokens.",
      },
      {
        icon: "/CollabsSection/Falcon_Wallet.png",
        name: "Falcon Wallet",
        filters: ["Token Integration Partners", "AssetMantle"],
        dimensions: { width: "100px", height: "100px" },
        description:
          "A secure, safe and convenient wallet to store, send and receive tokens across 40+ zones in the Cosmos ecosystem",
      },
      {
        icon: "/CollabsSection/frontier-logo.jpeg",
        name: "Frontier Wallet",
        filters: ["Token Integration Partners", "AssetMantle"],
        dimensions: { width: "100px", height: "100px" },
        description:
          "It is a DeFi, NFT & crypto wallet where you can send, store & invest in 4,000+ assets. Facilitates  staking or supplying assets in DeFi apps from a single place.",
      },
      {
        icon: "/CollabsSection/pulsar-logo.svg",
        name: "Pulsar Finance",
        filters: ["Token Integration Partners", "AssetMantle"],
        dimensions: { width: "100px", height: "100px" },
        description:
          "The dashboard for Insights for all AssetMantle transfer of value",
      },
      {
        icon: "/CollabsSection/QuillAudits.png",
        name: "QuillAudits",
        filters: ["Partnerships", "MantleLabs"],
        dimensions: { width: "100px", height: "100px" },
        description:
          "Providing reliable Smart Contract Audits & Diligence Services to emerging web 3 ventures ",
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
