import React from "react";

import DATA from "../../data/homeData.json";

import { HomeContainer } from "../../styles/pages/HomeStyle.js";

// Home components
import HeroSection from "./HeroSection";
import ServicesSection from "./ServicesSection";
import Overview from "./Overview";
import WhatIsAssetMantle from "./WhatIsAssetMantle";
import HowItWorks from "./HowItWorks";
import Difference from "./Difference";
import Team from "./Team";
import Faq from "./Faq.js";
import RoadMap from "./Roadmap.js";

import Header from "../../layout/Header";
import Footer from "../../layout/Footer";

export default function Home() {
  return (
    <HomeContainer>
      <Header />
      {DATA.hero.visibility && <HeroSection />}
      {DATA.services.visibility && <ServicesSection />}
      {DATA.overview.visibility && <Overview />}
      {DATA.WhatIsAssetMantle.visibility && <WhatIsAssetMantle />}
      {DATA.howItWorks.visibility && <HowItWorks />}
      {DATA.amDif.visibility && <Difference />}
      {DATA.RoadMap.visibility && <RoadMap />}
      {DATA.team.visibility && <Team />}
      {DATA.faq.visibility && <Faq />}
      <Footer />
    </HomeContainer>
  );
}
