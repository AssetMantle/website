import { useTranslation } from "react-i18next";
import UList from "../../components/UList";

export default function RealWorldAssets() {
  const { t } = useTranslation();

  const LIST = [
    t("REAL_WORLDS_ASSETS_LIST_1"),
    t("REAL_WORLDS_ASSETS_LIST_2"),
    t("REAL_WORLDS_ASSETS_LIST_3"),
    t("REAL_WORLDS_ASSETS_LIST_4"),
    t("REAL_WORLDS_ASSETS_LIST_5"),
  ];
  return (
    <section className="section_realWorldAssets">
      <div className="section_realWorldAssets__element">
        <h2>{t("REAL_WORLDS_ASSETS_TITLE")}</h2>
        <p>{t("REAL_WORLDS_ASSETS_DESCRIPTION")}</p>
        <UList data={LIST} />
      </div>
      <div className="section_realWorldAssets__element">
        <img src="/images/WhatsNFT/nft2.png" alt="Real World Assets NFT" />
      </div>
    </section>
  );
}
