import React from "react";
import Details from "../../components/Details";
import { useTranslation } from "react-i18next";

const Faq = () => {
  const { t } = useTranslation();

  const FAQ = [
    {
      q: t("FAQ_QUESTION_1"),
      a: t("FAQ_ANSWER_1"),
    },
    {
      q: t("FAQ_QUESTION_2"),
      a: t("FAQ_ANSWER_2"),
    },
    {
      q: t("FAQ_QUESTION_3"),
      a: t("FAQ_ANSWER_3"),
    },
    {
      q: t("FAQ_QUESTION_4"),
      a: t("FAQ_ANSWER_4"),
    },
    {
      q: t("FAQ_QUESTION_5"),
      a: t("FAQ_ANSWER_5"),
    },
    {
      q: t("FAQ_QUESTION_6"),
      a: t("FAQ_ANSWER_6"),
    },
  ];

  return (
    <section className="section_faq">
      <h2>{t("FAQ_TITLE")}</h2>
      <p>{t("FAQ_DESCRIPTION")}</p>
      {FAQ &&
        React.Children.toArray(
          FAQ.map((faq) => <Details title={faq.q} details={faq.a} />)
        )}
    </section>
  );
};

export default Faq;
