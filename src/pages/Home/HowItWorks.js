import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import DATA from "../../data/homeData.json";

import { BsFillCaretRightFill } from "react-icons/bs";

const HowItWorks = () => {
  const { t } = useTranslation();

  const [option, setOption] = useState(DATA.howItWorks.options[0].name);

  const OPTIONS = [
    {
      ind: DATA.howItWorks.options[0].name,
      name: t("HOW_IT_WORKS_OPTION_1"),
      description: t("HOW_IT_WORKS_OPTION_1_DESCRIPTION"),
      content: [
        {
          img: DATA.howItWorks.options[0].content[0].img,
          title: t("HOW_IT_WORKS_OPTION_1_1_TITLE"),
          details: t("HOW_IT_WORKS_OPTION_1_1_DESC"),
        },
        {
          img: DATA.howItWorks.options[0].content[1].img,
          title: t("HOW_IT_WORKS_OPTION_1_2_TITLE"),
          details: t("HOW_IT_WORKS_OPTION_1_2_DESC"),
        },
        {
          img: DATA.howItWorks.options[0].content[2].img,
          title: t("HOW_IT_WORKS_OPTION_1_3_TITLE"),
          details: t("HOW_IT_WORKS_OPTION_1_3_DESC"),
        },
        {
          img: DATA.howItWorks.options[0].content[3].img,
          title: t("HOW_IT_WORKS_OPTION_1_4_TITLE"),
          details: t("HOW_IT_WORKS_OPTION_1_4_DESC"),
        },
      ],
      button: t("TELL_ME_MORE"),
      href: "",
    },
    {
      ind: DATA.howItWorks.options[1].name,
      name: t("HOW_IT_WORKS_OPTION_2"),
      description: t("HOW_IT_WORKS_OPTION_2_DESCRIPTION"),
      content: [
        {
          img: DATA.howItWorks.options[1].content[0].img,
          title: t("HOW_IT_WORKS_OPTION_2_1_TITLE"),
          details: t("HOW_IT_WORKS_OPTION_2_1_DESC"),
        },
        {
          img: DATA.howItWorks.options[1].content[1].img,
          title: t("HOW_IT_WORKS_OPTION_2_2_TITLE"),
          details: t("HOW_IT_WORKS_OPTION_2_2_DESC"),
        },
        {
          img: DATA.howItWorks.options[1].content[2].img,
          title: t("HOW_IT_WORKS_OPTION_2_3_TITLE"),
          details: t("HOW_IT_WORKS_OPTION_2_3_DESC"),
        },
        {
          img: DATA.howItWorks.options[1].content[3].img,
          title: t("HOW_IT_WORKS_OPTION_2_4_TITLE"),
          details: t("HOW_IT_WORKS_OPTION_2_4_DESC"),
        },
      ],
      button: t("TELL_ME_MORE"),
      href: "",
    },
  ];

  return (
    <section className="section_howItWorks">
      <span className="section_howItWorks__link_span" id="how_it_works"></span>
      <h2 className="yellow-t">{t("HOW_IT_WORKS_TITLE")}</h2>
      <p>
        {OPTIONS.filter((e) => e.ind === option)[0].name}{" "}
        <span>
          <BsFillCaretRightFill />
        </span>{" "}
        {OPTIONS.filter((e) => e.ind === option)[0].description}
      </p>
      <div className="section_howItWorks__element one">
        <div className="section_howItWorks__element_options">
          <h3
            className={option === OPTIONS[0].ind ? "active" : undefined}
            onClick={() => setOption(OPTIONS[0].ind)}
            tabIndex="0"
            onKeyPress={(e) => e.key === "Enter" && setOption(OPTIONS[0].ind)}
            role="button"
          >
            {OPTIONS[0].name}
          </h3>
        </div>
        <div className="section_howItWorks__element_options">
          <h3
            className={option === OPTIONS[1].ind ? "active" : undefined}
            onClick={() => setOption(OPTIONS[1].ind)}
            tabIndex="0"
            onKeyPress={(e) => e.key === "Enter" && setOption(OPTIONS[1].ind)}
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
              OPTIONS.filter((e) => e.ind === option)[0].content.map((data) => (
                <div className="section_howItWorks__element_content">
                  <img
                    src={`/images/landing/section/${DATA.imgType}/${
                      data.img && data.img
                    }.${DATA.imgType}`}
                    alt={data.h3 && data.h3}
                    className={`section_howItWorks__element_content__img ${
                      data.img && data.img
                    }`}
                  />
                  <h3 className="section_howItWorks__element_content__title">
                    {data.title && data.title}
                  </h3>
                  {/* <p className="section_howItWorks__element_content__description">
                    {data.details && data.details}
                  </p> */}
                </div>
              ))
            )}
        </div>
      )}
    </section>
  );
};

export default HowItWorks;
