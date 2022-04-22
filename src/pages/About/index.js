import React from "react";
import { AboutContainer } from "../../styles/pages/AboutContainer";
// import { BsFillCaretRightFill } from "react-icons/bs";
import TeamMemberCard from "../../components/TeamMemberCard";
import { teamMemberData } from "../../data/teamData";
import { useTranslation } from "react-i18next";
import aboutData from "../../data/aboutData.json";

export default function About() {
  const { t } = useTranslation();

  return (
    <AboutContainer>
      <section className="section_hero">
        <div className="section_hero__element">
          <h1 className="section_hero__element_title">
            {t("ABOUT_HERO_TITLE")}
          </h1>
          <p className="section_hero__element_details">
            {t("ABOUT_HERO_DESCRIPTION")}
          </p>
        </div>
        <div className="section_hero__element">
          <img src={aboutData.hero.image} alt={aboutData.hero.image_alt} />
        </div>
      </section>
      <section className="section_whyBetter">
        <h2>{t("ABOUT_VISION_TITLE")}</h2>
        <p>
          {t("ABOUT_VISION_DESCRIPTION")}
        </p>
        <div className="section_whyBetter__image">
          <img src={aboutData.vision.image} alt={aboutData.vision.image_alt} />
        </div>
        {/* <ul className="section_whyBetter__list">
          <li>
            <span className="li">
              <BsFillCaretRightFill />
            </span>
            <p>
              Sovereignity of store
              <span className="li__details">
                As a store owner, you will enjoy a high degree of controlling
                power over your products, terms, and finances.
              </span>
            </p>
          </li>
          <li>
            <span className="li">
              <BsFillCaretRightFill />
            </span>
            <p>
              Transferability of assets
              <span className="li__details">
                With AssetMantle, you can freely transfer your digital assets
                across chains and platforms without hassles.
              </span>
            </p>
          </li>
          <li>
            <span className="li">
              <BsFillCaretRightFill />
            </span>
            <p>
              Agnosticism of currency
              <span className="li__details">
                Asset Mantle supports a variety of web3 wallets including Keplr
                and hardware wallets like Ledger.
              </span>
            </p>
          </li>
          <li>
            <span className="li">
              <BsFillCaretRightFill />
            </span>
            <p>
              Customisability of metadata
              <span className="li__details">
                No more getting stuck with rigid parameters. You can customize
                your meta data as per your specific products and needs.
              </span>
            </p>
          </li>
        </ul> */}
      </section>
      <section className="section_team" id="team">
        <h2>{t("ABOUT_VISION_TITLE")}</h2>
        <p>
          {t("ABOUT_TEAM_DESCRIPTION")}
        </p>
        {/* <h3>Team</h3> */}
        <div className="section_team__container">
          {Array.isArray(teamMemberData) &&
            teamMemberData.length !== 0 &&
            teamMemberData.map((data) => (
              <TeamMemberCard
                imgSrc={
                  data.image !== null &&
                  data.image !== undefined &&
                  data.image !== ""
                    ? data.image
                    : "placeholder.png"
                }
                name={data.name}
                position={data.designation}
                social={data.social}
                key={data.name + data.designation}
              />
            ))}
        </div>
      </section>
    </AboutContainer>
  );
}
