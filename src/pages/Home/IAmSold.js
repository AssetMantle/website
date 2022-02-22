import React from "react";
import { ButtonPrimary } from "../../components/Buttons";
import DATA from "../../data/homeData.json";

const IAmSold = () => {
  return (
    <section className="section_iAmSold">
      <div className="section_iAmSold__element">
        <h2>I’m sold, let’s do this!</h2>
        <p>Join the AssetMantle community today.</p>
      </div>
      <ButtonPrimary
        text="Sign Up"
        href={DATA.iAmSold.href && DATA.iAmSold.href}
        targetBlank={true}
      />
    </section>
  );
};

export default IAmSold;
