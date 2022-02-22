import React from "react";
import { ButtonTertiary } from "../../components/Buttons";
import DATA from "../../data/homeData.json";

const ServicesSection = () => {
  return (
    <section className="section_services">
      <div className="section_services__element">
        <img src="/images/landing/section/bricks.png" alt="" />
        <div className="section_services__element_details">
          <h2>Build a Store</h2>
          <p>Fully customizable store builder</p>
          <ButtonTertiary
            href={DATA.services.leftHref && DATA.services.leftHref}
            text="MantleBuilder"
            leftArrow
            comingSoon={true}
          />
        </div>
      </div>
      <div className="section_services__element">
        <img src="/images/landing/section/bags.png" alt="" />
        <div className="section_services__element_details">
          <h2>Start Shopping</h2>
          <p>Build your collection of NFTs</p>
          <ButtonTertiary
            href={DATA.services.rightHref && DATA.services.rightHref}
            text="MantlePlace"
            leftArrow
            comingSoon={true}
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
