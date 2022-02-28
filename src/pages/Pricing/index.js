import { PricingContainer } from "../../styles/pages/PriceStyle";
import DATA from "../../data/pricingData.json";

import AmplifyNFTGame from "./AmplifyNFTGame";
import LowCostMint from "./LowCostMint";
import LowestTransictionCosts from "./LowestTransictionCosts";

export default function Pricing() {
  return (
    <PricingContainer>
      {DATA.amplifyNFTGame.visibility === true ? <AmplifyNFTGame /> : undefined}
      {DATA.lowCostMint.visibility === true ? <LowCostMint /> : undefined}
      {DATA.lowestTransactionCosts.visibility === true ? (
        <LowestTransictionCosts />
      ) : undefined}
    </PricingContainer>
  );
}
