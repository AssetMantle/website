import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function USDSpent() {
  const { t } = useTranslation();

  const [option, setOption] = useState("1-week");

  return (
    <section className="section_usdSpent">
      <h2>{t("USD_SPENT_ON_NFT_TITLE")}</h2>
      <p>{t("USD_SPENT_ON_NFT_DESCRIPTION")}</p>
      <div className="section_usdSpent__element">
        <h5
          className={option === "1-week" ? "active" : ""}
          onClick={() => setOption("1-week")}
        >
          {t("USD_SPENT_ON_NFT_LIST_1")}
        </h5>
        <h5
          className={option === "1-month" ? "active" : ""}
          onClick={() => setOption("1-month")}
        >
          {t("USD_SPENT_ON_NFT_LIST_2")}
        </h5>
        <h5
          className={option === "3-months" ? "active" : ""}
          onClick={() => setOption("3-months")}
        >
          {t("USD_SPENT_ON_NFT_LIST_3")}
        </h5>
        <h5
          className={option === "1-year" ? "active" : ""}
          onClick={() => setOption("1-year")}
        >
          {t("USD_SPENT_ON_NFT_LIST_4")}
        </h5>
        <h5
          className={option === "all-time" ? "active" : ""}
          onClick={() => setOption("all-time")}
        >
          {t("USD_SPENT_ON_NFT_LIST_5")}
        </h5>
      </div>
      {option === "1-week" ? (
        <img src="/images/Pricing/chart.svg" alt="Chart" />
      ) : option === "1-month" ? (
        <img src="/images/Pricing/chart.svg" alt="Chart" />
      ) : option === "3-months" ? (
        <img src="/images/Pricing/chart.svg" alt="Chart" />
      ) : option === "1-year" ? (
        <img src="/images/Pricing/chart.svg" alt="Chart" />
      ) : option === "all-time" ? (
        <img src="/images/Pricing/chart.svg" alt="Chart" />
      ) : undefined}
      <p className="sec">{t("USD_SPENT_ON_NFT_DESCRIPTION2")}</p>
    </section>
  );
}
