import React from 'react';
import DATA from "../../data/homeData.json";
import { ButtonPrimary } from "../../components/Buttons";
import { useTranslation } from "react-i18next";

export default function AirdropSection() {
  const { t } = useTranslation();

  return (
    <section className="section_airdrop">
      <div className="section_airdrop__element">
        <img
          src={`/images/landing/section/png/token.png`}
          alt="roadmap illustration"
        />
      </div>
      <div className="section_airdrop__element">
        <h2 className="yellow-t">{t("DROP_TITLE")}</h2>
        <p>{t("DROP_DESCRIPTION")}</p>
      </div>
      <div className="section_airdrop__element bu">
        <ButtonPrimary
          text={t("DROP_BUTTON_TEXT")}
          href={DATA.drop.button.href && DATA.drop.button.href}
          targetBlank={true}
        />
      </div>
    </section>
  )
}
