import React from "react";
import { ButtonTertiary } from "../../components/Buttons";
import DATA from "../../data/homeData.json";
import { useTranslation } from "react-i18next";

const ServicesSection = () => {
  const { t } = useTranslation();

  return (
    <section className="section_services">
      <div className="section_services__element">
        <img src="/images/landing/section/bricks.png" alt="" />
        <div className="section_services__element_details">
          <h2>{t("SERVICES_1_TITLE")}</h2>
          <p>{t("SERVICES_1_DESCRIPTION")}</p>
          <ButtonTertiary
            href={DATA.services.leftHref && DATA.services.leftHref}
            text={t("SERVICES_1_BUTTONTEXT")}
            leftArrow
            comingSoon={true}
          />
        </div>
      </div>
      <div className="section_services__element">
        <img src="/images/landing/section/bags.png" alt="" />
        <div className="section_services__element_details">
          <h2>{t("SERVICES_2_TITLE")}</h2>
          <p>{t("SERVICES_2_DESCRIPTION")}</p>
          <ButtonTertiary
            href={DATA.services.rightHref && DATA.services.rightHref}
            text={t("SERVICES_2_BUTTONTEXT")}
            leftArrow
            comingSoon={true}
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
