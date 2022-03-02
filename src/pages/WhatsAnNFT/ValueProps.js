import { useTranslation } from "react-i18next";
import UList2 from "../../components/UList2";

export default function ValueProps() {
  const { t } = useTranslation();

  const LIST = [
    {
      title: t("VALUE_PROPS_LIST_1_TITLE"),
      body: t("VALUE_PROPS_LIST_1_DESCRIPTION"),
    },
    {
      title: t("VALUE_PROPS_LIST_2_TITLE"),
      body: t("VALUE_PROPS_LIST_2_DESCRIPTION"),
    },
    {
      title: t("VALUE_PROPS_LIST_3_TITLE"),
      body: t("VALUE_PROPS_LIST_3_DESCRIPTION"),
    },
    {
      title: t("VALUE_PROPS_LIST_4_TITLE"),
      body: t("VALUE_PROPS_LIST_4_DESCRIPTION"),
    },
  ];

  return (
    <section className="section_valueProps">
      <h2>{t("VALUE_PROPS_TITLE")}</h2>
      <p className="des">{t("VALUE_PROPS_DESCRIPTION")}</p>
      <UList2 data={LIST} />
    </section>
  );
}
