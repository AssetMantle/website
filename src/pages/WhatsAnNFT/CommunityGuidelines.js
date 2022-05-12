import { useTranslation } from "react-i18next";
import UList2 from "../../components/UList2";

export default function CommunityGuidelines() {
  const { t } = useTranslation();

  const LIST = [
    {
      title: t("COMMUNITY_GUIDELINES_LIST_1_NAME"),
      body: t("COMMUNITY_GUIDELINES_LIST_1_DESCRIPTION"),
    },
    {
      title: t("COMMUNITY_GUIDELINES_LIST_2_NAME"),
      body: t("COMMUNITY_GUIDELINES_LIST_2_DESCRIPTION"),
    },
    {
      title: t("COMMUNITY_GUIDELINES_LIST_3_NAME"),
      body: t("COMMUNITY_GUIDELINES_LIST_3_DESCRIPTION"),
    },
    {
      title: t("COMMUNITY_GUIDELINES_LIST_4_NAME"),
      body: t("COMMUNITY_GUIDELINES_LIST_4_DESCRIPTION"),
    },
    {
      title: t("COMMUNITY_GUIDELINES_LIST_5_NAME"),
      body: t("COMMUNITY_GUIDELINES_LIST_5_DESCRIPTION"),
    },
    {
      title: t("COMMUNITY_GUIDELINES_LIST_6_NAME"),
      body: t("COMMUNITY_GUIDELINES_LIST_6_DESCRIPTION"),
    },
  ];

  return (
    <section className="section_communityGuidelines">
      <h2>{t("COMMUNITY_GUIDELINES_TITLE")}</h2>
      <p>{t("COMMUNITY_GUIDELINES_DESCRIPTION")}</p>
      <UList2 data={LIST} />
    </section>
  );
}
