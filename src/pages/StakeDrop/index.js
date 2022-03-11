import React from "react";
import { StakeDropContainer } from "../../styles/pages/stakeDropStyle";
import { useTranslation } from "react-i18next";

import UList from "../../components/UList";
import UList2 from "../../components/UList2";
import Details from "../../components/Details";

export default function StakeDrop() {
  const { t } = useTranslation();

  const whatIsLIST = [
    t("STAKEDROP_WHAT_IS_STAKEDROP_LI_1"),
    t("STAKEDROP_WHAT_IS_STAKEDROP_LI_2"),
    t("STAKEDROP_WHAT_IS_STAKEDROP_LI_3"),
    t("STAKEDROP_WHAT_IS_STAKEDROP_LI_4"),
  ];

  const howItWorksLIST = [
    {
      title: t("STAKEDROP_HOW_IT_WORKS_LI_1_TITLE"),
      body: t("STAKEDROP_HOW_IT_WORKS_LI_1_DESCRIPTION"),
    },
    {
      title: t("STAKEDROP_HOW_IT_WORKS_LI_2_TITLE"),
      body: t("STAKEDROP_HOW_IT_WORKS_LI_2_DESCRIPTION"),
    },
    {
      title: t("STAKEDROP_HOW_IT_WORKS_LI_3_TITLE"),
      body: t("STAKEDROP_HOW_IT_WORKS_LI_3_DESCRIPTION"),
    },
    {
      title: t("STAKEDROP_HOW_IT_WORKS_LI_4_TITLE"),
      body: t("STAKEDROP_HOW_IT_WORKS_LI_4_DESCRIPTION"),
    },
  ];

  const FAQ = [
    {
      q: t("STAKEDROP_FAQ_QUESTION_1"),
      a: t("STAKEDROP_FAQ_ANSWER_1"),
    },
    {
      q: t("STAKEDROP_FAQ_QUESTION_2"),
      a: t("STAKEDROP_FAQ_ANSWER_2"),
    },
    {
      q: t("STAKEDROP_FAQ_QUESTION_3"),
      a: t("STAKEDROP_FAQ_ANSWER_3"),
    },
    {
      q: t("STAKEDROP_FAQ_QUESTION_4"),
      a: t("STAKEDROP_FAQ_ANSWER_4"),
    },
    {
      q: t("STAKEDROP_FAQ_QUESTION_5"),
      a: t("STAKEDROP_FAQ_ANSWER_5"),
    },
  ];

  return (
    <StakeDropContainer>
      <section className="section_intro">
        <div className="section_intro__element">
          <h1>{t("STAKEDROP_INTRO_TITLE")}</h1>
          <p className="section_intro__element_subtitle">
            {t("STAKEDROP_INTRO_SUB_TITLE")}
          </p>
          <p className="section_intro__element_description">
            {t("STAKEDROP_INTRO_DESCRIPTION")}
          </p>
          <div className="section_intro__element_buttons">
            <button className="section_intro__element_buttons_button">
              {t("STAKEDROP_INTRO_BUTTON_1")}
            </button>
            <button className="section_intro__element_buttons_button">
              {t("STAKEDROP_INTRO_BUTTON_2")}
            </button>
          </div>
        </div>
        <div className="section_intro__element">
          <img
            src="/images/stakedrop/spiral.png"
            alt="network chain illustration"
          />
        </div>
      </section>
      <section className="section_whatIs">
        <h1>{t("STAKEDROP_WHAT_IS_STAKEDROP_TITLE")}</h1>
        <p>{t("STAKEDROP_WHAT_IS_STAKEDROP_DESCRIPTION")}</p>
        <div className="section_whatIs__element">
          <img
            src="/images/stakedrop/double_coin.png"
            alt="double coin illustration"
          />
          <UList data={whatIsLIST}></UList>
        </div>
      </section>
      <section className="section_howItWorks">
        <h2>{t("STAKEDROP_HOW_IT_WORKS_TITLE")}</h2>
        <p>{t("STAKEDROP_HOW_IT_WORKS_DESCRIPTION")}</p>
        <UList2 data={howItWorksLIST}></UList2>
      </section>
      <section className="section_explanation">
        <h3>{t("STAKEDROP_EXPLANATION_TITLE")}</h3>
        <div className="section_explanation__video"></div>
      </section>
      <section className="section_availableStakeDrop">
        <h2>{t("STAKEDROP_AVAILABLE_STAKEDROP_TITLE")}</h2>
      </section>
      <section className="section_faq">
        <h2>{t("FAQ_TITLE")}</h2>
        <p>{t("FAQ_DESCRIPTION")}</p>
        {FAQ &&
          React.Children.toArray(
            FAQ.map((faq) => <Details title={faq.q} details={faq.a} />)
          )}
      </section>
    </StakeDropContainer>
  );
}
