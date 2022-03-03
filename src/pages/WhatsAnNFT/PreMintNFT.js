import { useTranslation } from "react-i18next";
import CreateAStore from "../../components/CreateAStore";
import DATA from "../../data/whatIsNFT.json";

export default function PreMintNFT() {
  const { t } = useTranslation();

  return (
    <CreateAStore
      title={t("PRE_MINT_NFT_TITLE")}
      description={t("PRE_MINT_NFT_DESCRIPTION")}
      button="bt"
      buttonText={`${t("COMING_SOON")}!`}
      href={DATA.preMintNFT.href && DATA.preMintNFT.href}
    />
  );
}
