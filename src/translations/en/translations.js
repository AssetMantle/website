import airDropData from "../../data/airdropData.json";
import stakeDropData from "../../data/stakeDropData.json";

const English = {
  translations: {
    // AirDrop page
    // hero section
    AIRDROP_HERO_TITLE: airDropData.hero.title,
    AIRDROP_HERO_DESCRIPTION: airDropData.hero.details,
    AIRDROP_HERO_READ_BLOG_TEXT: airDropData.hero.buttonDetails,
    AIRDROP_HERO_READ_BLOG_BUTTON_TEXT: airDropData.hero.buttonText,

    // start with stakedrop section
    AIRDROP_START_WITH_STAKEDROP_HEADING:
      airDropData.startWithStakedrop.heading,
    AIRDROP_START_WITH_STAKEDROP_TITLE: airDropData.startWithStakedrop.title,
    AIRDROP_START_WITH_STAKEDROP_DESCRIPTION:
      airDropData.startWithStakedrop.description,
    AIRDROP_START_WITH_STAKEDROP_KEY: airDropData.startWithStakedrop.key,
    AIRDROP_START_WITH_STAKEDROP_VALUE: airDropData.startWithStakedrop.value,

    // Required Eligibility section
    AIRDROP_REQUIRED_ELIGIBILITY_HEADING:
      airDropData.reqEligibilityCheck.heading,
    AIRDROP_REQUIRED_ELIGIBILITY_TITLE_1:
      airDropData.reqEligibilityCheck.checks[0].title,
    AIRDROP_REQUIRED_ELIGIBILITY_DESCRIPTION_1:
      airDropData.reqEligibilityCheck.checks[0].description,
    AIRDROP_REQUIRED_ELIGIBILITY_KEY_1:
      airDropData.reqEligibilityCheck.checks[0].key,
    AIRDROP_REQUIRED_ELIGIBILITY_VALUE_1:
      airDropData.reqEligibilityCheck.checks[0].value,
    AIRDROP_REQUIRED_ELIGIBILITY_TITLE_2:
      airDropData.reqEligibilityCheck.checks[1].title,
    AIRDROP_REQUIRED_ELIGIBILITY_DESCRIPTION_2:
      airDropData.reqEligibilityCheck.checks[1].description,
    AIRDROP_REQUIRED_ELIGIBILITY_KEY_2:
      airDropData.reqEligibilityCheck.checks[1].key,
    AIRDROP_REQUIRED_ELIGIBILITY_VALUE_2:
      airDropData.reqEligibilityCheck.checks[1].value,
    AIRDROP_ALLOCATION_SINGLE_TITLE:
      airDropData.reqEligibilityCheck.allocationTitle,

    // wallets section
    AIRDROP_WALLETS_OPTION_1_TITLE: airDropData.wallets.option_1.title,
    AIRDROP_WALLETS_OPTION_2_TITLE: airDropData.wallets.option_2.title,
    AIRDROP_WALLETS_OPTION_2_PLACEHOLDER:
      airDropData.wallets.option_2.placeholder,

    // Allocation section
    AIRDROP_ALLOCATION_TITLE: airDropData.allocation.title,
    AIRDROP_ALLOCATION_KEY: airDropData.allocation.key,
    AIRDROP_ALLOCATION_VALUE: airDropData.allocation.value,

    //  Allocation by network section
    AIRDROP_ALLOCATION_BY_NETWORK_TITLE: airDropData.allocationByNetwork.title,
    AIRDROP_ALLOCATION_BY_NETWORK_OPTION_1_KEY:
      airDropData.allocationByNetwork.options[0].key,
    AIRDROP_ALLOCATION_BY_NETWORK_OPTION_1_VALUE:
      airDropData.allocationByNetwork.options[0].value,
    AIRDROP_ALLOCATION_BY_NETWORK_OPTION_2_KEY:
      airDropData.allocationByNetwork.options[1].key,
    AIRDROP_ALLOCATION_BY_NETWORK_OPTION_2_VALUE:
      airDropData.allocationByNetwork.options[1].value,
    AIRDROP_ALLOCATION_BY_NETWORK_OPTION_3_KEY:
      airDropData.allocationByNetwork.options[2].key,
    AIRDROP_ALLOCATION_BY_NETWORK_OPTION_3_VALUE:
      airDropData.allocationByNetwork.options[2].value,

    // Airdrop NFTOwners section
    AIRDROP_NFT_OWNERS_HEADING: airDropData.NFTOwners.heading,
    AIRDROP_NFT_OWNERS_TITLE: airDropData.NFTOwners.title,
    AIRDROP_NFT_OWNERS_DESCRIPTION: airDropData.NFTOwners.description,
    AIRDROP_NFT_OWNERS_KEY: airDropData.NFTOwners.key,
    AIRDROP_NFT_OWNERS_VALUE: airDropData.NFTOwners.value,

    // Airdrop Modals
    // keplr
    AIRDROP_MODAL_KEPLR_TITLE: airDropData.modal.KeplrTitle,
    AIRDROP_MODAL_KEPLR_INSTRUCTION: airDropData.modal.KeplrInstruction,
    AIRDROP_MODAL_KEPLR_LABEL: airDropData.modal.KeplrLabel,
    AIRDROP_MODAL_KEPLR_BUTTON_TEXT: airDropData.modal.KeplrButton,
    // metamask
    AIRDROP_MODAL_METAMASK_TITLE: airDropData.modal.MetaMaskTitle,
    AIRDROP_MODAL_METAMASK_INSTRUCTION: airDropData.modal.MetaMaskInstruction,
    AIRDROP_MODAL_METAMASK_LABEL: airDropData.modal.MetaMaskLabel,
    AIRDROP_MODAL_METAMASK_BUTTON_TEXT: airDropData.modal.MetaMaskButton,

    // StakeDrop Page
    // Intro section
    STAKEDROP_INTRO_TITLE: stakeDropData.intro.title,
    STAKEDROP_INTRO_SUB_TITLE: stakeDropData.intro.sub_title,
    STAKEDROP_INTRO_DESCRIPTION: stakeDropData.intro.description,
    STAKEDROP_INTRO_BUTTON_1: stakeDropData.intro.buttons[0].text,
    STAKEDROP_INTRO_BUTTON_2: stakeDropData.intro.buttons[1].text,

    // what is stakedrop section
    STAKEDROP_WHAT_IS_STAKEDROP_TITLE: stakeDropData.whatIs.title,
    STAKEDROP_WHAT_IS_STAKEDROP_DESCRIPTION: stakeDropData.whatIs.description,
    STAKEDROP_WHAT_IS_STAKEDROP_LI_1: stakeDropData.whatIs.list[0],
    STAKEDROP_WHAT_IS_STAKEDROP_LI_2: stakeDropData.whatIs.list[1],
    STAKEDROP_WHAT_IS_STAKEDROP_LI_3: stakeDropData.whatIs.list[2],
    STAKEDROP_WHAT_IS_STAKEDROP_LI_4: stakeDropData.whatIs.list[3],

    // how it works section
    STAKEDROP_HOW_IT_WORKS_TITLE: stakeDropData.howItWorks.title,
    STAKEDROP_HOW_IT_WORKS_DESCRIPTION: stakeDropData.howItWorks.description,
    STAKEDROP_HOW_IT_WORKS_LI_1_TITLE: stakeDropData.howItWorks.steps[0].title,
    STAKEDROP_HOW_IT_WORKS_LI_1_DESCRIPTION:
      stakeDropData.howItWorks.steps[0].description,
    STAKEDROP_HOW_IT_WORKS_LI_2_TITLE: stakeDropData.howItWorks.steps[1].title,
    STAKEDROP_HOW_IT_WORKS_LI_2_DESCRIPTION:
      stakeDropData.howItWorks.steps[1].description,
    STAKEDROP_HOW_IT_WORKS_LI_3_TITLE: stakeDropData.howItWorks.steps[2].title,
    STAKEDROP_HOW_IT_WORKS_LI_3_DESCRIPTION:
      stakeDropData.howItWorks.steps[2].description,
    STAKEDROP_HOW_IT_WORKS_LI_4_TITLE: stakeDropData.howItWorks.steps[3].title,
    STAKEDROP_HOW_IT_WORKS_LI_4_DESCRIPTION:
      stakeDropData.howItWorks.steps[3].description,

    // explanation section
    STAKEDROP_EXPLANATION_TITLE: stakeDropData.explanation.title,

    // Available stakedrop section
    STAKEDROP_AVAILABLE_STAKEDROP_TITLE: stakeDropData.availableStakeDrop.title,
    STAKEDROP_AVAILABLE_STAKEDROP_DROP_1_NAME:
      stakeDropData.availableStakeDrop.drops[0].name,
    STAKEDROP_AVAILABLE_STAKEDROP_DROP_1_DATE:
      stakeDropData.availableStakeDrop.drops[0].date,
    STAKEDROP_AVAILABLE_STAKEDROP_DROP_1_START:
      stakeDropData.availableStakeDrop.drops[0].start,
    STAKEDROP_AVAILABLE_STAKEDROP_DROP_1_END:
      stakeDropData.availableStakeDrop.drops[0].end,
    STAKEDROP_AVAILABLE_STAKEDROP_DROP_2_NAME:
      stakeDropData.availableStakeDrop.drops[1].name,
    STAKEDROP_AVAILABLE_STAKEDROP_DROP_2_DATE:
      stakeDropData.availableStakeDrop.drops[1].date,
    STAKEDROP_AVAILABLE_STAKEDROP_DROP_2_START:
      stakeDropData.availableStakeDrop.drops[1].start,
    STAKEDROP_AVAILABLE_STAKEDROP_DROP_2_END:
      stakeDropData.availableStakeDrop.drops[1].end,
    STAKEDROP_AVAILABLE_STAKEDROP_DROP_3_NAME:
      stakeDropData.availableStakeDrop.drops[2].name,
    STAKEDROP_AVAILABLE_STAKEDROP_DROP_3_DATE:
      stakeDropData.availableStakeDrop.drops[2].date,
    STAKEDROP_AVAILABLE_STAKEDROP_DROP_3_START:
      stakeDropData.availableStakeDrop.drops[2].start,
    STAKEDROP_AVAILABLE_STAKEDROP_DROP_3_END:
      stakeDropData.availableStakeDrop.drops[2].end,
    STAKEDROP_AVAILABLE_STAKEDROP_DROP_4_NAME:
      stakeDropData.availableStakeDrop.drops[3].name,
    STAKEDROP_AVAILABLE_STAKEDROP_DROP_4_DATE:
      stakeDropData.availableStakeDrop.drops[3].date,
    STAKEDROP_AVAILABLE_STAKEDROP_DROP_4_START:
      stakeDropData.availableStakeDrop.drops[3].start,
    STAKEDROP_AVAILABLE_STAKEDROP_DROP_4_END:
      stakeDropData.availableStakeDrop.drops[3].end,
    STAKEDROP_AVAILABLE_STAKEDROP_DROP_5_NAME:
      stakeDropData.availableStakeDrop.drops[4].name,
    STAKEDROP_AVAILABLE_STAKEDROP_DROP_5_DATE:
      stakeDropData.availableStakeDrop.drops[4].date,
    STAKEDROP_AVAILABLE_STAKEDROP_DROP_5_START:
      stakeDropData.availableStakeDrop.drops[4].start,
    STAKEDROP_AVAILABLE_STAKEDROP_DROP_5_END:
      stakeDropData.availableStakeDrop.drops[4].end,
    STAKEDROP_AVAILABLE_STAKEDROP_DROP_6_NAME:
      stakeDropData.availableStakeDrop.drops[5].name,
    STAKEDROP_AVAILABLE_STAKEDROP_DROP_6_DATE:
      stakeDropData.availableStakeDrop.drops[5].date,
    STAKEDROP_AVAILABLE_STAKEDROP_DROP_6_START:
      stakeDropData.availableStakeDrop.drops[5].start,
    STAKEDROP_AVAILABLE_STAKEDROP_DROP_6_END:
      stakeDropData.availableStakeDrop.drops[5].end,
    STAKEDROP_AVAILABLE_STAKEDROP_DROP_COMPLETED_TEXT:
      stakeDropData.availableStakeDrop.completedText,

    // StakeDrop FAQ section
    STAKEDROP_FAQ_TITLE: stakeDropData.faq.title,
    STAKEDROP_FAQ_DESCRIPTION: stakeDropData.faq.description,
    STAKEDROP_FAQ_QUESTION_1: stakeDropData.faq.QAs[0].q,
    STAKEDROP_FAQ_ANSWER_1: stakeDropData.faq.QAs[0].a,
    STAKEDROP_FAQ_QUESTION_2: stakeDropData.faq.QAs[1].q,
    STAKEDROP_FAQ_ANSWER_2: stakeDropData.faq.QAs[1].a,
    STAKEDROP_FAQ_QUESTION_3: stakeDropData.faq.QAs[2].q,
    STAKEDROP_FAQ_ANSWER_3: stakeDropData.faq.QAs[2].a,
    STAKEDROP_FAQ_QUESTION_4: stakeDropData.faq.QAs[3].q,
    STAKEDROP_FAQ_ANSWER_4: stakeDropData.faq.QAs[3].a,
    STAKEDROP_FAQ_QUESTION_5: stakeDropData.faq.QAs[4].q,
    STAKEDROP_FAQ_ANSWER_5: stakeDropData.faq.QAs[4].a,
    STAKEDROP_FAQ_QUESTION_6: stakeDropData.faq.QAs[5].q,
    STAKEDROP_FAQ_ANSWER_6: stakeDropData.faq.QAs[5].a,
    STAKEDROP_FAQ_QUESTION_7: stakeDropData.faq.QAs[6].q,
    STAKEDROP_FAQ_ANSWER_7: stakeDropData.faq.QAs[6].a,
    STAKEDROP_FAQ_QUESTION_8: stakeDropData.faq.QAs[7].q,
    STAKEDROP_FAQ_ANSWER_8: stakeDropData.faq.QAs[7].a,
    STAKEDROP_FAQ_QUESTION_9: stakeDropData.faq.QAs[8].q,
    STAKEDROP_FAQ_ANSWER_9: stakeDropData.faq.QAs[8].a,

    // StakeDrop modal
    // Step 1 section
    STAKEDROP_MODAL_STEP_1_TITLE: stakeDropData.modal.step1.title,
    STAKEDROP_MODAL_STEP_1_OPTIONAL_TEXT: stakeDropData.modal.step1.optional,
    STAKEDROP_MODAL_STEP_1_BUTTON: stakeDropData.modal.step1.text,

    // Step 2 section
    STAKEDROP_MODAL_STEP_2_TITLE: stakeDropData.modal.step2.title,
    STAKEDROP_MODAL_STEP_2_FORM_LABEL: stakeDropData.modal.step2.label,
    STAKEDROP_MODAL_STEP_2_FORM_PLACEHOLDER:
      stakeDropData.modal.step2.placeholder,
    STAKEDROP_MODAL_STEP_2_FORM_BUTTON: stakeDropData.modal.step2.text,
    STAKEDROP_MODAL_STEP_2_Address_LABEL:
      stakeDropData.modal.step2.addressLabel,
    STAKEDROP_MODAL_STEP_2_Address_DATASET_1_TITLE:
      stakeDropData.modal.step2.dataset[0].title,
    STAKEDROP_MODAL_STEP_2_Address_DATASET_2_TITLE:
      stakeDropData.modal.step2.dataset[1].title,
    STAKEDROP_MODAL_STEP_2_Address_DATASET_3_TITLE:
      stakeDropData.modal.step2.dataset[2].title,

    //  Stakedrop modal campaign section
    STAKEDROP_MODAL_CAMPAIGN_TITLE: stakeDropData.modal.campaign.title,
    STAKEDROP_MODAL_CAMPAIGN_OPTION_1_TITLE:
      stakeDropData.modal.campaign.option1.title,
    STAKEDROP_MODAL_CAMPAIGN_OPTION_2_TITLE:
      stakeDropData.modal.campaign.option2.title,
    STAKEDROP_MODAL_CAMPAIGN_OPTION_3_TITLE:
      stakeDropData.modal.campaign.option3.title,
    STAKEDROP_MODAL_CAMPAIGN_OPTION_4_TITLE:
      stakeDropData.modal.campaign.option4.title,

    // Stakedrop modal campaignStat section
    STAKEDROP_MODAL_CAMPAIGNSTAT_TITLE: stakeDropData.modal.campaignStat.title,
    STAKEDROP_MODAL_CAMPAIGNSTAT_OPTION_1_TITLE:
      stakeDropData.modal.campaignStat.option1.title,
    STAKEDROP_MODAL_CAMPAIGNSTAT_OPTION_2_TITLE:
      stakeDropData.modal.campaignStat.option2.title,
    STAKEDROP_MODAL_CAMPAIGNSTAT_OPTION_3_TITLE:
      stakeDropData.modal.campaignStat.option3.title,
    STAKEDROP_MODAL_CAMPAIGNSTAT_OPTION_4_TITLE:
      stakeDropData.modal.campaignStat.option4.title,

    // Commons [A-Z order]

    AIRDROP: "Airdrop",
    AND: "and",
    CHECK_ELIGIBILITY: "Check Eligibility",
    CHECK_NOW: "Check Now",
    CLAIM: "Claim",
    COMING_SOON: "Coming Soon",
    COMPLETED: "Completed",
    CONNECT: "Connect",
    CONNECTED: "Connected",
    CONNECTING: "Connecting...",
    CREATE_A_STORE: "Create A Store",
    DAY: "day",
    DAYS: "days",
    DETAILS: "Details",
    LETS_GO: "Let's go",
    NOTIFY_ME: "Notify Me",
    ONGOING: "Ongoing",
    OR: "or",
    SIGN_UP: "Sign up",
    TAKE_A_TOUR: "Take a tour",
    TELL_ME_MORE: "Tell me more",
    VIEW: "View",
  },
};

export default English;
