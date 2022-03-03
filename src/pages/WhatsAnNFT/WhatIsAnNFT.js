import { useTranslation } from "react-i18next";

export default function WhatIsAnNFT() {
  const { t } = useTranslation();

  return (
    <section className="section_whatIsNFT">
      <div className="section_whatIsNFT__element">
        <h1>{t("WHAT_IS_AN_NFT_PAGE_TITLE")}</h1>
        <p>{t("WHAT_IS_AN_NFT_PAGE_DESCRIPTION")}</p>
      </div>
      <div className="section_whatIsNFT__element">
        <img src="/images/WhatsNFT/nft1.png" alt="Hero NFT" />
      </div>
    </section>
  );
}
