import React from "react";
import { ButtonPrimary } from "../../components/Buttons";
import DATA from "../../data/homeData.json";

const LetsAmplify = () => {
  return (
    <section className="section_letsAmplify">
      <div className="section_letsAmplify__element">
        <h2>Ok, let’s amplify my NFT game, people!</h2>
        <p>
          Yay. You’ve just taken the first step to enhancing your life in the
          metaverse. Let’s get started and help you create, sell, and buy your
          digital assets.
        </p>
      </div>
      <ButtonPrimary
        text="Create a Store"
        href={DATA.LetsAmplify.href && DATA.LetsAmplify.href}
        targetBlank={true}
      />
    </section>
  );
};

export default LetsAmplify;
