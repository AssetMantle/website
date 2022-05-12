import { useTranslation } from "react-i18next";

export default function LowestTransactionCosts() {
  const { t } = useTranslation();

  return (
    <section className="section_lowestTransactionCosts">
      <h2>{t("LOWEST_TRANSACTION_COSTS_TITLE")}</h2>
      <p>{t("LOWEST_TRANSACTION_COSTS_DESCRIPTION")}</p>
      <img src="/images/Pricing/chart.svg" alt="chart" />
      <div className="section_lowestTransactionCosts__element">
        <div className="section_lowestTransactionCosts__element_box">
          <span></span>AssetMantle
        </div>
        <div className="section_lowestTransactionCosts__element_box">
          <span></span>OpenSea
        </div>
        <div className="section_lowestTransactionCosts__element_box">
          <span></span>Axie
        </div>
        <div className="section_lowestTransactionCosts__element_box">
          <span></span>Others
        </div>
      </div>
    </section>
  );
}
