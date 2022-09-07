import React from "react";
import ExplanationSection from "../views/AboutUsExplanationSection";
import FAQSection from "../views/FAQSection";
import TokenInfo from "../views/TokenInfo";
import VisionMissionSection from "../views/VisionMissionSection";

export default function About() {
  return (
    <>
      <ExplanationSection />
      <VisionMissionSection />
      <TokenInfo />
      <FAQSection />
    </>
  );
}
