import React from "react";
import { AboutContainer } from "../../styles/pages/AboutContainer";
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
      </section>
      <section className="section_team" id="team">
        <h2>{t("ABOUT_VISION_TITLE")}</h2>
        <p>
          {t("ABOUT_TEAM_DESCRIPTION")}
        </p>
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
