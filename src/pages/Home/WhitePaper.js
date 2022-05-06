import React from 'react';
import { ButtonSecondary } from "../../components/Buttons";
import DATA from "../../data/homeData.json";
import { useTranslation } from "react-i18next";

export default function WhitePaper() {
  const { t } = useTranslation();

  return (
    <section className="section_whitepaper">
      <div className="section_whitepaper__element">
        <h2 className="yellow-t">{t("WHITEPAPER_TITLE")}</h2>
        <p>{t("WHITEPAPER_DESCRIPTION")}</p>
      </div>
      <div className="section_whitepaper__element bu">
        <ButtonSecondary
          text={t("WHITEPAPER_BUTTON_TEXT")}
          href={DATA.whitepaper.button.href && DATA.whitepaper.button.href}
          targetBlank={true}
        />
      </div>
    </section>
  )
}
