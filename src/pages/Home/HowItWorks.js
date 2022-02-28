import React, { useState } from "react";
import DATA from "../../data/homeData.json";
import { useTranslation } from "react-i18next";

const HowItWorks = () => {
  const { t } = useTranslation();

  const [option, setOption] = useState(DATA.howItWorks.options[0].name);

  const OPTIONS = [
    {
      name: t("HOW_IT_WORKS_OPTION_1"),
      content: [
        {
          img: "create_account",
          title: t("HOW_IT_WORKS_OPTION_1_1_TITLE"),
          details: t("HOW_IT_WORKS_OPTION_1_1_DESC"),
        },
        {
          img: "create_store",
          title: t("HOW_IT_WORKS_OPTION_1_2_TITLE"),
          details: t("HOW_IT_WORKS_OPTION_1_2_DESC"),
        },
        {
          img: "publish",
          title: t("HOW_IT_WORKS_OPTION_1_3_TITLE"),
          details: t("HOW_IT_WORKS_OPTION_1_3_DESC"),
        },
        {
          img: "sell",
          title: t("HOW_IT_WORKS_OPTION_1_4_TITLE"),
          details: t("HOW_IT_WORKS_OPTION_1_4_DESC"),
        },
      ],
      button: t("TELL_ME_MORE"),
      href: "",
    },
    {
      name: t("HOW_IT_WORKS_OPTION_2"),
      content: [
        {
          img: "create_account",
          title: t("HOW_IT_WORKS_OPTION_2_1_TITLE"),
          details: t("HOW_IT_WORKS_OPTION_2_1_DESC"),
        },
        {
          img: "sell",
          title: t("HOW_IT_WORKS_OPTION_2_2_TITLE"),
          details: t("HOW_IT_WORKS_OPTION_2_2_DESC"),
        },
        {
          img: "engage",
          title: t("HOW_IT_WORKS_OPTION_2_3_TITLE"),
          details: t("HOW_IT_WORKS_OPTION_2_3_DESC"),
        },
      ],
      button: t("TELL_ME_MORE"),
      href: "",
    },
  ];

  return (
    <section className="section_howItWorks">
      <span className="section_howItWorks__link_span" id="how_it_works"></span>
      <h2>{t("HOW_IT_WORKS_TITLE")}</h2>
      <p>{t("HOW_IT_WORKS_DESCRIPTION")}</p>
      <div className="section_howItWorks__element one">
        <div className="section_howItWorks__element_options">
          <h3
            className={option === "MantleBuilder" ? "active" : undefined}
            onClick={() => setOption("MantleBuilder")}
            tabIndex="0"
            onKeyPress={(e) => e.key === "Enter" && setOption("MantleBuilder")}
            role="button"
          >
            {OPTIONS[0].name}
          </h3>
        </div>
        <div className="section_howItWorks__element_options">
          <h3
            className={option === "MantlePlace" ? "active" : undefined}
            onClick={() => setOption("MantlePlace")}
            tabIndex="0"
            onKeyPress={(e) => e.key === "Enter" && setOption("MantlePlace")}
            role="button"
          >
            {OPTIONS[1].name}
          </h3>
        </div>
      </div>
      {option && (
        <div className="section_howItWorks__element two__storebuilder">
          {DATA.howItWorks.options &&
            React.Children.toArray(
              OPTIONS.filter((e) => e.name === option)[0].content.map(
                (data) => (
                  <div className="section_howItWorks__element_content">
                    <img
                      src={`/images/landing/section/${
                        data.img && data.img
                      }.png`}
                      alt={data.h3 && data.h3}
                      className={`section_howItWorks__element_content__img ${
                        data.img && data.img === "engage" ? "engage" : ""
                      }`}
                    />
                    <h3 className="section_howItWorks__element_content__title">
                      {data.title && data.title}
                    </h3>
                    <p className="section_howItWorks__element_content__description">
                      {data.details && data.details}
                    </p>
                  </div>
                )
              )
            )}
        </div>
      )}
    </section>
  );
};

export default HowItWorks;
