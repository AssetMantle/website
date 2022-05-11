import footerData from "../../data/footerData.json";
import homeData from "../../data/homeData.json";
import aboutData from "../../data/aboutData.json";
import pricingData from "../../data/pricingData.json";
import whatIsNFTData from "../../data/whatIsNFT.json";

const English = {
  translations: {
    // home data
    //  hero section
    HERO_TITLE: homeData.hero.title,
    HERO_DESCRIPTION: homeData.hero.description,

    // Services section
    SERVICES_1_TITLE: homeData.services.buildTitle,
    SERVICES_1_DESCRIPTION: homeData.services.buildDesc,
    SERVICES_1_BUTTONTEXT: homeData.services.buildBtnText,
    SERVICES_2_TITLE: homeData.services.shopTitle,
    SERVICES_2_DESCRIPTION: homeData.services.shopDesc,
    SERVICES_2_BUTTONTEXT: homeData.services.shopBtnText,

    // Overview section
    OVERVIEW_TITLE: homeData.overview.title,
    OVERVIEW_1_TITLE: homeData.overview.salesUSD,
    OVERVIEW_1_TITLE_2: homeData.overview.salesUSD2,
    OVERVIEW_2_TITLE: homeData.overview.totalSales,
    OVERVIEW_2_TITLE_2: homeData.overview.totalSales2,
    OVERVIEW_3_TITLE: homeData.overview.activeWallets,
    OVERVIEW_3_TITLE_2: homeData.overview.activeWallets2,

    //  WhatIsAssetMantle section
    WHAT_IS_ASSETMANTLE_TITLE: homeData.WhatIsAssetMantle.title,
    WHAT_IS_ASSETMANTLE_DESCRIPTION: homeData.WhatIsAssetMantle.description,
    WHAT_IS_ASSETMANTLE_LI_1: homeData.WhatIsAssetMantle.li1,
    WHAT_IS_ASSETMANTLE_LI_2: homeData.WhatIsAssetMantle.li2,
    WHAT_IS_ASSETMANTLE_LI_3: homeData.WhatIsAssetMantle.li3,
    WHAT_IS_ASSETMANTLE_LI_4: homeData.WhatIsAssetMantle.li4,
    WHAT_IS_ASSETMANTLE_LI_5: homeData.WhatIsAssetMantle.li5,
    WHAT_IS_ASSETMANTLE_LI_6: homeData.WhatIsAssetMantle.li6,
    WHAT_IS_ASSETMANTLE_LI_7: homeData.WhatIsAssetMantle.li7,
    WHAT_IS_ASSETMANTLE_LI_8: homeData.WhatIsAssetMantle.li8,

    // drop section
    DROP_TITLE: homeData.drop.title,
    DROP_DESCRIPTION: homeData.drop.description,
    DROP_BUTTON_TEXT: homeData.drop.button.title,

    // HowItWorks section
    HOW_IT_WORKS_TITLE: homeData.howItWorks.title,
    HOW_IT_WORKS_DESCRIPTION: homeData.howItWorks.description,
    HOW_IT_WORKS_OPTION_1: homeData.howItWorks.options[0].name,
    HOW_IT_WORKS_OPTION_1_DESCRIPTION:
      homeData.howItWorks.options[0].description,
    HOW_IT_WORKS_OPTION_1_1_TITLE: homeData.howItWorks.options[0].content[0].h3,
    HOW_IT_WORKS_OPTION_1_1_DESC: homeData.howItWorks.options[0].content[0].p_m,
    HOW_IT_WORKS_OPTION_1_2_TITLE: homeData.howItWorks.options[0].content[1].h3,
    HOW_IT_WORKS_OPTION_1_2_DESC: homeData.howItWorks.options[0].content[1].p_m,
    HOW_IT_WORKS_OPTION_1_3_TITLE: homeData.howItWorks.options[0].content[2].h3,
    HOW_IT_WORKS_OPTION_1_3_DESC: homeData.howItWorks.options[0].content[2].p_m,
    HOW_IT_WORKS_OPTION_1_4_TITLE: homeData.howItWorks.options[0].content[3].h3,
    HOW_IT_WORKS_OPTION_1_4_DESC: homeData.howItWorks.options[0].content[3].p_m,
    HOW_IT_WORKS_OPTION_2: homeData.howItWorks.options[1].name,
    HOW_IT_WORKS_OPTION_2_DESCRIPTION:
      homeData.howItWorks.options[1].description,
    HOW_IT_WORKS_OPTION_2_1_TITLE: homeData.howItWorks.options[1].content[0].h3,
    HOW_IT_WORKS_OPTION_2_1_DESC: homeData.howItWorks.options[1].content[0].p_m,
    HOW_IT_WORKS_OPTION_2_2_TITLE: homeData.howItWorks.options[1].content[1].h3,
    HOW_IT_WORKS_OPTION_2_2_DESC: homeData.howItWorks.options[1].content[1].p_m,
    HOW_IT_WORKS_OPTION_2_3_TITLE: homeData.howItWorks.options[1].content[2].h3,
    HOW_IT_WORKS_OPTION_2_3_DESC: homeData.howItWorks.options[1].content[2].p_m,
    HOW_IT_WORKS_OPTION_2_4_TITLE: homeData.howItWorks.options[1].content[3].h3,
    HOW_IT_WORKS_OPTION_2_4_DESC: homeData.howItWorks.options[1].content[3].p_m,

    // Getting Started section
    GETTING_STARTED_TITLE: homeData.gettingStarted.title,
    GETTING_STARTED_DESCRIPTION: homeData.gettingStarted.description,
    GETTING_STARTED_BODY_TITLE: homeData.gettingStarted.bodyTitle,
    GETTING_STARTED_BODY_DESCRIPTION: homeData.gettingStarted.bodyDescription,
    GETTING_STARTED_LIST_1_TITLE: homeData.gettingStarted.list1title,
    GETTING_STARTED_LIST_1_LI_1: homeData.gettingStarted.list1[0],
    GETTING_STARTED_LIST_1_LI_2: homeData.gettingStarted.list1[1],
    GETTING_STARTED_LIST_1_LI_3: homeData.gettingStarted.list1[2],
    GETTING_STARTED_LIST_1_LI_4: homeData.gettingStarted.list1[3],
    GETTING_STARTED_LIST_1_LI_5: homeData.gettingStarted.list1[4],
    GETTING_STARTED_LIST_1_LI_6: homeData.gettingStarted.list1[5],
    GETTING_STARTED_LIST_2_TITLE: homeData.gettingStarted.list2title,
    GETTING_STARTED_LIST_2_LI_1: homeData.gettingStarted.list2[0],
    GETTING_STARTED_LIST_2_LI_2: homeData.gettingStarted.list2[1],
    GETTING_STARTED_LIST_2_LI_3: homeData.gettingStarted.list2[2],
    GETTING_STARTED_LIST_2_LI_4: homeData.gettingStarted.list2[3],
    GETTING_STARTED_LIST_2_LI_5: homeData.gettingStarted.list2[4],
    GETTING_STARTED_LIST_2_LI_6: homeData.gettingStarted.list2[5],

    // AssetMantle Difference section
    ASSETMANTLE_DIFFERENCE_TITLE: homeData.amDif.title,
    ASSETMANTLE_DIFFERENCE_DESCRIPTION: homeData.amDif.description,
    ASSETMANTLE_DIFFERENCE_LIST_1_TITLE: homeData.amDif.contents[0].h3,
    ASSETMANTLE_DIFFERENCE_LIST_1_DESC: homeData.amDif.contents[0].p_m,
    ASSETMANTLE_DIFFERENCE_LIST_2_TITLE: homeData.amDif.contents[1].h3,
    ASSETMANTLE_DIFFERENCE_LIST_2_DESC: homeData.amDif.contents[1].p_m,
    ASSETMANTLE_DIFFERENCE_LIST_3_TITLE: homeData.amDif.contents[2].h3,
    ASSETMANTLE_DIFFERENCE_LIST_3_DESC: homeData.amDif.contents[2].p_m,
    ASSETMANTLE_DIFFERENCE_LIST_4_TITLE: homeData.amDif.contents[3].h3,
    ASSETMANTLE_DIFFERENCE_LIST_4_DESC: homeData.amDif.contents[3].p_m,

    //  Roadmap section
    ROADMAP_TITLE: homeData.RoadMap.title,
    ROADMAP_DESCRIPTION: homeData.RoadMap.description,
    ROADMAP_BUTTON_TEXT: homeData.RoadMap.btnText,

    // Whitepaper section
    WHITEPAPER_TITLE: homeData.whitepaper.title,
    WHITEPAPER_DESCRIPTION: homeData.whitepaper.description,
    WHITEPAPER_BUTTON_TEXT: homeData.whitepaper.button.title,
    WHITEPAPER_BUTTON_TEXT_2: homeData.whitepaper.button2.title,

    //  team section
    TEAM_TITLE: homeData.team.title,
    TEAM_DESCRIPTION: homeData.team.description,
    TEAM_BUTTON: homeData.team.button.text,

    // FAQ section
    FAQ_TITLE: homeData.faq.title,
    FAQ_DESCRIPTION: homeData.faq.description,
    FAQ_QUESTION_1: homeData.faq.qas[0].q,
    FAQ_ANSWER_1: homeData.faq.qas[0].a,
    FAQ_QUESTION_2: homeData.faq.qas[1].q,
    FAQ_ANSWER_2: homeData.faq.qas[1].a,
    FAQ_QUESTION_3: homeData.faq.qas[2].q,
    FAQ_ANSWER_3: homeData.faq.qas[2].a,
    FAQ_QUESTION_4: homeData.faq.qas[3].q,
    FAQ_ANSWER_4: homeData.faq.qas[3].a,
    FAQ_QUESTION_5: homeData.faq.qas[4].q,
    FAQ_ANSWER_5: homeData.faq.qas[4].a,
    FAQ_ANSWER_5_LI_1: homeData.faq.qas[4].list[0],
    FAQ_ANSWER_5_LI_2: homeData.faq.qas[4].list[1],
    FAQ_ANSWER_5_LI_3: homeData.faq.qas[4].list[2],
    FAQ_ANSWER_5_LI_4: homeData.faq.qas[4].list[3],
    FAQ_ANSWER_5_LI_5: homeData.faq.qas[4].list[4],
    FAQ_ANSWER_5_LI_6: homeData.faq.qas[4].list[5],
    FAQ_ANSWER_5_LI_7: homeData.faq.qas[4].list[6],
    FAQ_ANSWER_5_LI_8: homeData.faq.qas[4].list[7],
    FAQ_ANSWER_5_LI_9: homeData.faq.qas[4].list[8],
    FAQ_ANSWER_5_LI_10: homeData.faq.qas[4].list[9],
    FAQ_ANSWER_5_LI_11: homeData.faq.qas[4].list[10],

    // About Page
    // hero section
    ABOUT_HERO_TITLE: aboutData.hero.title,
    ABOUT_HERO_DESCRIPTION: aboutData.hero.description,

    // vision section
    ABOUT_VISION_TITLE: aboutData.vision.title,
    ABOUT_VISION_DESCRIPTION: aboutData.vision.vision,

    // mission section
    ABOUT_MISSION_TITLE: aboutData.mission.title,
    ABOUT_MISSION_DESCRIPTION: aboutData.mission.mission,

    // roadmap section
    ABOUT_ROADMAP_TITLE: aboutData.roadmap.title,
    ABOUT_ROADMAP_NOTE: aboutData.roadmap.note,

    // team section
    ABOUT_TEAM_TITLE: aboutData.team.title,
    ABOUT_TEAM_DESCRIPTION: aboutData.team.description,

    // Pricing Page
    // Amplify your NFT game section
    AMPLIFY_NFT_GAME_TITLE: pricingData.amplifyNFTGame.title,
    AMPLIFY_NFT_GAME_DESCRIPTION: pricingData.amplifyNFTGame.description,

    // Low Cost Mint section
    LOW_COST_MINT_TITLE: pricingData.lowCostMint.title,
    LOW_COST_MINT_DESCRIPTION: pricingData.lowCostMint.description,
    LOW_COST_MINT_TITLE_SEC: pricingData.lowCostMint.cost,
    LOW_COST_MINT_DESCRIPTION_SEC: pricingData.lowCostMint.cost,

    // Lowest Transaction costs section
    LOWEST_TRANSACTION_COSTS_TITLE: pricingData.lowestTransactionCosts.title,
    LOWEST_TRANSACTION_COSTS_DESCRIPTION:
      pricingData.lowestTransactionCosts.description,

    // Jump Right In section
    JUMP_RIGHT_IN_TITLE: pricingData.jumpRightIn.title,
    JUMP_RIGHT_IN_DESCRIPTION: pricingData.jumpRightIn.description,

    // Get Paid section
    GET_PAID_TITLE: pricingData.getPaid.title,
    GET_PAID_DESCRIPTION: pricingData.getPaid.description,
    GET_PAID_LIST_1_OPTION_1: pricingData.getPaid.list[0],
    GET_PAID_LIST_1_OPTION_2: pricingData.getPaid.list[1],
    GET_PAID_LIST_1_OPTION_3: pricingData.getPaid.list[2],
    GET_PAID_LIST_1_OPTION_4: pricingData.getPaid.list[3],
    GET_PAID_LIST_1_OPTION_5: pricingData.getPaid.list[4],
    GET_PAID_LIST_1_OPTION_6: pricingData.getPaid.list[5],
    GET_PAID_TITLE_2: pricingData.getPaid.h3,
    GET_PAID_DESCRIPTION_2: pricingData.getPaid.pl2,
    GET_PAID_LIST_2_OPTION_1_TITLE: pricingData.getPaid.list2[0].title,
    GET_PAID_LIST_2_OPTION_1_DESCRIPTION:
      pricingData.getPaid.list2[0].description,
    GET_PAID_LIST_2_OPTION_2_TITLE: pricingData.getPaid.list2[1].title,
    GET_PAID_LIST_2_OPTION_2_DESCRIPTION:
      pricingData.getPaid.list2[1].description,
    GET_PAID_LIST_2_OPTION_3_TITLE: pricingData.getPaid.list2[2].title,
    GET_PAID_LIST_2_OPTION_3_DESCRIPTION:
      pricingData.getPaid.list2[2].description,
    GET_PAID_LIST_2_OPTION_4_TITLE: pricingData.getPaid.list2[3].title,
    GET_PAID_LIST_2_OPTION_4_DESCRIPTION:
      pricingData.getPaid.list2[3].description,

    // Accepted Currencies section
    ACCEPTED_CURRENCIES_TITLE: pricingData.acceptedCurrencies.title,
    ACCEPTED_CURRENCIES_DESCRIPTION: pricingData.acceptedCurrencies.description,
    ACCEPTED_CURRENCIES_LIST_1: pricingData.acceptedCurrencies.list[0],
    ACCEPTED_CURRENCIES_LIST_2: pricingData.acceptedCurrencies.list[1],
    ACCEPTED_CURRENCIES_LIST_3: pricingData.acceptedCurrencies.list[2],
    ACCEPTED_CURRENCIES_LIST_4: pricingData.acceptedCurrencies.list[3],
    ACCEPTED_CURRENCIES_LIST_5: pricingData.acceptedCurrencies.list[4],
    ACCEPTED_CURRENCIES_LIST_6: pricingData.acceptedCurrencies.list[5],

    // What is an NFT section
    WHAT_IS_AN_NFT_PAGE_TITLE: whatIsNFTData.whatIsNFT.title,
    WHAT_IS_AN_NFT_PAGE_DESCRIPTION: whatIsNFTData.whatIsNFT.description,

    // Value Props section
    VALUE_PROPS_TITLE: whatIsNFTData.valueProps.title,
    VALUE_PROPS_DESCRIPTION: whatIsNFTData.valueProps.description,
    VALUE_PROPS_LIST_1_TITLE: whatIsNFTData.valueProps.list[0].title,
    VALUE_PROPS_LIST_1_DESCRIPTION: whatIsNFTData.valueProps.list[0].body,
    VALUE_PROPS_LIST_2_TITLE: whatIsNFTData.valueProps.list[1].title,
    VALUE_PROPS_LIST_2_DESCRIPTION: whatIsNFTData.valueProps.list[1].body,
    VALUE_PROPS_LIST_3_TITLE: whatIsNFTData.valueProps.list[2].title,
    VALUE_PROPS_LIST_3_DESCRIPTION: whatIsNFTData.valueProps.list[2].body,
    VALUE_PROPS_LIST_4_TITLE: whatIsNFTData.valueProps.list[3].title,
    VALUE_PROPS_LIST_4_DESCRIPTION: whatIsNFTData.valueProps.list[3].body,

    // Real Worlds Assets section
    REAL_WORLDS_ASSETS_TITLE: whatIsNFTData.realWorldAssets.title,
    REAL_WORLDS_ASSETS_DESCRIPTION: whatIsNFTData.realWorldAssets.description,
    REAL_WORLDS_ASSETS_LIST_1: whatIsNFTData.realWorldAssets.list[0],
    REAL_WORLDS_ASSETS_LIST_2: whatIsNFTData.realWorldAssets.list[1],
    REAL_WORLDS_ASSETS_LIST_3: whatIsNFTData.realWorldAssets.list[2],
    REAL_WORLDS_ASSETS_LIST_4: whatIsNFTData.realWorldAssets.list[3],
    REAL_WORLDS_ASSETS_LIST_5: whatIsNFTData.realWorldAssets.list[4],

    // USD Spent on NFTs section
    USD_SPENT_ON_NFT_TITLE: whatIsNFTData.USDSpent.title,
    USD_SPENT_ON_NFT_DESCRIPTION: whatIsNFTData.USDSpent.description,
    USD_SPENT_ON_NFT_LIST_1: whatIsNFTData.USDSpent.options[0].name,
    USD_SPENT_ON_NFT_LIST_2: whatIsNFTData.USDSpent.options[1].name,
    USD_SPENT_ON_NFT_LIST_3: whatIsNFTData.USDSpent.options[2].name,
    USD_SPENT_ON_NFT_LIST_4: whatIsNFTData.USDSpent.options[3].name,
    USD_SPENT_ON_NFT_LIST_5: whatIsNFTData.USDSpent.options[4].name,
    USD_SPENT_ON_NFT_DESCRIPTION2: whatIsNFTData.USDSpent.description2,

    // Mint Your NFTs section
    MINT_YOUR_NFT_TITLE: whatIsNFTData.mintYourNFT.title,
    MINT_YOUR_NFT_DESCRIPTION: whatIsNFTData.mintYourNFT.description,
    MINT_YOUR_NFT_LIST_1: whatIsNFTData.mintYourNFT.list[0],
    MINT_YOUR_NFT_LIST_2: whatIsNFTData.mintYourNFT.list[1],
    MINT_YOUR_NFT_LIST_3: whatIsNFTData.mintYourNFT.list[2],

    // Pre Mint NFTs section
    PRE_MINT_NFT_TITLE: whatIsNFTData.preMintNFT.title,
    PRE_MINT_NFT_DESCRIPTION: whatIsNFTData.preMintNFT.description,

    // Community Guidelines section
    COMMUNITY_GUIDELINES_TITLE: whatIsNFTData.communityGuidelines.title,
    COMMUNITY_GUIDELINES_DESCRIPTION:
      whatIsNFTData.communityGuidelines.description,
    COMMUNITY_GUIDELINES_LIST_1_NAME:
      whatIsNFTData.communityGuidelines.options[0].title,
    COMMUNITY_GUIDELINES_LIST_1_DESCRIPTION:
      whatIsNFTData.communityGuidelines.options[0].body,
    COMMUNITY_GUIDELINES_LIST_2_NAME:
      whatIsNFTData.communityGuidelines.options[1].title,
    COMMUNITY_GUIDELINES_LIST_2_DESCRIPTION:
      whatIsNFTData.communityGuidelines.options[1].body,
    COMMUNITY_GUIDELINES_LIST_3_NAME:
      whatIsNFTData.communityGuidelines.options[2].title,
    COMMUNITY_GUIDELINES_LIST_3_DESCRIPTION:
      whatIsNFTData.communityGuidelines.options[2].body,
    COMMUNITY_GUIDELINES_LIST_4_NAME:
      whatIsNFTData.communityGuidelines.options[3].title,
    COMMUNITY_GUIDELINES_LIST_4_DESCRIPTION:
      whatIsNFTData.communityGuidelines.options[3].body,
    COMMUNITY_GUIDELINES_LIST_5_NAME:
      whatIsNFTData.communityGuidelines.options[4].title,
    COMMUNITY_GUIDELINES_LIST_5_DESCRIPTION:
      whatIsNFTData.communityGuidelines.options[4].body,
    COMMUNITY_GUIDELINES_LIST_6_NAME:
      whatIsNFTData.communityGuidelines.options[5].title,
    COMMUNITY_GUIDELINES_LIST_6_DESCRIPTION:
      whatIsNFTData.communityGuidelines.options[5].body,

    // footer
    FOOTER_TITLE: footerData.contents.title,
    FOOTER_DESCRIPTION: footerData.contents.description,
    FOOTER_EMAIL_DESCRIPTION_1: footerData.contents.emailDescription1,
    FOOTER_EMAIL_DESCRIPTION_2: footerData.contents.emailDescription2,
    FOOTER_SOCIAL_TITLE: footerData.social.title,
    FOOTER_SUBSCRIBE_TITLE: footerData.contents.subscriptionTitle,
    FOOTER_BUG_BOUNTY_LABEL: footerData.contents.bugBountyLabel,
    FOOTER_FEATURE_LABEL: footerData.contents.featureLabel,
    FOOTER_BLOG_LABEL: footerData.contents.blogLabel,
    FOOTER_DOCS_LABEL: footerData.contents.docsLabel,
    FOOTER_EXPLORER_LABEL: footerData.contents.explorerLabel,

    // footer modals
    // Bug Bounty Modal
    BUG_BOUNTY_MODAL_TITLE: footerData.bugBounty.title,
    BUG_BOUNTY_MODAL_DESCRIPTION: footerData.bugBounty.description,
    BUG_BOUNTY_MODAL_NAME_LABEL: footerData.bugBounty.nameLabel,
    BUG_BOUNTY_MODAL_EMAIL_LABEL: footerData.bugBounty.emailLabel,
    BUG_BOUNTY_MODAL_TITLE_LABEL: footerData.bugBounty.titleLabel,
    BUG_BOUNTY_MODAL_DESCRIPTION_LABEL: footerData.bugBounty.descriptionLabel,
    BUG_BOUNTY_MODAL_CHECKBOX_1: footerData.bugBounty.checkBox1,
    BUG_BOUNTY_MODAL_CHECKBOX_2: footerData.bugBounty.checkBox2,
    BUG_BOUNTY_MODAL_SUBMIT_BUTTON_TEXT: footerData.bugBounty.button,
    BUG_BOUNTY_MODAL_SUBMIT_SUCCESS_TITLE: footerData.bugBounty.success.title,
    BUG_BOUNTY_MODAL_SUBMIT_SUCCESS_DESCRIPTION:
      footerData.bugBounty.success.description,
    BUG_BOUNTY_MODAL_SUBMIT_SUCCESS_BUTTON_TEXT:
      footerData.bugBounty.success.button,

    // Request A Feature Modal
    REQUEST_A_FEATURE_MODAL_TITLE: footerData.requestAFeature.title,
    REQUEST_A_FEATURE_MODAL_DESCRIPTION: footerData.requestAFeature.description,
    REQUEST_A_FEATURE_MODAL_NAME_LABEL: footerData.requestAFeature.nameLabel,
    REQUEST_A_FEATURE_MODAL_EMAIL_LABEL: footerData.requestAFeature.emailLabel,
    REQUEST_A_FEATURE_MODAL_TITLE_LABEL: footerData.requestAFeature.titleLabel,
    REQUEST_A_FEATURE_MODAL_DESCRIPTION_LABEL:
      footerData.requestAFeature.descriptionLabel,
    REQUEST_A_FEATURE_MODAL_CHECKBOX_1: footerData.requestAFeature.checkBox1,
    REQUEST_A_FEATURE_MODAL_CHECKBOX_2: footerData.requestAFeature.checkBox2,
    REQUEST_A_FEATURE_MODAL_SUBMIT_BUTTON_TEXT:
      footerData.requestAFeature.button,
    REQUEST_A_FEATURE_MODAL_SUBMIT_SUCCESS_TITLE:
      footerData.requestAFeature.success.title,
    REQUEST_A_FEATURE_MODAL_SUBMIT_SUCCESS_DESCRIPTION:
      footerData.requestAFeature.success.description,
    REQUEST_A_FEATURE_MODAL_SUBMIT_SUCCESS_BUTTON_TEXT:
      footerData.requestAFeature.success.button,

    // Commons & Statics [A-Z order]
    ASSETMANTLE_WALLET: "MantleWallet",
    ASSETMANTLE_EXPLORER: "MantleExplorer",
    AIRDROP: "Airdrop",
    AND: "and",
    BLOG: "Blog",
    CHECK_ELIGIBILITY: "Check Eligibility",
    CIATDEL: "Citadel",
    CLAIM: "Claim",
    COINGECKO: "CoinGecko",
    COINMARKETCAP: "CoinMarketCap",
    COMING_SOON: "Coming Soon",
    COMMUNITY: "Community",
    COMPLETED: "Completed",
    CONNECT: "Connect",
    CONNECTED: "Connected",
    CONNECTING: "Connecting...",
    COSMOSTATION: "Cosmostation",
    CREATE_A_STORE: "Create A Store",
    DAY: "day",
    DAYS: "days",
    DETAILS: "Details",
    DOCS: "Docs",
    EMAIL: "Email",
    EVERSTAKE: "Everstake",
    EXPLORER: "Explorer",
    EXTERNAL_TOOLS: "External",
    FAQ: "FAQs",
    KEPLR: "Keplr",
    LEARN: "Learn",
    LETS_GO: "Let's go",
    MANTLEDROP: "MantleDrop",
    MINTSCAN: "MintScan",
    NATIVE: "Built-in",
    NETWORK: "Network",
    NOTIFY_ME: "Notify Me",
    ONGOING: "Ongoing",
    OR: "or",
    POSTCAPITALIST: "Postcapitalist",
    RESOURCE: "Resource",
    SIGN_UP: "Sign up",
    TAKE_A_TOUR: "Take a tour",
    TELL_ME_MORE: "Tell me more",
    TOKEN: "Token",
    TOKENOMICS: "Tokenomics",
    TRACKING: "Tracking",
    VIEW: "View",
    WALLET: "Wallet",
    WHAT_IS_ASSETMANTLE: "What is AssetMantle",
    WHITEPAPER: "Whitepaper",
  },
};

export default English;
