import { useTranslation } from "react-i18next";

export default function HowItWorks() {
  const { t } = useTranslation();

  return (
    <section className="section_howItWorks">
      <h2>{t("HOW_IT_WORKS_TITLE")}</h2>
      <p>{t("HOW_IT_WORKS_DESCRIPTION")}</p>
      <div className="section_howItWorks__element">
        <div className="section_howItWorks__element_option">
          <img
            src="/images/landing/section/create_account.png"
            alt="account illustration"
          />
          <h3>{t("HOW_IT_WORKS_OPTION_1_1_TITLE")}</h3>
          <p>{t("HOW_IT_WORKS_OPTION_1_1_DESC")}</p>
        </div>
        <div className="section_howItWorks__element_option">
          <img
            src="/images/landing/section/create_store.png"
            alt="store illustration"
          />
          <h3>{t("HOW_IT_WORKS_OPTION_1_2_TITLE")}</h3>
          <p>{t("HOW_IT_WORKS_OPTION_1_2_DESC")}</p>
        </div>
        <div className="section_howItWorks__element_option">
          <img
            src="/images/landing/section/publish.png"
            alt="publish illustration"
          />
          <h3>{t("HOW_IT_WORKS_OPTION_1_3_TITLE")}</h3>
          <p>{t("HOW_IT_WORKS_OPTION_1_3_DESC")}</p>
        </div>
        <div className="section_howItWorks__element_option">
          <img
            src="/images/landing/section/sell.png"
            alt="sell  illustration"
          />
          <h3>{t("HOW_IT_WORKS_OPTION_1_4_TITLE")}</h3>
          <p>{t("HOW_IT_WORKS_OPTION_1_4_DESC")}</p>
        </div>
      </div>
    </section>
  );
}
