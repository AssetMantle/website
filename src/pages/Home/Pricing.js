import React from "react";

import DATA from "../../data/homeData.json";

import { ButtonSecondary } from "../../components/Buttons";
import { useTranslation } from "react-i18next";

const Pricing = () => {
  const { t } = useTranslation();

  return (
    <section className="section_pricing">
      <span className="section_pricing__link_span" id="pricing"></span>
      <h2>{t("PRICING_TITLE")}</h2>
      <p>{t("PRICING_DESCRIPTION")}</p>
      <div className="section_pricing__body">
        <div className="section_pricing__body_element__left">
          <div className="section_pricing__body_element__left_content">
            {t("PRICING_CURRENCY_NAME_1")}
          </div>
          <div className="section_pricing__body_element__left_content">
            {t("PRICING_CURRENCY_VALUE_1")}
          </div>
          <div className="section_pricing__body_element__left_content">
            {t("PRICING_CURRENCY_NAME_2")}
          </div>
          <div className="section_pricing__body_element__left_content">
            {t("PRICING_CURRENCY_VALUE_2")}
          </div>
          <div className="section_pricing__body_element__left_content">
            {t("PRICING_CURRENCY_NAME_3")}
          </div>
          <div className="section_pricing__body_element__left_content">
            {t("PRICING_CURRENCY_VALUE_3")}
          </div>
        </div>
        <div className="section_pricing__body_element__right">
          <h1>{t("PRICING_NAME")}</h1>
          <h1>{t("PRICING_VALUE")}</h1>
        </div>
      </div>
      <div className="section_pricing__button">
        <ButtonSecondary
          text={t("TELL_ME_MORE")}
          href={DATA.pricing.href && DATA.pricing.href}
        />
      </div>
    </section>
  );
};

export default Pricing;
