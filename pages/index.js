import * as React from "react";
import UniverseSection from "../views/UniverseSection";
import AdvantageSection from "../views/AdvantageSection";
import ChainSection from "../views/ChainSection";
import FeatureSection from "../views/FeatureSection";
import GallerySection from "../views/GallerySection";
import HeroSection from "../views/HeroSection";
import InfoSection from "../views/InfoSection";
import SocialProofSection from "../views/SocialProofSection";
// import SubscribeSection from "../views/SubscribeSection";
import TeamSection from "../views/TeamSection";

export default function Index(props) {
  return (
    <>
      <HeroSection
        heroSectionConfigData={props.heroSectionConfigData}
        sectionStyle={props.heroSectionStyle}
      />
      <GallerySection
        gallerySectionConfigData={props.gallerySectionConfigData}
        optionStyles={props.gallerySectionOptionStyle}
      />
      <FeatureSection
        featureSectionConfigData={props.featureSectionConfigData}
        optionStyles={props.featureSectionOptionStyles}
        optionContainerStyles={props.featureSectionOptionContainerStyles}
      />
      <InfoSection
        listStyle={props.infoSectionListStyle}
        infoSectionConfigData={props.infoSectionConfigData}
      />
      <ChainSection chainSectionConfigData={props.chainSectionConfigData} />
      <AdvantageSection
        initiativeSectionConfigData={props.initiativeSectionConfigData}
        initiativeSectionListStyle={props.initiativeSectionListStyle}
      />
      <UniverseSection
        leftSubsectionData={props.universeSectionLeftSubSectionData}
        rightSubsectionData={props.universeSectionRightSubSectionData}
        headerLogoStyles={props.universeSectionHeaderLogoStyles}
      />
      <TeamSection
        teamsConfigData={props.teamSectionConfigData}
        optionStyles={props.teamSectionOptionStyles}
        linkStyles={props.teamSectionLinkStyles}
      />
      <SocialProofSection
        socialProofConfigData={props.socialProofSectionConfigData}
        optionContainerStyles={props.socialProofSectionOptionContainerStyles}
      />
      {/* <SubscribeSection /> */}
    </>
  );
}
export async function getStaticProps() {
  const heroSectionConfigData = {
    title: "Redefining Digital Asset Ownership",
    subtitle:
      "Experience the first NFT marketplace with blockchain-based identity",
    buttons: [
      {
        label: "Learn More",
        endIcon: "keyboard_arrow_right",
        variant: "outlined",
      },
      {
        label: "Documentation",
        endIcon: "article",
        variant: "contained",
      },
    ],
    image: "/HeroSection/mantler.webp",
    translucentStripData: [
      { amount: "35k+", top: "COMMUNITY", bottom: "MEMBERS" },
      { amount: "93k+", top: "UNIQUE WALLETS", bottom: "& USERS" },
      { amount: "3M+", top: "TRANSACTIONS", bottom: "ON-CHAIN" },
    ],
  };
  const heroSectionStyle = {
    pt: 4,
    mt: 2,
    pb: 4,
    mb: 4,
    color: "primary.light",
    textAlign: { xs: "center", sm: "center", md: "center" },
    titleVariant: "h1",
    titleColor: "secondary.main",
    subTitleVariant: "subtitle1",
    subTitleVariant: "primary.main",
  };
  const gallerySectionConfigData = {
    paperVariant: "translucent",
    titleVariant: "h3",
    titleColor: "primary.main",
    descriptionVariant: "body1",
    descriptionColor: "primary.light",
    textAlign: "center", // >>> default: left
    title: "Our Products",
    titleComponent: "h1",
    endIcon: "keyboard_arrow_right",
    description:
      "AssetMantle’s suite of products, which is focussed on NFT ecosystem, helps you up your game of digital asset ownership",
    descriptionStyle: { maxWidth: "min(836px, 100%)", margin: "0 auto" }, // object of styles or false
    galleries: [
      // object template
      // {
      //   image: "/GallerySection//mantleplace.png",
      //   title: "",
      //   description: "",
      //   buttons: [
      //     {
      //       text: "",
      //       url: "",
      //     },
      //   ],
      // },
      {
        image: "/GallerySection//MantlePlace.png",
        title: "MantlePlace",
        description:
          "A new, highly optimized NFT marketplace for Cosmos Ecosystem",
        buttons: [
          {
            text: "Learn More",
            url: "https://marketplace.assetmantle.one/",
          },
        ],
      },
      {
        image: "/GallerySection//MantleBuilder.png",
        title: "MantleBuilder",
        description:
          "Coming soon, a no-code marketplace builder for NFT shopifying",
        buttons: [
          {
            text: "Learn More",
            url: "https://docs.assetmantle.one/MantleBuilder_Overview/",
          },
        ],
      },
      {
        image: "/GallerySection//MantleWallet.png",
        title: "MantleWallet",
        description: "A non-custodial blockchain wallet for AssetMantle chain",
        buttons: [
          {
            text: "Learn More",
            url: "https://wallet.assetmantle.one/",
          },
        ],
      },
      {
        image: "/GallerySection//MantleExplorer.png",
        title: "MantleExplorer",
        description: "A detailed blockchain explorer for the AssetMantle chain",
        buttons: [
          {
            text: "Learn More",
            url: "https://explorer.assetmantle.one/",
          },
        ],
      },
    ],
  };
  const gallerySectionOptionStyle = {
    background: "transparent",
    maxWidth: 272,
    boxShadow: "none",
    height: "100%",
    mx: "auto",
    padding: "0 11px",
    textAlign: { xs: "center", md: "left" },
    display: "flex",
    flexDirection: "column",
  };
  const featureSectionConfigData = {
    paperVariant: "translucent",
    textAlign: "center",
    title: "Why choose us?",
    titleComponent: "",
    titleVariant: "h1",
    titleColor: "secondary.main",
    description:
      "AssetMantle’s foundation is built using the best-in-class core blockchain principles, and optimized for the next evolution of NFT economy",
    descriptionStyle: { maxWidth: "min(836px, 100%)", margin: "0 auto" }, // object of styles or false
    featuresArray: [
      {
        href: "",
        icon: "//FeatureSection//optimizedForNft.svg", // put icon component or url >>don't forgot to change the below
        title: "Optimized for NFTs",
        titleVariant: "h4",
        titleColor: "primary.main",
        description:
          "Our AssetMantle chain is specifically calibrated with features like Verified NFT Creators, customized NFT properties, in-built whitelisting features etc.",
        descriptionVariant: "body2",
        descriptionColor: "secondary.main",
      },
      {
        href: "",
        icon: "//FeatureSection//pioneeringCosmosEco.svg", // put icon component or url >>don't forgot to change the below
        title: "Cosmos Ecosystem",
        titleVariant: "h4",
        titleColor: "primary.main",
        description:
          "AssetMantle being one of the top zones of the Cosmos Hub, leverages features like Tendermint Core for Consensus and a highly modular SDK framework.",
        descriptionVariant: "body2",
        descriptionColor: "secondary.main",
      },
      {
        href: "",
        icon: "//FeatureSection//extremelyLowFees.svg", // put icon component or url >>don't forgot to change the below
        title: "Extremely Low Fees",
        titleVariant: "h4",
        titleColor: "primary.main",
        description:
          "AssetMantle has a highly Economical network providing one of the lowest fees compared to any popular network, of around $0.01 per transaction.",
        descriptionVariant: "body2",
        descriptionColor: "secondary.main",
      },
      {
        href: "",
        icon: "//FeatureSection//fastOrderFulfillment.svg", // put icon component or url >>don't forgot to change the below
        title: "Fast Order Fulfillments",
        titleVariant: "h4",
        titleColor: "primary.main",
        description:
          "Extremely fast transactions nearing 7 seconds enables almost zero waiting time for fulfillment of orders of buy, sell, auction etc.",
        descriptionVariant: "body2",
        descriptionColor: "secondary.main",
      },
      {
        href: "",
        icon: "//FeatureSection//completelySecure.svg", // put icon component or url >>don't forgot to change the below
        title: "Completely Secure",
        titleVariant: "h4",
        titleColor: "primary.main",
        description:
          "With high network security and leveraging the native token $MNTL, AssetMantle provides the level of protection required for your assets.",
        descriptionVariant: "body2",
        descriptionColor: "secondary.main",
      },
      {
        href: "",
        icon: "//FeatureSection//futureInteroperability.svg", // put icon component or url >>don't forgot to change the below
        title: "Future Interoperability",
        titleVariant: "h4",
        titleColor: "primary.main",
        description:
          "InterNFT can potentially enable NFTs to be transferred to other connected chains, thereby creating a larger shared market economy.",
        descriptionVariant: "body2",
        descriptionColor: "secondary.main",
      },
    ],
  };
  const featureSectionOptionContainerStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "14px",
    mt: 5,
  };
  const featureSectionOptionStyles = {
    background: "transparent",
    maxWidth: 374,
    boxShadow: "none",
    padding: "16px 22px",
    minHeight: "296px",
    transition: "all 0.3s ease-in-out",
    color: "primary.light",
    "&:hover": {
      backgroundColor: "navBg",
    },
  };
  const infoSectionConfigData = {
    textAlign: "", // >>> default: left
    fullWidth: false, // boolean
    smallDeviceColumnDirections: "", // only "reverse" or "" >>>>>>default is "no-reverse"
    contentMaxWidth: "", // "number+px"(ie. "100px") or "" >>>>>>default is "457px"
    title: "Distributed NFT economy",
    titleComponent: "h1",
    titleVariant: "h2",
    titleColor: "secondary.main",
    description: [
      "AssetMantle suite of products creates a distributed NFT Economy where users can create not only NFT collections but their own NFT marketplaces and storefronts.",
      "This shopifying of NFT assets, leads to a distributed network of networks, with world state stored collectively in the AssetMantle chain.",
    ],
    descriptionVariant: "body1",
    descriptionColor: "secondary.main",
    descriptionStyle: { maxWidth: "min(836px, 100%)", margin: "0 auto" }, // object of styles or false
    rightSidedImage: "",
    imageListVariant: "quilted",
    authorVariant: "text",
    artVariant: "caption",
    artColor: "primary.light",
    imageData: [
      {
        img: "/InfoSection/Archetypes.webp",
        title: "Archetypes",
        name: "Archetypes",
        author: "Oblitus Mantra",
        href: "https://twitter.com/Archetypes0nft",
        rows: 2,
      },
      {
        img: "/InfoSection/arto.webp",
        title: "Arto DAO",
        name: "Arto DAO",
        author: "Arto DAO",
        href: "https://twitter.com/ArtoDAO",
      },
      {
        img: "/InfoSection/Aequanimity.webp",
        title: "Aequanimity",
        name: "Aequanimity",
        author: "pratykarya",
        href: "https://twitter.com/PratykArya",
        rows: 2,
      },
      {
        img: "/InfoSection/Christiopkosin.webp",
        title: "Christiopkosin",
        name: "Christiopkosin",
        author: "Christiopkosin",
        href: "",
      },
      {
        img: "/InfoSection/the_dansant.webp",
        title: "The Dansant",
        name: "The Dansant",
        author: "the_dansant",
        href: "https://twitter.com/the_dansant",
        rows: 2,
      },
      {
        img: "/InfoSection/boldwockeez.webp",
        title: "boldwockeez",
        name: "boldwockeez",
        author: "cryptoduuudes",
        href: "https://twitter.com/CryptoDuuudes",
      },
      {
        img: "/InfoSection/MantleMonkeys.webp",
        title: "Mantle Monkeys",
        name: "Mantle Monkeys",
        author: "MantleMonkeys",
        href: "https://twitter.com/MantleMonkeys",
      },
      {
        img: "/InfoSection/mantlewarriors.webp",
        title: "Mantle Warriors",
        name: "Mantle Warriors",
        author: "mantlewarriors",
        href: "https://twitter.com/mantlewarriors",
      },
      {
        img: "/InfoSection/OblitusMantra1.webp",
        title: "Oblitus Mantra - Forgotten Worlds",
        name: "Oblitus Mantra",
        author: "Oblitus",
        href: "https://twitter.com/Oblitus_NFT",
      },
      {
        img: "/InfoSection/OblitusMantra2.webp",
        title: "Oblitus Mantra - Forgotten Worlds",
        name: "Oblitus Mantra",
        author: "Oblitus",
        href: "https://twitter.com/Oblitus_NFT",
        rows: 2,
      },
      {
        img: "/InfoSection/Pinnacle1.webp",
        title: "Pinnacle",
        name: "Pinnacle",
        author: "Zeelectric",
        href: "",
        rows: 2,
      },
      {
        img: "/InfoSection/Pinnacle2.webp",
        title: "Pinnacle",
        name: "Pinnacle",
        author: "Zeelectric",
        href: "",
        rows: 2,
      },
    ],
  };
  const infoSectionListStyle = {
    margin: { xs: "auto", md: "auto 0" },
    height: "100%",
  };
  const chainSectionConfigData = {
    textAlign: "", // >>> default: left
    title: "The AssetMantle Chain",
    subTitle:
      "The AssetMantle Blockchain leverages the following web3 standards which makes it pioneer the NFT Ecosphere",
    subSectionTitle: "$MNTL",
    subSectionTitleIcon: "/ChainSection/mntl.svg", // url:"/someImage.png">>> default: none
    subSectionTitleVariant: "h1",
    subSectionTitleColor: "secondary.light",
    subSectionDescription:
      "The native token which powers the AssetMantle’s NFT Economy",
    subSectionDescriptionVariant: "subtitle2",
    subSectionDescriptionColor: "secondary.light",
    descriptionVariant: "subtitle2",
    descriptionColor: "primary.main",
    subSectionDescriptionStyle: {
      textAlign: { xs: "center" },
      mx: { xs: "auto !important", sm: "0 !important" },
      maxWidth: "400px",
    }, // object of styles or false
    backgroundImage: "", // "url('/images/mantleplace.png')",
    defaultChainDescription:
      "One of the pioneering zones of the rich Cosmos Ecosystem ",
    ctas: [
      {
        title: "Buy Now ",
        url: "https://app.osmosis.zone/?from=USDC&to=MNTL",

        icon: "shopping_cart", // url: "/" or component: <Icon/>
        target: "_blank", // valid values: "_blank", "_self", "_parent", "_top" >>>default: "_self"
        disabled: false,
        variant: "contained",
      },
      {
        title: "Learn More",
        url: "/about#mntl-token-info",

        icon: "keyboard_arrow_right", // url: "/" or component: <Icon/>

        target: "_blank", // valid values: "_blank", "_self", "_parent", "_top" >>>default: "_self"
        disabled: false,
        variant: "outlined",
      },
    ],
    chains: [
      {
        icon: "/ChainSection/cosmos.svg", // add url: "https://icon.png"
        alt: "modular",
        title: "Implements modular framework from the popular Cosmos SDK",
      },
      {
        icon: "/ChainSection/modular.svg", // add url: "https://icon.png"
        alt: "cosmos",
        title: "Imbibes the leading Tendermint BFT Consensus Engine",
      },
      {
        icon: "/ChainSection/connected.svg", // add url: "https://icon.png"
        alt: "connected",

        title: "Incorporates connectedness with Cosmos Zones using IBC",
      },
      {
        icon: "/ChainSection/interNft.svg", // add url: "https://icon.png"
        alt: "internft",
        title: "Inherits the plan to build open standards for interchain NFT",
      },
    ],
  };
  const initiativeSectionConfigData = {
    paperVariant: "translucent",
    textAlign: "center", // >>> default: left
    title: "The AssetMantle Advantage",
    titleOnLeft: false, // >>> default: false
    titleColor: "primary.main",
    titleVariant: "h4",
    description: "Find out the unique qualities inherent in the AssetMantle ecosystem which makes our suite of products and services stand out",
    descriptionVariant: "body1",
    descriptionOnLeft: false, // >>> default: false
    descriptionStyle: false, // object of styles or false
    backgroundImage: "", // "url('/images/mantleplace.png')",
    leftImage: "/AdvantageSection/advantage_bg.png", // "url('/images/mantleplace.png')",
    ctas: [
      {
        title: "Whitepaper",
        url: "https://docs.assetmantle.one/AssetMantle_Whitepaper/",
        icon: "article", // url: "/" or component: <Icon/>
        target: "_blank", // valid values: "_blank", "_self", "_parent", "_top" >>>default: "_self"
        disabled: false,
        variant: "contained",
      },
      {
        title: "litepaper",
        url: "/static/litepaper.pdf",
        icon: "file_download", // url: "/" or component: <Icon/>
        target: "_blank", // valid values: "_blank", "_self", "_parent", "_top" >>>default: "_self"
        disabled: false,
        variant: "outlined",
      },
    ],
    initiatives: [
      {
        icon: "/AdvantageSection/multiChain.svg", // add component: <Icon sx={styles} /> or url: "https://icon.png"
        title: "Multi-Chain Access",
        description:
          "Trade NFT on other chains or show them off across metaverses",
      },
      {
        icon: "/AdvantageSection/highEconomical.svg", // add component: <Icon sx={styles} /> or url: "https://icon.png"
        title: "Highly Economical ROI",
        description:
          "Leverage a rich NFT Economy on an IBC enabled Cosmos Ecosystem at negligible cost",
      },
      {
        icon: "/AdvantageSection/multiplePayment.svg", // add component: <Icon sx={styles} /> or url: "https://icon.png"
        title: "Multiple Payment Modes",
        description:
          "Experience AssetMantle with fiat currency, coins or stablecoins",
      },
      {
        icon: "/AdvantageSection/noCodeCustomization.svg", // add component: <Icon sx={styles} /> or url: "https://icon.png"
        title: "No-Code Customization Engine",
        description:
          "Experience No-Code NFT Marketplace creation with plug-and-play NFT Modules",
      },
    ],
  };
  const initiativeSectionListStyle = {
    background: "transparent",
    pl: { xs: 2, md: 0 },
    pr: 2,
    py: 3,

    color: "primary.light",
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
    alignItems: "center",
    textAlign: { xs: "center", md: "left" },
  };
  const universeSectionLeftSubSectionData = {
    sectionTitle: "The Mantle Universe",
    sectionSubTitle:
      "Apart from the AssetMantle ecosystem, there is an extended ecosystem called MantleLabs that commits to community driven development",
    paperVariant: "translucent",
    buttonVariant: "contained",
    items: [
      {
        image: "images/universe_section/Mantle_Products.png",
        title: "Mantle Products",
        subData: [
          "MantlePlace",
          "MantleBuilder",
          "MantleWallet",
          "MantleExplorer",
          "+2 More",
        ],
      },
      {
        image: "images/universe_section/Mantle_Chain.png",
        title: "Mantle-1 Chain",
        subData: ["$MNTL Token", "Foundation Validators"],
      },
      {
        image: "images/universe_section/Mantle_Creatives.png",
        title: "Mantle Creatives",
        subData: ["Membership NFTs", "Mantlers", "AssMan NFTs"],
      },
      {
        image: "images/universe_section/Community_Initiatives.png",
        title: "Community Initiatives",
        subData: ["InterNFT", "Artist4Web3", "MantleArmy"],
      },
    ],
  };
  const universeSectionRightSubSectionData = {
    titleColor: "primary.main",
    listVariant: "body1",
    titleVariant: "h4",
    items: [
      {
        image: "images/universe_section/Partnerships.png",
        title: "Partnerships",
        subData: ["Vaildators", "DAOs", "Investors", "Media", "+2 More"],
      },
      {
        image: "images/universe_section/Ecosystem_Projects.png",
        title: "Ecosystem Projects",
        subData: ["MyriadFlow", "RushRaids", "Xtrathin"],
      },
      {
        image: "images/universe_section/Integrations.png",
        title: "Integrations",
        subData: ["Modules", "NFT Toolings", "Analytics", "LaunchPads"],
      },
      {
        image: "images/universe_section/Grants.png",
        title: "Grants",
        subData: ["Internal Development", "External Integrations", "Products"],
      },
    ],
  };
  const universeSectionHeaderLogoStyles = {
    height: "170px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
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
        designation: "Founder, Core - Product Planning & Implementation​",
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
      {
        image: "/TeamSection/abhinav.png",
        name: "Abhinav Kumar",
        designation: "Co-Founder, Core - Product Planning & Implementation​",
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
      },
      {
        image: "/TeamSection/kamlesh.png",
        name: "Kamlesh Parikarath",
        designation: "Core - Product Development & Growth",
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
        image: "/TeamSection/naman.png",
        name: "Naman Kabra",
        designation: "Core - Business Development & Growth",
        designationType: "Founding",
        social: [
          {
            icon: "LinkedIn",
            href: "https://www.linkedin.com/in/namankabra/",
          },
          {
            icon: "Twitter",
            href: "https://twitter.com/307naman",
          },
          {
            icon: "GitHub",
            href: "https://github.com/nk307",
          },
        ],
      },
      {
        image: "/TeamSection/sachin.png",
        name: "Sachin Matta",
        designation: "Core - Product Marketing and Communications",
        designationType: "Founding",
        social: [
          {
            icon: "LinkedIn",
            href: "https://www.linkedin.com/in/sachin-matta/",
          },
          {
            icon: "Twitter",
            href: "https://twitter.com/ciberexplosion",
          },
          {
            icon: "GitHub",
            href: "https://github.com/ciberexplosion",
          },
        ],
      },
      {
        image: "/TeamSection/prabhav.png",
        name: "Prabhav Varambally",
        designation: "Core - Business Operations & Strategy",
        designationType: "Founding",
        social: [
          {
            icon: "LinkedIn",
            href: "https://www.linkedin.com/in/prabhavtv/",
          },
          {
            icon: "Twitter",
            href: "https://twitter.com/Prabhavv_",
          },
          {
            icon: "GitHub",
            href: "https://github.com/Prabhavv",
          },
        ],
      },
      {
        image: "/TeamSection/harman.png",
        name: "Harman Sohi",
        designation: "Design Lead",
        designationType: "Design",
        social: [
          {
            icon: "LinkedIn",
            href: "https://www.linkedin.com/in/harman-sohi-she-her-2590b8b4/",
          },
          {
            icon: "Twitter",
            href: "https://twitter.com/NotHarmanSohi",
          },
          {
            icon: "Behance",
            href: "https://www.behance.net/sohiharman",
          },
        ],
      },
      {
        image: "/TeamSection/sarin.png",
        name: "Sarin Venugopal",
        designation: "Product Marketing & Operations",
        designationType: "Developer",
        social: [
          {
            icon: "LinkedIn",
            href: "https://www.linkedin.com/in/sarin-venugopal-3123638/",
          },
          {
            icon: "Twitter",
            href: "https://twitter.com/the_bad_apple_",
          },
        ],
      },
      {
        image: "/TeamSection/pratik.png",
        name: "Pratik Balar",
        designation: "DevOps & Infrastructure",
        designationType: "Founding",
        social: [
          {
            icon: "LinkedIn",
            href: "https://www.linkedin.com/in/pratikbalar",
          },
          {
            icon: "Twitter",
            href: "https://twitter.com/pratikbin",
          },
          {
            icon: "GitHub",
            href: "https://github.com/pratikbin",
          },
          {
            icon: "Website",
            href: "https://pratikb.in/",
          },
        ],
      },
      {
        image: "/TeamSection/sarvagya.png",
        name: "Sarvagya Sagar",
        designation: "Research and DevSecOps​",
        designationType: "Founding",
        social: [
          {
            icon: "LinkedIn",
            href: "https://www.linkedin.com/in/iamsarvagyaa/",
          },
          {
            icon: "Twitter",
            href: "https://twitter.com/iamsarvagyaa",
          },
          {
            icon: "GitHub",
            href: "https://github.com/iamsarvagyaa",
          },
          {
            icon: "Website",
            href: "https://sarvagya.me",
          },
        ],
      },
      {
        image: "/TeamSection/arun.png",
        name: "Arun Ramesan",
        designation: "Visual Designer​",
        designationType: "Design",
        social: [
          {
            icon: "LinkedIn",
            href: "https://www.linkedin.com/in/arunramesan",
          },
          {
            icon: "Behance",
            href: "https://www.behance.net/arxwork",
          },
          {
            icon: "Instagram",
            href: "https://www.instagram.com/arxwork",
          },
        ],
      },
      {
        image: "/TeamSection/mrinal.png",
        name: "Mrinal Vishwanath",
        designation: "Product Marketing and PR Strategist",
        designationType: "Developer",
        social: [
          {
            icon: "LinkedIn",
            href: "https://www.linkedin.com/in/mrinal-vishwanath-813a07137",
          },
          {
            icon: "Twitter",
            href: "https://twitter.com/MrinalVishwana1",
          },
          {
            icon: "GitHub",
            href: "https://github.com/MrinalVishy",
          },
        ],
      },
      {
        image: "/TeamSection/jagdish.png",
        name: "Jagdish Chudasama",
        designation: "UI/UX Developer​",
        designationType: "Developer",
        social: [
          {
            icon: "LinkedIn",
            href: "https://www.linkedin.com/in/chudasama-jagdish-3759981b1/",
          },
          {
            icon: "GitHub",
            href: "https://github.com/chudasamajd",
          },
          {
            icon: "Twitter",
            href: "https://twitter.com/JagdishChudas15",
          },
          {
            icon: "Website",
            href: `https://chudasamajd.github.io/chudasamajd`,
          },
        ],
      },
      {
        image: "/TeamSection/namaha.png",
        name: "Namaha Shetty",
        designation: "UI/UX Designer",
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
      {
        image: "/TeamSection/ankit.png",
        name: "Ankit Kumar",
        designation: "Blockchain Developer",
        designationType: "Founding",
        social: [
          {
            icon: "LinkedIn",
            href: "https://www.linkedin.com/in/0xankit",
          },
          {
            icon: "Twitter",
            href: "https://mobile.twitter.com/me_0xankit",
          },
          {
            icon: "GitHub",
            href: "https://github.com/0xankit",
          },
        ],
      },
      {
        image: "/TeamSection/aditya.png",
        name: "Aditya Nalini",
        designation: "NFT Strategist",
        designationType: "Developer",
        social: [
          {
            icon: "LinkedIn",
            href: "https://www.linkedin.com/in/adinalini",
          },
          {
            icon: "Twitter",
            href: "https://twitter.com/adinalini",
          },
          {
            icon: "GitHub",
            href: "https://github.com/adinalini",
          },
        ],
      },
      {
        image: "/TeamSection/rohit.png",
        name: "Rohit Sharma",
        designation: "Creators Communications and Integrations",
        designationType: "Developer",
        social: [
          {
            icon: "Twitter",
            href: "https://twitter.com/SharmaJiKaSon1",
          },
          {
            icon: "Website",
            href: "https://www.instagram.com/schoolboy_sharma",
          },
        ],
      },
    ],
  };
  const teamSectionOptionStyles = {
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
  };
  const teamSectionLinkStyles = {
    color: "primary.light",
    "&:hover": {
      color: "primary.main",
    },
  };
  const socialProofSectionConfigData = {
    textAlign: "center",
    title: "Featured In",
    titleComponent: "",
    titleVariant: "h1",
    description: "A quick look into the social proof aspect surrounding AssetMantle to get the bearings of its wide adoption factor",
    descriptionStyle: { maxWidth: "min(836px, 100%)", margin: "0 auto" }, // object of styles or false
    features: [
      // object template
      // {
      //   title: "",
      //   image: "",
      //   link: "",
      // },
      {
        title: "yahoo finance",
        image: "/SocialProofSection/yahoo_finance.png",
        link: "https://finance.yahoo.com/news/assetmantle-launches-long-awaited-mainnet-150000066.html",
      },
      {
        title: "coinquora",
        image: "/SocialProofSection/coinquora.png",
        link: "https://coinquora.com/avigation-ai-collabs-with-assetmantle-to-revamp-nfts-via-ai-integration/",
      },
      {
        title: "digitaljournal",
        image: "/SocialProofSection/digitaljournal.png",
        link: "https://www.digitaljournal.com/pr/assetmantle-launches-its-long-awaited-mainnet",
      },
      {
        title: "investing.com",
        image: "/SocialProofSection/investing.png",
        link: "https://m.investing.com/news/cryptocurrency-news/avigation-ai-collabs-with-assetmantle-to-revamp-nfts-via-ai-integration-2820215?ampMode=1",
      },
      {
        title: "techbullion",
        image: "/SocialProofSection/techbullion.png",
        link: "https://techbullion.com/talking-nfts-with-assetmantle-founder-deepanshu-tripathi/",
      },
    ],
  };

  const socialProofSectionOptionContainerStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: { xs: "center", md: "space-around" },
    flexWrap: "wrap",

    pt: 10,
  };

  return {
    props: {
      heroSectionConfigData,
      heroSectionStyle,
      gallerySectionConfigData,
      gallerySectionOptionStyle,
      featureSectionConfigData,
      featureSectionOptionContainerStyles,
      featureSectionOptionStyles,
      infoSectionConfigData,
      infoSectionListStyle,
      chainSectionConfigData,
      initiativeSectionConfigData,
      initiativeSectionListStyle,
      universeSectionRightSubSectionData,
      universeSectionLeftSubSectionData,
      universeSectionHeaderLogoStyles,
      teamSectionConfigData,
      teamSectionOptionStyles,
      teamSectionLinkStyles,
      socialProofSectionConfigData,
      socialProofSectionOptionContainerStyles,
    },
  };
}
