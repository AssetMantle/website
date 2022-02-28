import React from "react";
import { ButtonPrimary } from "../../components/Buttons";
import DATA from "../../data/homeData.json";
import { useTranslation } from "react-i18next";

const IAmSold = () => {
  const { t } = useTranslation();

  return (
    <section className="section_iAmSold">
      <div className="section_iAmSold__element">
        <h2>{t("I_AM_SOLD_TITLE")}</h2>
        <p>{t("I_AM_SOLD_DESCRIPTION")}</p>
      </div>
      <div className="section_iAmSold__element bu">
        <ButtonPrimary
          text={t("SIGN_UP")}
          href={DATA.iAmSold.href && DATA.iAmSold.href}
          targetBlank={true}
        />
      </div>
    </section>
  );
};

export default IAmSold;
