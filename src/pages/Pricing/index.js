import { PricingContainer } from "../../styles/pages/PriceStyle";
import DATA from "../../data/pricingData.json";

import AmplifyNFTGame from "./AmplifyNFTGame";
import LowCostMint from "./LowCostMint";
import LowestTransactionCosts from "./LowestTransactionCosts";
import JumpRightIn from "./JumpRightIn";
import NeedConvencing from "../Home/NeedConvencing";
import GetPaid from "./GetPaid";
import LetsAmplify from "../Home/LetsAmplify";
import AcceptedCurrencies from "./AcceptedCurrencies";

export default function Pricing() {
  return (
    <PricingContainer>
      {DATA.amplifyNFTGame.visibility === true ? <AmplifyNFTGame /> : undefined}
      {DATA.lowCostMint.visibility === true ? <LowCostMint /> : undefined}
      {DATA.lowestTransactionCosts.visibility === true ? (
        <LowestTransactionCosts />
      ) : undefined}
      {DATA.jumpRightIn.visibility === true ? <JumpRightIn /> : undefined}
      {DATA.convincing.visibility === true ? <NeedConvencing /> : undefined}
      {DATA.getPaid.visibility === true ? <GetPaid /> : undefined}
      {DATA.letsAmplify.visibility === true ? <LetsAmplify /> : undefined}
      {DATA.acceptedCurrencies.visibility === true ? (
        <AcceptedCurrencies />
      ) : undefined}
    </PricingContainer>
  );
}
