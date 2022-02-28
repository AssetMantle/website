import React from "react";
import { ButtonPrimary } from "../../components/Buttons";
import DATA from "../../data/homeData.json";
import { useTranslation } from "react-i18next";

const LetsAmplify = () => {
  const { t } = useTranslation();

  return (
    <section className="section_letsAmplify">
      <div className="section_letsAmplify__element">
        <h2>{t("LET_AMPLIFY_TITLE")}</h2>
        <p>{t("LET_AMPLIFY_DESCRIPTION")}</p>
      </div>
      <div className="section_letsAmplify__element bu">
        <ButtonPrimary
          text={t("CREATE_A_STORE")}
          href={DATA.LetsAmplify.href && DATA.LetsAmplify.href}
          targetBlank={true}
        />
      </div>
    </section>
  );
};

export default LetsAmplify;
