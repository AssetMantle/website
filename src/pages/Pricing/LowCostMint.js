import { useTranslation } from "react-i18next";

export default function LowCostMint() {
  const { t } = useTranslation();

  return (
    <section className="section_lowCostMint">
      <div className="section_lowCostMint__element">
        <h2>{t("LOW_COST_MINT_TITLE")}</h2>
        <p>{t("LOW_COST_MINT_DESCRIPTION")}</p>
      </div>
      <div className="section_lowCostMint__element">
        <h1>{t("LOW_COST_MINT_TITLE_SEC")}</h1>
        <img src="/images/Pricing/price.png" alt="$ 0.001" />
        <p>{t("LOW_COST_MINT_DESCRIPTION_SEC")}</p>
      </div>
    </section>
  );
}
