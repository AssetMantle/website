import React from "react";

import DATA from "../../data/homeData.json";

// import { ButtonSecondary } from "../../components/Buttons";
import UList from "../../components/UList";

import { useTranslation } from "react-i18next";

const GettingStarted = () => {
  const { t } = useTranslation();

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
      <h2 className="yellow-t">{t("GETTING_STARTED_TITLE")}</h2>
      <p>{t("GETTING_STARTED_DESCRIPTION")}</p>
      <div className="section_gettingStarted__element">
        <div className="section_gettingStarted__element_card">
          <div className="section_gettingStarted__element_card_title">
            <h2>{t("GETTING_STARTED_LIST_1_TITLE")}</h2>
            <img
              src={`/images/landing/section/${DATA.imgType}/paintingImg.${DATA.imgType}`}
              alt="painting illustration"
            />
          </div>
          <div className="section_gettingStarted__element_card_body">
            <UList data={List1} />
          </div>
        </div>
        <div className="section_gettingStarted__element_card">
          <div className="section_gettingStarted__element_card_title">
            <h2>{t("GETTING_STARTED_LIST_2_TITLE")}</h2>
            <img
              src={`/images/landing/section/${DATA.imgType}/collector.${DATA.imgType}`}
              alt="collector illustration"
            />
          </div>
          <div className="section_gettingStarted__element_card_body">
            <UList data={List2} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GettingStarted;
