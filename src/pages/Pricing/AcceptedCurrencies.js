import React from "react";
import { useTranslation } from "react-i18next";

export default function AcceptedCurrencies() {
  const { t } = useTranslation();

  const LIST = [
    t("ACCEPTED_CURRENCIES_LIST_1"),
    t("ACCEPTED_CURRENCIES_LIST_2"),
    t("ACCEPTED_CURRENCIES_LIST_3"),
    t("ACCEPTED_CURRENCIES_LIST_4"),
    t("ACCEPTED_CURRENCIES_LIST_5"),
    t("ACCEPTED_CURRENCIES_LIST_6"),
  ];

  return (
    <section className="section_acceptedCurrencies">
      <h2>{t("ACCEPTED_CURRENCIES_TITLE")}</h2>
      <p>{t("ACCEPTED_CURRENCIES_DESCRIPTION")}</p>
      <ul>{React.Children.toArray(LIST.map((item) => <li>{item}</li>))}</ul>
    </section>
  );
}
