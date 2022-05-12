import { WhatsAnNFTContainer } from "../../styles/pages/WhatsAnNFTStyle";
import DATA from "../../data/whatIsNFT.json";

import WhatIsAnNFT from "./WhatIsAnNFT";
import ValueProps from "./ValueProps";
import RealWorldAssets from "./RealWorldAssets";
import USDSpent from "./USDSpent";
import LetsAmplify from "../Home/LetsAmplify";
import HowItWorks from "./HowItWorks";
import LowCostMint from "../Pricing/LowCostMint";
import MintYourNFT from "./MintYourNFT";
import PreMintNFT from "./PreMintNFT";
import CommunityGuidelines from "./CommunityGuidelines";

export default function WhatsAnNFT() {
  return (
    <WhatsAnNFTContainer>
      {DATA.whatIsNFT.visibility ? <WhatIsAnNFT /> : undefined}
      {DATA.valueProps.visibility ? <ValueProps /> : undefined}
      {DATA.realWorldAssets.visibility ? <RealWorldAssets /> : undefined}
      {DATA.USDSpent.visibility ? <USDSpent /> : undefined}
      {DATA.letsAmplify.visibility === true ? <LetsAmplify /> : undefined}
      {DATA.howItWorks.visibility === true ? <HowItWorks /> : undefined}
      {DATA.lowCostMint.visibility === true ? <LowCostMint /> : undefined}
      {DATA.mintYourNFT.visibility === true ? <MintYourNFT /> : undefined}
      {DATA.preMintNFT.visibility === true ? <PreMintNFT /> : undefined}
      {DATA.communityGuidelines.visibility === true ? (
        <CommunityGuidelines />
      ) : undefined}
    </WhatsAnNFTContainer>
  );
}
