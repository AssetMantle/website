import homeData from "../../data/homeData.json";
import pricingData from "../../data/pricingData.json";
import whatIsNFTData from "../../data/whatIsNFT.json";
import airDropData from "../../data/airdropData.json";

const English = {
  translations: {
    // home data
    //  hero section
    HERO_TITLE_LINE1: homeData.hero.h11,
    HERO_TITLE_LINE2: homeData.hero.h12,
    HERO_BODY: homeData.hero.pxl,

    // Services section
    SERVICES_1_TITLE: homeData.services.leftTitle,
    SERVICES_1_DESCRIPTION: homeData.services.leftDesc,
    SERVICES_1_BUTTONTEXT: homeData.services.leftBtnText,
    SERVICES_2_TITLE: homeData.services.rightTitle,
    SERVICES_2_DESCRIPTION: homeData.services.rightDesc,
    SERVICES_2_BUTTONTEXT: homeData.services.rightBtnText,

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

    // HowItWorks section
    HOW_IT_WORKS_TITLE: homeData.howItWorks.title,
    HOW_IT_WORKS_DESCRIPTION: homeData.howItWorks.description,
    HOW_IT_WORKS_OPTION_1: homeData.howItWorks.options[0].name,
    HOW_IT_WORKS_OPTION_1_1_TITLE: homeData.howItWorks.options[0].content[0].h3,
    HOW_IT_WORKS_OPTION_1_1_DESC: homeData.howItWorks.options[0].content[0].p_m,
    HOW_IT_WORKS_OPTION_1_2_TITLE: homeData.howItWorks.options[0].content[1].h3,
    HOW_IT_WORKS_OPTION_1_2_DESC: homeData.howItWorks.options[0].content[1].p_m,
    HOW_IT_WORKS_OPTION_1_3_TITLE: homeData.howItWorks.options[0].content[2].h3,
    HOW_IT_WORKS_OPTION_1_3_DESC: homeData.howItWorks.options[0].content[2].p_m,
    HOW_IT_WORKS_OPTION_1_4_TITLE: homeData.howItWorks.options[0].content[3].h3,
    HOW_IT_WORKS_OPTION_1_4_DESC: homeData.howItWorks.options[0].content[3].p_m,
    HOW_IT_WORKS_OPTION_2: homeData.howItWorks.options[1].name,
    HOW_IT_WORKS_OPTION_2_1_TITLE: homeData.howItWorks.options[1].content[0].h3,
    HOW_IT_WORKS_OPTION_2_1_DESC: homeData.howItWorks.options[1].content[0].p_m,
    HOW_IT_WORKS_OPTION_2_2_TITLE: homeData.howItWorks.options[1].content[1].h3,
    HOW_IT_WORKS_OPTION_2_2_DESC: homeData.howItWorks.options[1].content[1].p_m,
    HOW_IT_WORKS_OPTION_2_3_TITLE: homeData.howItWorks.options[1].content[2].h3,
    HOW_IT_WORKS_OPTION_2_3_DESC: homeData.howItWorks.options[1].content[2].p_m,

    //  I am sold section
    I_AM_SOLD_TITLE: homeData.iAmSold.title,
    I_AM_SOLD_DESCRIPTION: homeData.iAmSold.description,

    //  Need convencing section
    NEED_CONVENING_TITLE: homeData.convincing.title,
    NEED_CONVENING_DESCRIPTION: homeData.convincing.description,

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

    // Stores section
    STORES_TITLE: homeData.stores.title,
    STORES_DESCRIPTION: homeData.stores.description,
    STORES_STORE_1: homeData.stores.store1,
    STORES_STORE_2: homeData.stores.store2,
    STORES_STORE_3: homeData.stores.store3,

    // what’s an NFT? section
    WHAT_IS_NFT_TITLE: homeData.wNFT.title,
    WHAT_IS_NFT_DESCRIPTION: homeData.wNFT.description,
    WHAT_IS_NFT_SUB_TITLE: homeData.wNFT.subTitle,

    // Pricing section
    PRICING_TITLE: homeData.pricing.title,
    PRICING_DESCRIPTION: homeData.pricing.description,
    PRICING_CURRENCY_NAME_1: homeData.pricing.currencies_name_1,
    PRICING_CURRENCY_VALUE_1: homeData.pricing.currencies_value_1,
    PRICING_CURRENCY_NAME_2: homeData.pricing.currencies_name_2,
    PRICING_CURRENCY_VALUE_2: homeData.pricing.currencies_value_2,
    PRICING_CURRENCY_NAME_3: homeData.pricing.currencies_name_3,
    PRICING_CURRENCY_VALUE_3: homeData.pricing.currencies_value_3,
    PRICING_NAME: homeData.pricing.name,
    PRICING_VALUE: homeData.pricing.value,

    // Let's Amplify section
    LET_AMPLIFY_TITLE: homeData.LetsAmplify.title,
    LET_AMPLIFY_DESCRIPTION: homeData.LetsAmplify.description,

    //  Testimonials section
    TESTIMONIALS_TITLE: homeData.testimonials.title,
    TESTIMONIALS_DESCRIPTION: homeData.testimonials.description,

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
    FAQ_QUESTION_6: homeData.faq.qas[5].q,
    FAQ_ANSWER_6: homeData.faq.qas[5].a,

    // Source section
    SOURCE_TITLE: homeData.source.title,
    SOURCE_DESCRIPTION: homeData.source.text,

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

    // AirDrop page
    // hero section
    AIRDROP_HERO_TITLE: airDropData.hero.title,
    AIRDROP_HERO_DESCRIPTION: airDropData.hero.details,

    // wallets section
    AIRDROP_WALLETS_OPTION_1_TITLE: airDropData.wallets.option_1.title,
    AIRDROP_WALLETS_OPTION_2_TITLE: airDropData.wallets.option_2.title,
    AIRDROP_WALLETS_OPTION_2_PLACEHOLDER:
      airDropData.wallets.option_2.placeholder,

    // drops section
    AIRDROP_DROPS_DROP_1_TITLE: airDropData.drops[0].title,
    AIRDROP_DROPS_DROP_1_LABEL: airDropData.drops[0].label,
    AIRDROP_DROPS_DROP_1_DETAILS: airDropData.drops[0].details,
    AIRDROP_DROPS_DROP_1_KEY: airDropData.drops[0].key,
    AIRDROP_DROPS_DROP_1_VALUE: airDropData.drops[0].value,
    AIRDROP_DROPS_DROP_2_TITLE: airDropData.drops[1].title,
    AIRDROP_DROPS_DROP_2_LABEL: airDropData.drops[1].label,
    AIRDROP_DROPS_DROP_2_DETAILS: airDropData.drops[1].details,
    AIRDROP_DROPS_DROP_2_KEY: airDropData.drops[1].key,
    AIRDROP_DROPS_DROP_2_VALUE: airDropData.drops[1].value,
    AIRDROP_DROPS_DROP_3_TITLE: airDropData.drops[2].title,
    AIRDROP_DROPS_DROP_3_LABEL: airDropData.drops[2].label,
    AIRDROP_DROPS_DROP_3_DETAILS: airDropData.drops[2].details,
    AIRDROP_DROPS_DROP_3_KEY: airDropData.drops[2].key,
    AIRDROP_DROPS_DROP_3_VALUE: airDropData.drops[2].value,
    AIRDROP_DROPS_DROP_4_TITLE: airDropData.drops[3].title,
    AIRDROP_DROPS_DROP_4_LABEL: airDropData.drops[3].label,
    AIRDROP_DROPS_DROP_4_DETAILS: airDropData.drops[3].details,
    AIRDROP_DROPS_DROP_4_KEY: airDropData.drops[3].key,
    AIRDROP_DROPS_DROP_4_VALUE: airDropData.drops[3].value,

    // Commons

    AIRDROP: "Airdrop",

    TELL_ME_MORE: "Tell me more",
    SIGN_UP: "Sign up",
    TAKE_A_TOUR: "Take a tour",
    CREATE_A_STORE: "Create A Store",
    COMING_SOON: "Coming Soon",
    AND: "and",
    OR: "or",
    CONNECT: "Connect",
    CHECK_ELIGIBILITY: "Check Eligibility",
  },
};

export default English;
