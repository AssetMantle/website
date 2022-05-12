import React from "react";
import { useTranslation } from "react-i18next";

import homeData from "../../data/homeData.json"

const Overview = () => {
  const { t } = useTranslation();

  return (
    <section className="section_overview">
      <h2>
        {t("OVERVIEW_TITLE")}
        {/* <a href="#Source">*</a> */}
      </h2>
      <div className="section_overview_element_con">
        <div className="section_overview__element">
          <img src={`/images/landing/section/${homeData.imgType}/sold.${homeData.imgType}`} alt="world icon" />
          <h2>
            {t("OVERVIEW_1_TITLE")}
            <br />
            {t("OVERVIEW_1_TITLE_2")}
          </h2>
        </div>
        <div className="section_overview__element">
          <img src={`/images/landing/section/${homeData.imgType}/cart.${homeData.imgType}`} alt="world icon" />
          <h2>
            {t("OVERVIEW_2_TITLE")}
            <br />
            {t("OVERVIEW_2_TITLE_2")}
          </h2>
        </div>
        <div className="section_overview__element">
          <img src={`/images/landing/section/${homeData.imgType}/wallet.${homeData.imgType}`} alt="world icon" />
          <h2>
            {t("OVERVIEW_3_TITLE")}
            <br />
            {t("OVERVIEW_3_TITLE_2")}
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Overview;
