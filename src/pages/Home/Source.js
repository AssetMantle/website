import React from "react";
import DATA from "../../data/homeData.json";
import { useTranslation } from "react-i18next";

const Source = () => {
  const { t } = useTranslation();

  return (
    <section className="section_source">
      <span id="Source"></span>
      <p>
        *{t("SOURCE_TITLE")}:{" "}
        <a
          href={DATA.source.href && DATA.source.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {t("SOURCE_DESCRIPTION")}
        </a>
      </p>
    </section>
  );
};

export default Source;
