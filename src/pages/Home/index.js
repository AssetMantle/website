import React from "react";

import DATA from "../../data/homeData.json";

import { HomeContainer } from "../../styles/pages/HomeStyle.js";

// Home components
import HeroSection from "./HeroSection";
import ServicesSection from "./ServicesSection";
import Overview from "./Overview";
import WhatIsAssetMantle from "./WhatIsAssetMantle";
import AirdropSection from "./AirdropSection";
import HowItWorks from "./HowItWorks";
import GettingStarted from "./GettingStarted";
import Difference from "./Difference";
import Team from "./Team";
import RoadMap from "./Roadmap.js";
import WhitePaper from "./WhitePaper";
import Faq from "./Faq.js";

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
      {DATA.drop.visibility && <AirdropSection />}
      {DATA.howItWorks.visibility && <HowItWorks />}
      {DATA.gettingStarted.visibility && <GettingStarted />}
      {DATA.amDif.visibility && <Difference />}
      {DATA.RoadMap.visibility && <RoadMap />}
      {DATA.whitepaper.visibility && <WhitePaper />}
      {DATA.team.visibility && <Team />}
      {DATA.faq.visibility && <Faq />}
      <section>
        <Footer />
      </section>
    </HomeContainer>
  );
}
