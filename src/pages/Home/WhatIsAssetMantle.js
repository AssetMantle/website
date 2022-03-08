import React from "react";
import UList from "../../components/UList";
import { useTranslation } from "react-i18next";

const WhatIsAssetMantle = () => {
  const { t } = useTranslation();

  const data = [
    t("WHAT_IS_ASSETMANTLE_LI_1"),
    t("WHAT_IS_ASSETMANTLE_LI_2"),
    t("WHAT_IS_ASSETMANTLE_LI_3"),
    t("WHAT_IS_ASSETMANTLE_LI_4"),
    t("WHAT_IS_ASSETMANTLE_LI_5"),
    t("WHAT_IS_ASSETMANTLE_LI_6"),
    t("WHAT_IS_ASSETMANTLE_LI_7"),
  ];

  return (
    <section className="section_WhatIsAssetMantle">
      <div className="section_WhatIsAssetMantle__element">
        <span
          className="section_WhatIsAssetMantle__link_span"
          id="what_is_assetMantle"
        ></span>
        <h2>What is AssetMantle?</h2>
        <p>
          AssetMantle is a one-of-a-kind platform to facilitate commerce for
          your NFTs.
        </p>
        <UList data={data} />
      </div>
      <div className="section_WhatIsAssetMantle__element">
        <img
          src="/images/landing/section/spiral_of_nft.png"
          alt="spiral illustration of all kind of NFT"
        />
      </div>
    </section>
  );
};

export default WhatIsAssetMantle;
