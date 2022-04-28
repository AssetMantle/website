import React from "react";
import { useTranslation } from "react-i18next";
import UList from "../../components/UList";
import { ButtonSecondary } from "../../components/Buttons";
import homeData from "../../data/homeData.json";

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
    t("WHAT_IS_ASSETMANTLE_LI_8"),
  ];

  return (
    <section className="section_WhatIsAssetMantle">
      <div className="section_WhatIsAssetMantle__element">
        <span
          className="section_WhatIsAssetMantle__link_span"
          id="what_is_assetMantle"
        ></span>
        <h2 className="yellow-t">{t("WHAT_IS_ASSETMANTLE_TITLE")}</h2>
        <p>{t("WHAT_IS_ASSETMANTLE_DESCRIPTION")}</p>
        <UList data={data} />
        <div className="section_WhatIsAssetMantle__element_button">
          <ButtonSecondary
            text={
              homeData.WhatIsAssetMantle.button.title &&
              homeData.WhatIsAssetMantle.button.title
            }
            href={
              homeData.WhatIsAssetMantle.button.href &&
              homeData.WhatIsAssetMantle.button.href
            }
          />
        </div>
      </div>
      <div className="section_WhatIsAssetMantle__element">
        <img
          src={`/images/landing/section/${homeData.imgType}/spiral_of_nft.${homeData.imgType}`}
          alt="spiral illustration of all kind of NFT"
        />
      </div>
    </section>
  );
};

export default WhatIsAssetMantle;
