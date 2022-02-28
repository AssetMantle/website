import homeData from "../../data/homeData.json";
import pricingData from "../../data/pricingData.json";

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

    // Commons
    TELL_ME_MORE: "Tell me more",
    SIGN_UP: "Sign up",
    TAKE_A_TOUR: "Take a tour",
    CREATE_A_STORE: "Create A Store",
  },
};

export default English;
