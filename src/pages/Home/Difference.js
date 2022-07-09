import React from "react";
import DATA from "../../data/homeData.json";
import { useTranslation } from "react-i18next";

const Difference = () => {
  const { t } = useTranslation();

  const CONTENTS = [
    {
      img: "multi_chain",
      title: t("ASSETMANTLE_DIFFERENCE_LIST_1_TITLE"),
      description: t("ASSETMANTLE_DIFFERENCE_LIST_1_DESC"),
    },
    {
      img: "negligible_minting_fee",
      title: t("ASSETMANTLE_DIFFERENCE_LIST_2_TITLE"),
      description: t("ASSETMANTLE_DIFFERENCE_LIST_2_DESC"),
    },
    {
      img: "multiple_payment_modes",
      title: t("ASSETMANTLE_DIFFERENCE_LIST_3_TITLE"),
      description: t("ASSETMANTLE_DIFFERENCE_LIST_3_DESC"),
    },
    {
      img: "complete_customization",
      title: t("ASSETMANTLE_DIFFERENCE_LIST_4_TITLE"),
      description: t("ASSETMANTLE_DIFFERENCE_LIST_4_DESC"),
    },
  ];

  return (
    <section className="section__am_diff">
      <span
        className="section__am_diff__link_span"
        id="the_assetMantle_difference"
      ></span>
      <h2 className="yellow-t">{t("ASSETMANTLE_DIFFERENCE_TITLE")}</h2>
      <p>{t("ASSETMANTLE_DIFFERENCE_DESCRIPTION")}</p>
      <div className="section__am_diff__element">
        {DATA.amDif.contents &&
          React.Children.toArray(
            CONTENTS.map((data) => (
              <div className="section__am_diff__element_content">
                <img
                  src={`/images/landing/section/${DATA.imgType}/${
                    data.img && data.img
                  }.${DATA.imgType}`}
                  alt={data.img && data.img}
                />
                <div className="section__am_diff__element_content__right">
                  <h3>{data.title && data.title}</h3>
                  <p>{data.description && data.description}</p>
                </div>
              </div>
            ))
          )}
      </div>
    </section>
  );
};

export default Difference;
