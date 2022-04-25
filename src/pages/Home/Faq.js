import React from "react";
import { useTranslation } from "react-i18next";
import Details from "../../components/Details";
import homeData from "../../data/homeData.json";

const Faq = () => {
  const { t } = useTranslation();

  const FAQ = [
    {
      id: homeData.faq.qas[0].id,
      q: t("FAQ_QUESTION_1"),
      a: t("FAQ_ANSWER_1"),
    },
    {
      id: homeData.faq.qas[1].id,
      q: t("FAQ_QUESTION_2"),
      a: t("FAQ_ANSWER_2"),
    },
    {
      id: homeData.faq.qas[2].id,
      q: t("FAQ_QUESTION_3"),
      a: t("FAQ_ANSWER_3"),
      link: homeData.faq.qas[2].link,
    },
    {
      id: homeData.faq.qas[3].id,
      q: t("FAQ_QUESTION_4"),
      a: t("FAQ_ANSWER_4"),
    },
    {
      id: homeData.faq.qas[4].id,
      q: t("FAQ_QUESTION_5"),
      a: t("FAQ_ANSWER_5"),
      list: [
        t("FAQ_ANSWER_5_LI_1"),
        t("FAQ_ANSWER_5_LI_2"),
        t("FAQ_ANSWER_5_LI_3"),
        t("FAQ_ANSWER_5_LI_4"),
        t("FAQ_ANSWER_5_LI_5"),
        t("FAQ_ANSWER_5_LI_6"),
        t("FAQ_ANSWER_5_LI_7"),
        t("FAQ_ANSWER_5_LI_8"),
        t("FAQ_ANSWER_5_LI_9"),
        t("FAQ_ANSWER_5_LI_10"),
        t("FAQ_ANSWER_5_LI_11"),
      ],
    },
  ];

  return (
    <section className="section_faq">
      <h2>{t("FAQ_TITLE")}</h2>
      {/* <p>{t("FAQ_DESCRIPTION")}</p> */}
      {FAQ &&
        React.Children.toArray(
          FAQ.map((faq) => (
            <Details
              id={faq.id}
              title={faq.q}
              details={faq.a}
              list={faq.list && faq.list}
              link={faq.link && faq.link}
            />
          ))
        )}
    </section>
  );
};

export default Faq;
