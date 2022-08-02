import * as React from "react";
import AdvantageSection from "../views/AdvantageSection";
import ChainSection from "../views/ChainSection";
import FeatureSection from "../views/FeatureSection";
import GallerySection from "../views/GallerySection";
import HeroSection from "../views/HeroSection";
import InfoSection from "../views/InfoSection";
import SocialProofSection from "../views/SocialProofSection";
import SubscribeSection from "../views/SubscribeSection";
import TeamSection from "../views/TeamSection";

export default function Index() {
  return (
    <>
      <HeroSection />
      <FeatureSection />
      <GallerySection />
      <InfoSection />
      <ChainSection />
      <AdvantageSection />
      <TeamSection />
      <SocialProofSection />
      <SubscribeSection />
    </>
  );
}
