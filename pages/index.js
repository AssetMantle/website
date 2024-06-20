import * as React from "react";
// import UniverseSection from "../views/home/UniverseSection";
// import AdvantageSection from "../views/home/AdvantageSection";
import ChainSection from "../views/home/ChainSection";
import FeatureSection from "../views/home/FeatureSection";
import GallerySection from "../views/home/GallerySection";
import HeroSection from "../views/home/HeroSection";
// import InfoSection from "../views/home/InfoSection";
// import SocialProofSection from "../views/home/SocialProofSection";
// import SubscribeSection from "../views/SubscribeSection";
// import TeamSection from "../views/home/TeamSection";
import ControlledIdentity from "../views/home/ControlledIdentity";
import IdentityStandard from "../views/home/IdentityStandard";
import Web3EcoSystem from "../views/home/Web3EcoSystem";

export default function Index(props) {
  return (
    <>
      <HeroSection configData={props.heroSectionConfigData} />
      <GallerySection configData={props.gallerySectionConfigData} />
      <ControlledIdentity configData={props.controlledIdentityData} />
      <IdentityStandard configData={props.identityStandardConfigData} />
      <Web3EcoSystem configData={props.web3EcoConfigData} />
      <ChainSection chainSectionConfigData={props.chainSectionConfigData} />
      <FeatureSection configData={props.featureSectionConfigData} />
      {/* 
      <InfoSection configData={props.infoSectionConfigData} />
      <AdvantageSection configData={props.advantageSectionConfigData} />
      <UniverseSection configData={props.universeSectionConfigData} />
      <TeamSection configData={props.teamSectionConfigData} />
      <SocialProofSection configData={props.socialProofSectionConfigData} /> */}
      {/* <SubscribeSection /> */}
    </>
  );
}
export async function getStaticProps() {
  const heroSectionConfigData = {
    titleText1: "Unlocking",
    titleText2: "the future of",
    titleText3: "Asset Economy",
    subtitle:
      "Pioneering standard for Asset~~lineBreak~~Tokenization & Digital Identity in Web3 Era .",
    buttons: [
      {
        label: "Learn More",
        // endIcon: "keyboard_arrow_right",
        variant: "contained",
        href: "/about",
      },
      // {
      //   label: "Documentation",
      //   endIcon: "article",
      //   variant: "contained",
      //   href: "https://docs.assetmantle.one/",
      // },
    ],
    image: "/HeroSection/hero.png",
    translucentStripData: [
      { amount: "35k+", top: "COMMUNITY", bottom: "MEMBERS" },
      { amount: "93k+", top: "UNIQUE WALLETS", bottom: "& USERS" },
      { amount: "3M+", top: "TRANSACTIONS", bottom: "ON-CHAIN" },
    ],
    sectionStyle: {
      pt: 4,
      mt: 2,
      pb: 4,
      mb: 4,
      color: "primary.light",
      textAlign: { xs: "center", sm: "center", md: "center" },
      titleVariant: "h2",
      titleColor: "secondary.main",
      subTitleVariant: "subtitle1",
      subTitleColor: "primary.light",
    },
  };
  const gallerySectionConfigData = {
    paperVariant: "translucent",
    titleVariant: "h2",
    titleColor: "primary.light",
    descriptionVariant: "subtitle1",
    descriptionColor: "primary.light",
    textAlign: "center", // >>> default: left
    title: "Digitally Owned Assets ",
    titleComponent: "h2",
    endIcon: "keyboard_arrow_right",
    description:
      "Our own ‘Specification Driven Approach’ for onboarding tokenized assets, enabling highest interoperability and composability",
    descriptionStyle: { maxWidth: "min(836px, 100%)", margin: "0 auto" }, // object of styles or false

    itemTitleVariant: "h5",
    itemDescriptionVariant: "body2",
    optionStyle: {
      background: "transparent",
      maxWidth: 272,
      boxShadow: "none",
      height: "100%",
      mx: "auto",
      padding: "0",
      textAlign: { xs: "center", md: "left" },
      display: "flex",
      flexDirection: "column",
    },
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
        image: "/GallerySection/Enterprise_Assets.png",
        title: "Enterprise Assets",
        description:
          "Assets of businesses or organizations unlocking financial opportunities & enhanced liquidity in tokenized form",
        width: 190,
        // buttons: [
        //   {
        //     text: "Learn More",
        //     url: "https://docs.assetmantle.one/MantleBuilder_Overview/",
        //   },
        // ],
      },
      {
        image: "/GallerySection/RWA.png",
        title: "RWAs",
        description:
          "Real world assets tokenized and issued in web3 infrastructure for high value creation and lifecycle management",
        width: 200,
        // buttons: [
        //   {
        //     text: "Learn More",
        //     url: "https://wallet.assetmantle.one/",
        //   },
        // ],
      },
      {
        image: "/GallerySection/Web3_Native_Assets.png",
        title: "Web3 Native Assets",
        description:
          "New Generation web3 assets like collectibles, digital art, game assets etc., defining a new asset class",
        width: 190,
        // buttons: [
        //   {
        //     text: "Learn More",
        //     url: "https://marketplace.assetmantle.one/",
        //   },
        // ],
      },
      {
        image: "/GallerySection/Hybrid_Assets.png",
        title: "Hybrid Assets",
        description:
          "Assets which might exist in real world but controlled by legacy digital systems, upgraded to web3 based assets",
        width: 250,
        // buttons: [
        //   {
        //     text: "Learn More",
        //     url: "https://explorer.assetmantle.one/",
        //   },
        // ],
      },
    ],
  };
  const controlledIdentityData = {
    title: "Digitally Controlled Identities ",
    description:
      "Implement the new in identity paradigm, like Programmatic Verifiability & Universal IDs, using W3C Recommended Specification",

    textAlign: "", // >>> default: left
    fullWidth: false, // boolean
    smallDeviceColumnDirections: "", // only "reverse" or "" >>>>>>default is "no-reverse"

    listStyle: {
      margin: { xs: "auto", md: "auto 0" },
      height: "100%",
    },

    IdentityTitleVariant: "h5",
    IdentitySubtitleVariant: "body2",

    identities: [
      {
        icon: "/identity/ssi.png",
        title: "Self-Sovereign Identity",
        description:
          "SSI allows individual to have complete control over their abstracted account, to create, own, manage and share their identity information",
        width: 238,
      },
      {
        icon: "/identity/verified.png",
        title: "Company Verified",
        description:
          "Identities representing enterprise actors, which are verifiable on-chain and also programmatically using Verifiable Credentials",
        width: 205,
      },
      {
        icon: "/identity/kyc.png",
        title: "KYC Verified",
        description:
          "Identities bearing KYC verified status of their individual sovereign, verifiable on-chain and also programmatically using Verifiable Credentials",
        width: 238,
      },
      {
        icon: "/identity/pi.png",
        title: "Pseudonymous Identity",
        description:
          "Authorized minimal Identities which doesn’t contain any PII, but universally interoperable with any ecosystem",
        width: 200,
      },
      {
        icon: "/identity/trusted.png",
        title: "Trusted Authority",
        description:
          "Authoritative identities representing Govt., executive, financial or autonomous bodies, again, verifiable on-chain and also programmatically",
        width: 238,
      },
      {
        icon: "/identity/community.png",
        title: "Community Verified",
        description:
          "Identities digitally verified by a community or network of stakeholders, subsequently building trust, which are verifiable. ",
        width: 205,
      },
    ],
  };
  const identityStandardConfigData = {
    paperVariant: "translucent",
    titleVariant: "h2",
    titleColor: "primary.light",
    descriptionVariant: "subtitle1",
    descriptionColor: "primary.light",
    textAlign: "center", // >>> default: left
    title: "Asset & Identity Standards ",
    titleComponent: "h2",
    endIcon: "keyboard_arrow_right",
    description:
      "Our proprietary specifications evolved over 2 years for process driven asset definitions for maximizing asset-value",
    descriptionStyle: { maxWidth: "min(926px, 100%)", margin: "0 auto" }, // object of styles or false

    itemTitleVariant: "h4",
    itemSubtitleVariant: "h5",
    itemDescriptionVariant: "body2",
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
        image: "/images/idoa-n.png",
        title: "iDOA",
        subtitle: "Industrial Digitally Owned Assets",
        description:
          "Our proprietary standard for digitally owned assets from which all asset class are fabricated",
      },
      {
        image: "/images/idci-n.png",
        title: "iDCI ",
        subtitle: "Industrial Digitally Controlled Identity",
        description:
          "Our proprietary standard for digitally controlled identity implemented by our complete identity stack",
      },
      {
        image: "/images/idoc-n.png",
        title: "iDOC",
        subtitle: "Industrial Digitally Owned or Controlled Entities",
        description:
          "Our proprietary universal standard for any industrial entity (assets or identities)   ",
      },
    ],
    optionStyle: {
      background: "transparent",
      // maxWidth: 272,
      boxShadow: "none",
      height: "100%",
      mx: "auto",
      padding: "0",
      textAlign: { xs: "center", md: "left" },
      display: "flex",
      flexDirection: "column",
    },
  };
  const web3EcoConfigData = {
    titleVariant: "h2",
    titleColor: "primary.light",
    descriptionVariant: "subtitle1",
    descriptionColor: "primary.light",
    textAlign: "center", // >>> default: left
    title: "Our Web3 Ecosystem",
    titleComponent: "h2",
    endIcon: "keyboard_arrow_right",
    description:
      "Our very own Web3 ecosystem comprising of value creators and consumers which can act as an economic platform for you",
    descriptionStyle: { maxWidth: "min(836px, 100%)", margin: "0 auto" }, // object of styles or false
    left: {
      description:
        "Our first foray into public Web3 Native assets has been remarkably successful, issuing collectibles, digital art NFTs, PFP NFTs, Audio NFTs etc., in our own NFT Marketplace. We have created a large community of Digital Creators who are hugely incentivized to use our platform.",

      desStyle: {
        maxWidth: { xs: "100%", md: 356 },
        ml: "auto",
        mr: { xs: "auto", md: "0" },
        textAlign: { xs: "center", md: "right" },
        fontWeight: "400",
      },
      itemTitleVariant: "h6",
      itemDescriptionVariant: "caption",
      optionStyle: {
        background: "transparent",
        maxWidth: 350,
        boxShadow: "none",
        height: "100%",
        mx: "auto",
        padding: "0 11px",
        textAlign: { xs: "center", md: "left" },
        display: "flex",
        flexDirection: "column",
      },
      cards: [
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
          image: "/GallerySection/mantleplace_v2.png",
          title: "MantlePlace",
          description:
            "Natively built fully custodial NFT Marketplace for web3 native assets, founded in AssetMantle Blockchain",
          buttons: [
            {
              text: "Learn More",
              url: "https://marketplace.assetmantle.one/",
            },
          ],
        },
        {
          image: "/GallerySection/mantleplace_web3_v2.png",
          title: "MantlePlace web3",
          description:
            "Coming soon, a non-custodial version of NFT Secondary Marketplace, giving full control of keys to the users",
          buttons: [
            {
              text: "Coming Soon",
              url: "https://docs.assetmantle.one/MantleBuilder_Overview/",
              disabled: true,
            },
          ],
        },
      ],
    },
    right: {
      description:
        "Our extended network of partners, incubators and collaborators contribute to growing AssetMantle Ecosystem and creating value for the assets onboarded. The democratization of value creation for assets is unique to web3 based ecosystem.",

      desStyle: {
        maxWidth: { xs: "100%", md: 320 },
        mx: { xs: "auto", md: 0 },
        textAlign: { xs: "center", md: "left" },
        fontWeight: "400",
      },
      link: {
        text: "Learn More about<br/>AssetMantle Extended Ecosystem",
        url: "https://marketplace.assetmantle.one/",
        endIcon: "keyboard_arrow_right",
      },
      button: {
        text: "View The Ecosystem",
        url: "/ecosystems",
        endIcon: "keyboard_arrow_right",
      },
    },
  };
  const chainSectionConfigData = {
    textAlign: "", // >>> default: left
    title: "The AssetMantle Blockchain",
    subTitle:
      "Our primary Verifiable Data Registry, customized for Enterprise Readiness and Web3 Scaling ",
    subSectionTitle: "$MNTL",
    subSectionTitleIcon: "/ChainSection/token_m.png", // url:"/someImage.png">>> default: none
    subSectionTitleVariant: "h2",
    subSectionTitleColor: "secondary.light",
    subSectionDescription:
      "The native token powering the AssetMantle NFT economy",
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

        icon: "keyboard_arrow_right", // url: "/" or component: <Icon/>
        target: "_blank", // valid values: "_blank", "_self", "_parent", "_top" >>>default: "_self"
        disabled: false,
        variant: "contained",
      },
      {
        title: "Airdrops",
        url: "https://airdrop.assetmantle.one/",

        icon: "call_made", // url: "/" or component: <Icon/>

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
  const featureSectionConfigData = {
    paperVariant: "translucent",
    textAlign: "center",
    title: "Benefits",
    titleComponent: "",
    titleVariant: "h2",
    titleColor: "primary.light",
    descriptionColor: "primary.light",
    description:
      "Discover whole new kinds of benefit creation from the new Web3 Technologies based Digital Transformation",
    descriptionStyle: { maxWidth: "min(836px, 100%)", margin: "0 auto" }, // object of styles or false
    featuresArray: [
      {
        href: "",
        icon: "/FeatureSection/futureInteroperability.svg", // put icon component or url >>don't forgot to change the below
        title: "Asset Class Interoperability",
        titleVariant: "h6",
        titleColor: "primary.light",
        description:
          "Our universal standard-based asset creation ensures highest levels of interoperability creating possibilities of transfer of value between any asset class, even those undiscovered today",
        descriptionVariant: "body2",
        descriptionColor: "secondary.main",
      },
      {
        href: "",
        icon: "/FeatureSection/optimizedForNft.svg", // put icon component or url >>don't forgot to change the below
        title: "Value Actualization",
        titleVariant: "h6",
        titleColor: "primary.light",
        description:
          "Discover new ways and types of creating value for your assets in a connected collaborative ecosystem where 3rd parties create protocols that can leverage your assets to build new value chains.",
        descriptionVariant: "body2",
        descriptionColor: "secondary.main",
      },
      {
        href: "",
        icon: "/FeatureSection/fastOrderFulfillment.svg", // put icon component or url >>don't forgot to change the below
        title: "Improved Capital Efficiency",
        titleVariant: "h6",
        titleColor: "primary.light",
        description:
          "Tokenization can deliver meaningful capital efficiencies in certain capital market use cases. Shorter settlement times generate significant savings in high-interest-rate environments such as the current cycle.",
        descriptionVariant: "body2",
        descriptionColor: "secondary.main",
      },
      {
        href: "",
        icon: "/FeatureSection/pioneeringCosmosEco.svg", // put icon component or url >>don't forgot to change the below
        title: "Democratization of access",
        titleVariant: "h6",
        titleColor: "primary.light",
        description:
          "Among tokenization’s most touted benefits is the inherent democratization of access, which offers potential for improved liquidity resulting from the fractionalization of assets.",
        descriptionVariant: "body2",
        descriptionColor: "secondary.main",
        descriptionWidth: 295,
      },
      {
        href: "",
        icon: "/FeatureSection/extremelyLowFees.svg", // put icon component or url >>don't forgot to change the below
        title: "Operational cost savings",
        titleVariant: "h6",
        titleColor: "primary.light",
        description:
          " Reduce inefficiencies like expensive paper-based processes to multiple intermediaries, disconnected data silos, and slow transaction settlement etc. Faced by traditional capital and asset markets.",
        descriptionVariant: "body2",
        descriptionColor: "secondary.main",
      },
      {
        href: "",
        icon: "/FeatureSection/completelySecure.svg", // put icon component or url >>don't forgot to change the below
        title: "Enhanced Transparency",
        titleVariant: "h6",
        titleColor: "primary.light",
        description:
          "Asset issuers could automate manual compliance checks by embedding specific compliance-related actions into tokenized assets, improving auditability ",
        descriptionVariant: "body2",
        descriptionColor: "secondary.main",
        descriptionWidth: 250,
      },
    ],
    optionContainerStyles: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexWrap: "wrap",
      gap: "14px",
      mt: 5,
    },
    optionStyles: {
      background: "transparent",
      maxWidth: 374,
      boxShadow: "none",
      padding: "16px 22px",
      minHeight: "296px",
      transition: "all 0.3s ease-in-out",
      color: "primary.light",
      // "&:hover": {
      //   backgroundColor: "navBg",
      // },
    },
  };
  // not being used
  const infoSectionConfigData = {
    textAlign: "", // >>> default: left
    fullWidth: false, // boolean
    smallDeviceColumnDirections: "", // only "reverse" or "" >>>>>>default is "no-reverse"
    contentMaxWidth: "", // "number+px"(ie. "100px") or "" >>>>>>default is "457px"
    title: "Distributed NFT economy",
    titleComponent: "h2",
    titleVariant: "h3",
    titleColor: "secondary.main",
    description: [
      "AssetMantle’s suite of products creates a distributed NFT economy where users can not only develop NFT collections but also their own NFT marketplaces and storefronts.",
      "This shopifying of NFT assets leads to a distributed environment of networks, with the world state stored exclusively in the AssetMantle chain.",
    ],
    descriptionVariant: "body2",
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
    listStyle: {
      margin: { xs: "auto", md: "auto 0" },
      height: "100%",
    },
  };
  const advantageSectionConfigData = {
    paperVariant: "translucent",
    textAlign: "center", // >>> default: left
    title: "Our Advantage",
    titleOnLeft: false, // >>> default: false
    titleColor: "primary.main",
    titleVariant: "h4",
    description:
      "Discover the unique qualities inherent to the AssetMantle ecosystem, truly differentiating our suite of products and services",
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
        title: "Multichain Access",
        description:
          "Trade NFTs across other chains or show them off across metaverses",
      },
      {
        icon: "/AdvantageSection/highEconomical.svg", // add component: <Icon sx={styles} /> or url: "https://icon.png"
        title: "Highly Economical ROI",
        description:
          "Leverage a rich NFT economy on an IBC-enabled Cosmos ecosystem chain with negligible costs",
      },
      {
        icon: "/AdvantageSection/multiplePayment.svg", // add component: <Icon sx={styles} /> or url: "https://icon.png"
        title: "Multiple Payment Options",
        description:
          "Experience AssetMantle with fiat, digital assets, or stablecoins",
      },
      {
        icon: "/AdvantageSection/noCodeCustomization.svg", // add component: <Icon sx={styles} /> or url: "https://icon.png"
        title: "No-Code Customization Engine",
        description:
          "Experience no-code NFT marketplace creation with plug-and-play NFT modules",
      },
    ],
    listStyle: {
      background: "transparent",
      pl: { xs: 2, md: 0 },
      pr: 2,
      py: 3,

      color: "primary.light",
      display: "flex",
      flexDirection: { xs: "column", md: "row" },
      alignItems: "center",
      textAlign: { xs: "center", md: "left" },
    },
  };
  const universeSectionConfigData = {
    sectionTitle: "The Mantle Universe",
    sectionSubTitle:
      "Apart from our main ecosystem, there’s an extended ecosystem called MantleLabs that commits to community-driven development",
    paperVariant: "translucent",
    buttonVariant: "contained",
    listVariant: "body1",
    titleVariant: "h4",
    subSections: [
      {
        logo: "/static/Logo.svg",
        alt: "Assetmantle logo",
        childLogoBG: "transparent",
        styles: { width: "90%" },
        items: [
          {
            image: "UniverseSection/Mantle_Products.png",
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
            image: "UniverseSection/Mantle_Chain.png",
            title: "Mantle-1 Chain",
            subData: ["$MNTL Token", "Foundation Validators"],
          },
          {
            image: "UniverseSection/Mantle_Creatives.png",
            title: "Mantle Creatives",
            subData: ["Membership NFTs", "Mantlers", "AssMan NFTs"],
          },
          {
            image: "UniverseSection/Community_Initiatives.png",
            title: "Community Initiatives",
            subData: ["InterNFT", "Artist4Web3", "MantleArmy"],
          },
        ],
      },
      {
        logo: "UniverseSection/MLLogo.png",
        alt: "MantleLab logo",
        childLogoBG: "transparent",
        styles: { width: "65%" },
        items: [
          {
            image: "UniverseSection/Partnerships.png",
            title: "Partnerships",
            subData: ["Vaildators", "DAOs", "Investors", "Media", "+2 More"],
          },
          {
            image: "UniverseSection/Ecosystem_Projects.png",
            title: "Ecosystem Projects",
            subData: ["MyriadFlow", "RushRaids", "Xtrathin"],
          },
          {
            image: "UniverseSection/Integrations.png",
            title: "Integrations",
            subData: ["Modules", "NFT Toolings", "Analytics", "LaunchPads"],
          },
          {
            image: "UniverseSection/Grants.png",
            title: "Grants",
            subData: [
              "Internal Development",
              "External Integrations",
              "Products",
            ],
          },
        ],
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
        image: "/TeamSection/mukund.png",
        name: "Mukund Rawat",
        designation: "Blockchain Developer",
        designationType: "Developer",
        social: [
          {
            icon: "LinkedIn",
            href: "https://www.linkedin.com/in/mukund-rawat-7795871b1",
          },
        ],
      },
      {
        image: "/TeamSection/jathin.png",
        name: "Jathin Kotian",
        designation: "UI Developer",
        designationType: "Developer",
        social: [
          {
            icon: "LinkedIn",
            href: "https://www.linkedin.com/in/jathinkotian",
          },
        ],
      },
      {
        image: "/TeamSection/vismay.png",
        name: "Vismay Hegde",
        designation: "Marketing Associate",
        designationType: "Developer",
        social: [
          {
            icon: "Twitter",
            href: "https://twitter.com/BassetMantle",
          },
          {
            icon: "LinkedIn",
            href: "https://www.linkedin.com/in/vismay-hegde-b9a89a81/",
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
  const socialProofSectionConfigData = {
    textAlign: "center",
    title: "Featured In",
    titleComponent: "",
    titleVariant: "h1",
    description:
      "A quick look into the social proof aspect surrounding AssetMantle to get the bearings of its wide adoption factor",
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
    optionContainerStyles: {
      display: "flex",
      alignItems: "center",
      justifyContent: { xs: "center", md: "space-around" },
      flexWrap: "wrap",
      pt: { xs: 4, md: 6 },
    },
  };

  return {
    props: {
      heroSectionConfigData,
      gallerySectionConfigData,
      controlledIdentityData,
      identityStandardConfigData,
      web3EcoConfigData,
      chainSectionConfigData,
      featureSectionConfigData,
      // not in use
      infoSectionConfigData,
      advantageSectionConfigData,
      universeSectionConfigData,
      teamSectionConfigData,
      socialProofSectionConfigData,
    },
  };
}
