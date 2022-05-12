import { useTranslation } from "react-i18next";
import UList from "../../components/UList";
import UList2 from "../../components/UList2";

export default function GetPaid() {
  const { t } = useTranslation();

  const LIST = [
    t("GET_PAID_LIST_1_OPTION_1"),
    t("GET_PAID_LIST_1_OPTION_2"),
    t("GET_PAID_LIST_1_OPTION_3"),
    t("GET_PAID_LIST_1_OPTION_4"),
    t("GET_PAID_LIST_1_OPTION_5"),
    t("GET_PAID_LIST_1_OPTION_6"),
  ];

  const LIST2 = [
    {
      title: t("GET_PAID_LIST_2_OPTION_1_TITLE"),
      body: t("GET_PAID_LIST_2_OPTION_1_DESCRIPTION"),
    },
    {
      title: t("GET_PAID_LIST_2_OPTION_2_TITLE"),
      body: t("GET_PAID_LIST_2_OPTION_2_DESCRIPTION"),
    },
    {
      title: t("GET_PAID_LIST_2_OPTION_3_TITLE"),
      body: t("GET_PAID_LIST_2_OPTION_3_DESCRIPTION"),
    },
    {
      title: t("GET_PAID_LIST_2_OPTION_4_TITLE"),
      body: t("GET_PAID_LIST_2_OPTION_4_DESCRIPTION"),
    },
  ];

  return (
    <section className="section_getPaid">
      <h2>{t("GET_PAID_TITLE")}</h2>
      <p>{t("GET_PAID_DESCRIPTION")}</p>
      <UList data={LIST} />
      <h3>{t("GET_PAID_TITLE_2")}</h3>
      <p>{t("GET_PAID_DESCRIPTION_2")}</p>
      <UList2 data={LIST2} />
    </section>
  );
}
