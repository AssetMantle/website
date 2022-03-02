import React, { useState } from "react";

import DATA from "../../data/homeData.json";

import { ButtonSecondary } from "../../components/Buttons";
import UList from "../../components/UList";

import { useTranslation } from "react-i18next";

const GettingStarted = () => {
  const { t } = useTranslation();

  const [option, setOption] = useState(0);

  const List1 = [
    t("GETTING_STARTED_LIST_1_LI_1"),
    t("GETTING_STARTED_LIST_1_LI_2"),
    t("GETTING_STARTED_LIST_1_LI_3"),
    t("GETTING_STARTED_LIST_1_LI_4"),
    t("GETTING_STARTED_LIST_1_LI_5"),
    t("GETTING_STARTED_LIST_1_LI_6"),
  ];

  const List2 = [
    t("GETTING_STARTED_LIST_2_LI_1"),
    t("GETTING_STARTED_LIST_2_LI_2"),
    t("GETTING_STARTED_LIST_2_LI_3"),
    t("GETTING_STARTED_LIST_2_LI_4"),
    t("GETTING_STARTED_LIST_2_LI_5"),
    t("GETTING_STARTED_LIST_2_LI_6"),
  ];

  return (
    <section className="section_gettingStarted">
      <span
        className="section_gettingStarted__link_span"
        id="getting_started"
      ></span>
      <h2>{t("GETTING_STARTED_TITLE")}</h2>
      <p>{t("GETTING_STARTED_DESCRIPTION")}</p>
      <div className="section_gettingStarted__element">
        <div className="section_gettingStarted__element_title">
          <div
            className="section_gettingStarted__element_title__option"
            onClick={() => setOption(0)}
          >
            <div className="section_gettingStarted__element_title__option_img">
              <img src={`/images/landing/section/paintingImg.png`} alt="" />
            </div>
            <h3 className={option === 0 ? "active" : undefined}>
              {t("GETTING_STARTED_LIST_1_TITLE")}
            </h3>
          </div>
          <div
            className="section_gettingStarted__element_title__option"
            onClick={() => setOption(1)}
          >
            <div className="section_gettingStarted__element_title__option_img">
              <img src={`/images/landing/section/collector.png`} alt="" />
            </div>
            <h3 className={option === 1 ? "active" : undefined}>
              {t("GETTING_STARTED_LIST_2_TITLE")}
            </h3>
          </div>
        </div>
        <div className="section_gettingStarted__element_body">
          <h2>{t("GETTING_STARTED_BODY_TITLE")}</h2>
          <p>{t("GETTING_STARTED_BODY_DESCRIPTION")}</p>
          {option === 0 ? (
            <UList data={List1} />
          ) : (
            option === 1 && <UList data={List2} />
          )}
        </div>
        <div className="section_gettingStarted__element_button">
          <ButtonSecondary
            text={t("TELL_ME_MORE")}
            href={DATA.gettingStarted.href && DATA.gettingStarted.href}
          />
        </div>
      </div>
    </section>
  );
};

export default GettingStarted;
