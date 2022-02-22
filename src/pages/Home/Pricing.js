import React from "react";

import DATA from "../../data/homeData.json";

import { ButtonSecondary } from "../../components/Buttons";

const Pricing = () => {
  return (
    <section className="section_pricing">
      <h2>Pricing</h2>
      <p>We bring you the most affordable, flexible pricing options.</p>
      <div className="section_pricing__body">
        <div className="section_pricing__body_element__left">
          <div className="section_pricing__body_element__left_content">
            Ethereum
          </div>
          <div className="section_pricing__body_element__left_content">
            $250 USD
          </div>
          <div className="section_pricing__body_element__left_content">
            Solana
          </div>
          <div className="section_pricing__body_element__left_content">
            $2.5 USD
          </div>
          <div className="section_pricing__body_element__left_content">
            Polygon
          </div>
          <div className="section_pricing__body_element__left_content">
            $5 USD
          </div>
        </div>
        <div className="section_pricing__body_element__right">
          <h1>AssetMantle</h1>
          <h1>$0.000001* USD</h1>
        </div>
      </div>
      <div className="section_pricing__button">
        <ButtonSecondary
          text="Tell me more"
          href={DATA.pricing.href && DATA.pricing.href}
        />
      </div>
    </section>
  );
};

export default Pricing;
