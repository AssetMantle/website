import React from "react";
import DATA from "../../data/homeData.json";
import { ButtonSecondary } from "../../components/Buttons";
import { useTranslation } from "react-i18next";

const RoadMap = () => {
  const { t } = useTranslation();

  return (
    <section className="section_roadMap">
      <div className="section_roadMap__element">
        <span
          className="section_roadMap__element__link_span"
          id="how_does_assetMantle_help_you"
        ></span>
        <img
          src="/images/landing/section/roadmap.png"
          alt="roadmap illustration"
        />
      </div>
      <div className="section_roadMap__element">
        <h2>{t("ROADMAP_TITLE")}</h2>
        <p>{t("ROADMAP_DESCRIPTION")}</p>
      </div>
      <div className="section_roadMap__element bu">
        <ButtonSecondary
          text={t("ROADMAP_BUTTON_TEXT")}
          href={DATA.RoadMap.href && DATA.RoadMap.href}
        />
      </div>
    </section>
  );
};

export default RoadMap;
