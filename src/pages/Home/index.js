import React from "react";

import DATA from "../../data/homeData.json";

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
import LetsAmplify from "./LetsAmplify.js";
import Testimonial from "./Testimonial.js";
import Faq from "./Faq.js";
import RoadMap from "./Roadmap.js";
import Source from "./Source.js";

export default function Home() {
  return (
    <HomeContainer>
      {DATA.hero.visibility && <HeroSection />}
      {DATA.services.visibility && <ServicesSection />}
      {DATA.overview.visibility && <Overview />}
      {DATA.WhatIsAssetMantle.visibility && <WhatIsAssetMantle />}
      {DATA.howItWorks.visibility && <HowItWorks />}
      {DATA.iAmSold.visibility && <IAmSold />}
      {DATA.convincing.visibility && <NeedConvencing />}
      {DATA.gettingStarted.visibility && <GettingStarted />}
      {DATA.amDif.visibility && <Difference />}
      {DATA.RoadMap.visibility && <RoadMap />}
      {DATA.stores.visibility && <Stores />}
      {DATA.wNFT.visibility && <WhatIsNFT />}
      {DATA.pricing.visibility && <Pricing />}
      {DATA.LetsAmplify.visibility && <LetsAmplify />}
      {DATA.testimonials.visibility && <Testimonial />}
      {DATA.faq.visibility && <Faq />}
      {DATA.source.visibility && <Source />}
    </HomeContainer>
  );
}
