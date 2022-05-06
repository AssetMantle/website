import React, {useState} from "react";
import { AboutContainer } from "../../styles/pages/AboutContainer";
import TeamMemberCard from "../../components/TeamMemberCard";
import { teamMemberData } from "../../data/teamData";
import { useTranslation } from "react-i18next";
import aboutData from "../../data/aboutData.json";

import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import WhitePaper from "../Home/WhitePaper";

export default function About() {
  const { t } = useTranslation();

  const [phase, setPhase] = useState(0);

  return (
    <AboutContainer>
      <Header />
      <div className="smoothScrollElement">
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
      </div>
      <div className="smoothScrollElement">
        <section className="section_visionMission">
          <div className="section_visionMission__element">
            <h1>{t("ABOUT_VISION_TITLE")}</h1>
            <p>{t("ABOUT_VISION_DESCRIPTION")}</p>
          </div>
          <div className="section_visionMission__element">
            <h1>{t("ABOUT_MISSION_TITLE")}</h1>
            <p>{t("ABOUT_MISSION_DESCRIPTION")}</p>
          </div>
        </section>
        <WhitePaper />
      </div>
      <div className="smoothScrollElement">
        <section className="section_roadmap" id="roadmap">
          <h1>{t("ABOUT_ROADMAP_TITLE")}</h1>
          <div className="section_roadmap__slide">
            <div className="section_roadmap__slide_element">
              <button onClick={()=>phase !== 0 ? setPhase(phase - 1): setPhase(5)} className="section_roadmap__slide_element_left_button">
                <img src="/images/about/left_arrow.svg" alt="arrow" />
              </button>
              <div className="section_roadmap__slide_element__phase">

              <img
                className="section_roadmap__slide_element__phase_image"
                src={`/images/about/phase0${phase}.svg`}
                alt="phase00"
              />
              </div>
              <button onClick={()=>phase !== 5 ? setPhase(phase + 1): setPhase(0)} className="section_roadmap__slide_element_right_button">
                <img src="/images/about/right_arrow.svg" alt="arrow" />
              </button>
            </div>
          </div>
          <div className="section_roadmap__note">{t("ABOUT_ROADMAP_NOTE")}</div>
        </section>
      </div>
      <div className="smoothScrollElement">
        <section className="section_team" id="team">
          <h2>{t("ABOUT_TEAM_TITLE")}</h2>
          <p>{t("ABOUT_TEAM_DESCRIPTION")}</p>
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
      </div>
      <div className="smoothScrollElement">
        <Footer />
      </div>
    </AboutContainer>
  );
}
