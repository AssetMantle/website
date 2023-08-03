import React from "react";
import Hero from "../views/ecosystem/Hero";
import Protocol from "../views/ecosystem/Protocol";
import Validators from "../views/ecosystem/Validators";
import IAndP from "../views/ecosystem/IAndP";
import KolIM from "../views/ecosystem/KolIM";
import MantleLabs from "../views/ecosystem/MantleLabs";

export default function Ecosystems(props) {
  return (
    <div>
      <Hero />
      <Protocol configData={props.ecoProtocol} />
      <IAndP configData={props.ecoIAndP} />
      <Validators configData={props.ecoValidators} />
      <MantleLabs configData={props.ecoMantleLabs} />
      <KolIM configData={props.ecoKolIM} />
    </div>
  );
}
export async function getStaticProps() {
  const ecoProtocol = {
    titleVariant: "h1",
    subTitleVariant: "secondary.light",
    titleColor: "subtitle2",
    subTitleColor: "primary.main",
    title: "AssetMantle Protocol",
    subTitle:
      "The AssetMantle Protocol encompasses a range of web3 products on the mntlChain, powered by mantleModules for seamless integration.",
    image: "/CollabsHeroSection/mantleUniverse.png",
    cardTitleVariant: "h5",
    cardDescVariant: "body2",
    optionStyles: {
      background: "transparent",
      borderRadius: "12px",
      maxWidth: 230,
      height: "100%",
      boxShadow: "none",
      padding: "0",
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      margin: "auto",
    },
    linkStyles: {},
    protocols: [
      {
        icon: "/ecosystem/protocol/MantlePlace.png",
        iWidth: 72,
        iHeight: 72,
        title: "MantlePlace",
        description:
          "Cutting-edge NFT marketplace with low to nil gas fees, InterNFT-based cross-chain compatibility, decentralized identities, and much more.",
        buttonText: "Go to MantlePlace >",
        href: "https://marketplace.assetmantle.one/",
      },
      {
        icon: "/ecosystem/protocol/MantleWallet.png",
        iWidth: 72,
        iHeight: 72,
        title: "MantleWallet",
        description:
          "Cutting-edge multi-functional web-wallet for seamless token management for transacting, staking, farming, bridging, and more.",
        buttonText: "Go to MantleWallet >",
        href: "https://wallet.assetmantle.one/",
      },
      {
        icon: "/ecosystem/protocol/MantleBuilder.png",
        iWidth: 70,
        iHeight: 70,
        title: "MantleBuilder",
        description:
          "No-code NFT marketplace, the Shopify for NFTs marketplace creators; drag & drop marketplace builder empowering NFT creators",
        buttonText: "Learn More >",
        href: "https://docs.assetmantle.one/MantleBuilder_Overview/",
      },
      {
        icon: "/ecosystem/protocol/MantleExplorer.png",
        iWidth: 72,
        iHeight: 72,
        title: "MantleExplorer",
        description:
          "Next-gen web3-explorer tracking $mntl token across ecosystems; comprehensive token tracking and analytics tool",
        buttonText: "Go to MantleExplorer >",
        href: "https://explorer.assetmantle.one/",
      },
      {
        icon: "/ecosystem/protocol/AssetMantle-NFT-SDK.png",
        iWidth: 72,
        iHeight: 63,
        title: "MantleModules",
        description:
          "Utilize MantleModules, an open-source SDK, for building NFT tooling and infrastructure with ease.",
        buttonText: "Learn More >",
        href: "https://github.com/AssetMantle/modules",
      },
      {
        icon: "/ecosystem/protocol/Asguard.png",
        iWidth: 73,
        iHeight: 69,
        title: "Asguard",
        description:
          "In-house Validator securing dPoS chains like AssetMantle mainnet & others; ensuring network integrity and decentralization",
        buttonText: "Go to Asguard >",
        href: "https://asguard.network/",
      },
    ],
  };
  const ecoIAndP = {
    title: "Integrations & Partnerships",
    subTitle:
      "Integrations and partnerships form a comprehensive amalgamation at various levels, including chain-level, token-level, as well as collaborations with DAOs, Metaverses, and audit entities.",
    IPs: [
      {
        icon: "/ecosystem/ip/chain.png",
        title: "Chain Based",
        coms: [
          {
            icon: "/ecosystem/ip/logo/Axelar.png",
            name: "Axelar",
            details:
              "Axelar delivers secure cross-chain communication for AssetMantle",
          },
          {
            icon: "/ecosystem/ip/logo/Juno.png",
            name: "Juno",
            details:
              "A digital banking platform that offers a high-yield checking account",
          },
          {
            icon: "/ecosystem/ip/logo/OKC.png",
            name: "OKC",
            details:
              "A high-performance, decentralized, smart contract-enabled blockchain, optimized for trading via the leading DEX OKX",
          },
          {
            icon: "/ecosystem/ip/logo/Evmos.png",
            name: "Evmos",
            details:
              "Bringing the world of Ethereum-based applications and assets to the AssetMantle & Cosmos ecosystem",
          },
          {
            icon: "/ecosystem/ip/logo/Crescent.png",
            name: "Crescent",
            details:
              "Innovating DeFi investment through advancements in inter-blockchain technology",
          },
          {
            icon: "/ecosystem/ip/logo/Osmosis.png",
            name: "Osmosis",
            details:
              "Swap and earn $mntl tokens on the primary decentralized exchange within the Cosmos network.",
          },
          {
            icon: "/ecosystem/ip/logo/GravityBridge.png",
            name: "GravityBridge",
            details:
              "A decentralized bridge enabling seamless asset transfer between Cosmos and other blockchains, fostering interoperability and liquidity.",
          },
        ],
      },
      {
        icon: "/ecosystem/ip/coin.png",
        title: "Token Based",
        coms: [
          {
            icon: "/ecosystem/ip/logo/Pulsar.png",
            name: "Pulsar",
            details:
              "The dashboard for Insights for all AssetMantle transfer of value",
          },
          {
            icon: "/ecosystem/ip/logo/Osmosis.png",
            name: "Osmosis",
            details:
              "Swap and earn $mntl tokens on the primary decentralized exchange (DEX) within the Cosmos network.",
          },
          {
            icon: "/ecosystem/ip/logo/Frontier.png",
            name: "Frontier",
            details:
              "A DeFi, NFT & crypto wallet where you can send, store & invest in 4,000+ assets. Facilitates staking or supplying assets in DeFi apps from a single place.",
          },
          {
            icon: "/ecosystem/ip/logo/Falcon.png",
            name: "Falcon",
            details:
              "Experience a secure, reliable, and user-friendly wallet for storing, sending, and receiving tokens within the expansive Cosmos ecosystem, covering over 40 different zones.",
          },
          {
            icon: "/ecosystem/ip/logo/GravityBridge.png",
            name: "GravityBridge",
            details:
              "An open, decentralized bridge connecting blockchains to enable seamless interoperability and liquidity for the $mntl token.",
          },
        ],
      },
      {
        icon: "/ecosystem/ip/boxes.png",
        title: "DAO’s, Metaverse & Auditors",
        coms: [
          {
            icon: "/ecosystem/ip/logo/Droid.png",
            name: "Droid",
            details:
              "A DAO that aims to capitalize upon leading, crypto native opportunities",
          },
          {
            icon: "/ecosystem/ip/logo/AvigationAI.png",
            name: "AvigationAI",
            details:
              "An AI specialization company that identifies potentially viral content",
          },
          {
            icon: "/ecosystem/ip/logo/NerdHaven.png",
            name: "NerdHaven",
            details:
              "Web3 consultancy with optimum experience in marketing and launching of NFTs",
          },
          {
            icon: "/ecosystem/ip/logo/QuillAudits.png",
            name: "QuillAudits",
            details:
              "Providing reliable Smart Contract Audits & Diligence Services to emerging web 3 ventures.",
          },
          {
            icon: "/ecosystem/ip/logo/Vorlds.png",
            name: "Vorlds",
            details:
              "A creator based Metaverse platform that supports Polkadot & Ethereum ecosystems",
          },
          {
            icon: "/ecosystem/ip/logo/Tanukiverse.png",
            name: "Tanukiverse",
            details:
              "A community driven explore-to-earn game governed by Tanuki NFTs",
          },
        ],
      },
    ],
  };
  const ecoValidators = {
    title: "Validators",
    subTitle:
      "Validators, responsible for securing the AssetMantle and Cosmos ecosystem, operate sequentially in a dPoS (delegated proof-of-stake) manner to finalize blocks.",
    imageFolderUrl: "/ecosystem/validators/",
    vals: [
      {
        dir: "down",
        imgs: [
          { name: "SmartNodes", extension: null, href: "" },
          { name: "Crosnest", href: "" },
          { name: "mycointrainer", href: "" },
          { name: "Imperator", href: "" },
          { name: "Duality", href: "" },
          { name: "posthuman", href: "" },
        ],
      },
      {
        dir: "up",
        imgs: [
          { name: "Citadel", extension: null, href: "https://citadel.one" },
          { name: "ecostake", href: "" },
          { name: "kalpatech", href: "" },
          { name: "AsGuard", href: "" },
          { name: "StakeLab", href: "" },
        ],
      },
      {
        dir: "down",
        imgs: [
          { name: "Cosmostation", extension: null, href: "" },
          { name: "prithvidevs", href: "" },
          { name: "CosmicValidator", href: "" },
          { name: "Polkachu", href: "" },
          { name: "Allnodes", href: "" },
          { name: "KingSuper", href: "" },
        ],
      },
    ],
  };
  const ecoMantleLabs = {
    title: "MantleLabs",
    subTitle:
      "MantleLabs is an extended incubator and accelerator ecosystem committed to product development and innovation.",
    buttonText: "Learn more",
    buttonHref:
      "https://assetmantle.notion.site/MantleGrants-Program-47e7af9b8b5c4ebfaf30fc005ade9656",
    labs: [
      {
        logo: "/ecosystem/labs/MyriadFlow.png",
        name: "MyriadFlow",
        right: "/ecosystem/labs/MyriadFlowM.png",
      },
      {
        logo: "/ecosystem/labs/Mirage.png",
        name: "Mirage",
        right: "/ecosystem/labs/MirageM.png",
      },
      {
        logo: "/ecosystem/labs/Frontier.png",
        name: "Frontier",
        right: "/ecosystem/labs/FrontierM.png",
      },
      {
        logo: "/ecosystem/labs/BlockRelations.png",
        name: "BlockRelations",
        right: "/ecosystem/labs/BlockRelationsM.png",
      },
      {
        logo: "/ecosystem/labs/GlitchCandies.png",
        name: "GlitchCandies",
        right: "/ecosystem/labs/GlitchCandiesM.png",
      },
      {
        logo: "/ecosystem/labs/RushraDS.png",
        name: "RushraDS",
        right: "/ecosystem/labs/RushraDSM.png",
      },
      {
        logo: "/ecosystem/labs/Mande.png",
        name: "Mande",
        right: "/ecosystem/labs/MandeM.png",
      },
      {
        logo: "/ecosystem/labs/HashCase.png",
        name: "HashCase",
        right: "/ecosystem/labs/HashCaseM.png",
      },
      {
        logo: "/ecosystem/labs/KevinKidd.png",
        name: "KevinKidd",
        right: "/ecosystem/labs/KevinKiddM.png",
      },
      {
        logo: "/ecosystem/labs/NFTix.png",
        name: "NFTix",
        right: "/ecosystem/labs/NFTixM.png",
      },
    ],
  };
  const ecoKolIM = {
    title: "KOL Initiatives  &  MantleCreatives",
    subTitle:
      "AssetMantle is taking the lead in thought and knowledge leadership within the blockchain sub-strata through ongoing research & development.",
    initiatives: [
      {
        icon: "/ecosystem/initiatives/interNFT.png",
        title: "InterNFT",
        description:
          "Open-source Decentralized Identity (DID) based NFT standard on mantle-1 chain for NFT interoperability within & across ecosystems.",
        href: "https://internft.github.io/",
      },
      {
        icon: "/ecosystem/initiatives/a4w3.png",
        title: "Artists4Web3",
        description:
          "An artist-focused initiative bringing traditional web2 and real-world artists of diverse genres onto the blockchain NFT economy.",
        href: "https://artists4web3.org/",
      },
    ],
  };
  return {
    props: {
      ecoProtocol,
      ecoIAndP,
      ecoValidators,
      ecoMantleLabs,
      ecoKolIM,
    },
  };
}
