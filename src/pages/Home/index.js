import React from "react";

import { HomeContainer } from "../../styles/pages/HomeStyle.js";

// Home components
import HeroSection from "./HeroSection";
import ServicesSection from "./ServicesSection";
import Overview from "./Overview";
import WhatIsAssetMantle from "./WhatIsAssetMantle";
import HowItWorks from "./HowItWorks";
import IAmSold from "./IAmSold";
import NeedConvencing from "./NeedConvencing";
import GettingStarted from "./GettingStarted";
import Difference from "./Difference";
import Stores from "./Stores.js";
import WhatIsNFT from "./WhatIsNFT.js";
import Pricing from "./Pricing.js";
import Testimonial from "./Testimonial.js";

export default function Home() {
  return (
    <HomeContainer>
      <HeroSection />
      <ServicesSection />
      <Overview />
      <WhatIsAssetMantle />
      <HowItWorks />
      <IAmSold />
      <NeedConvencing />
      <GettingStarted />
      <Difference />
      <Stores />
      <WhatIsNFT />
      <Pricing />
      <IAmSold />
      <Testimonial />
      <section className="section_source">
        <span id="Source"></span>
        <p>
          *Source:{" "}
          <a
            href="https://nonfungible.com/market/history"
            target="_blank"
            rel="noopener noreferrer"
          >
            NFT Market History
          </a>
        </p>
      </section>
    </HomeContainer>
  );
}
