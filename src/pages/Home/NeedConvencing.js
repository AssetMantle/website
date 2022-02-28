import React from "react";

import DATA from "../../data/homeData.json";

import { ButtonSecondary } from "../../components/Buttons";

import { useTranslation } from "react-i18next";

const NeedConvencing = () => {
  const { t } = useTranslation();

  return (
    <section className="section_convincing">
      <div className="section_convincing__element">
        <img
          src="/images/landing/section/messageIdea.png"
          alt="message button"
        />
      </div>
      <div className="section_convincing__element">
        <h2>{t("NEED_CONVENING_TITLE")}</h2>
        <p>{t("NEED_CONVENING_DESCRIPTION")}</p>
      </div>
      <div className="section_convincing__element">
        <ButtonSecondary
          text={t("TAKE_A_TOUR")}
          href={DATA.convincing.href && DATA.convincing.href}
        />
      </div>
    </section>
  );
};

export default NeedConvencing;
