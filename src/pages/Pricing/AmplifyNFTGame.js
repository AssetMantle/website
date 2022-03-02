import { useTranslation } from "react-i18next";
import { StoreBox } from "../../components/StoreBox";

export default function AmplifyNFTGame() {
  const { t } = useTranslation();

  return (
    <section className="section_amplifyNFTGame">
      <div className="section_amplifyNFTGame__element">
        <h1>{t("AMPLIFY_NFT_GAME_TITLE")}</h1>
        <p>{t("AMPLIFY_NFT_GAME_DESCRIPTION")}</p>
      </div>
      <div className="section_amplifyNFTGame__element">
        <StoreBox />
        <StoreBox />
        <StoreBox />
      </div>
    </section>
  );
}
