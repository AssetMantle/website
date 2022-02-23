import React from "react";
import { useTranslation } from "react-i18next";
import "../../translations/i18n";

function HeroSection() {
  const { t } = useTranslation();

  return (
    <section className="section_hero">
      <div className="section_hero__left">
        <div className="section_hero__left_box2">
          <img src="/images/hero_NFT_image.png" alt="NFT" />
        </div>
        <>
          {/* <div className="section_hero__left_box">
            <img src="/images/hero_NFT_image.png" alt="preview" />
            <div className="section_hero__left_box__details2">
              <h3>Coming soon!</h3>
            </div>
            <div className="section_hero__left_box__details">
              <img
                src="/images/profile.png"
                alt="profile"
                className="section_hero__left_box__details_profile"
              />
              <div className="section_hero__left_box__details_data">
                <h4>{DATA.section1.left.name}</h4>
                <p>{DATA.section1.left.eth}</p>
              </div>
            </div>
          </div> */}
        </>
      </div>
      <div className="gap"></div>
      <div className="section_hero__right">
        <h1>
          {/* {t("ah")} */}
          Create, Own,
          <br />
          Discover, Collect.
        </h1>
        <p>
          Your one stop shop for NFTs. A community first platform for creators
          and collectors.
        </p>
      </div>
    </section>
  );
}

export default HeroSection;
