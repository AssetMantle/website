import * as React from "react";
import Contributors from "../views/Contributors";
import HeroSection from "../views/HeroSection";
import Initiatives from "../views/Initiatives";
import WorkingGroup from "../views/WorkingGroup";

export default function Index() {
  return (
    <>
      <HeroSection />
      <WorkingGroup />
      <Contributors />
      <Initiatives />
    </>
  );
}
