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
      <div className="smoothScrollElement">
        {DATA.hero.visibility && <HeroSection />}
      </div>
      <div className="smoothScrollElement">
        {DATA.services.visibility && <ServicesSection />}
        {DATA.overview.visibility && <Overview />}
      </div>
      <div className="smoothScrollElement">
        {DATA.WhatIsAssetMantle.visibility && <WhatIsAssetMantle />}
        {DATA.drop.visibility && <AirdropSection />}
      </div>
      <div className="smoothScrollElement">
        {DATA.howItWorks.visibility && <HowItWorks />}
      </div>
      <div className="smoothScrollElement">
        {DATA.gettingStarted.visibility && <GettingStarted />}
      </div>
      <div className="smoothScrollElement">
        {DATA.amDif.visibility && <Difference />}
      </div>
      <div className="smoothScrollElement">
        {DATA.RoadMap.visibility && <RoadMap />}
        {DATA.whitepaper.visibility && <WhitePaper />}
      </div>
      <div className="smoothScrollElement">
        {DATA.team.visibility && <Team />}
      </div>
      <div className="smoothScrollElement">
        {DATA.faq.visibility && <Faq />}
      </div>
      <div className="smoothScrollElement">
        <Footer />
      </div>
    </HomeContainer>
  );
}
