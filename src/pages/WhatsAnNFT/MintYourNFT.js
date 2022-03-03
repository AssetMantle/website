import { useTranslation } from "react-i18next";
import UList from "../../components/UList";

export default function MintYourNFT() {
  const { t } = useTranslation();

  const LIST = [
    t("MINT_YOUR_NFT_LIST_1"),
    t("MINT_YOUR_NFT_LIST_2"),
    t("MINT_YOUR_NFT_LIST_3"),
  ];

  return (
    <section className="section_mintYourNFT">
      <h2>{t("MINT_YOUR_NFT_TITLE")}</h2>
      <p>{t("MINT_YOUR_NFT_DESCRIPTION")}</p>
      <UList data={LIST} />
    </section>
  );
}
