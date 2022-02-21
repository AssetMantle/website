import React from "react";
import DATA from "../../data/homeData.json";
import UList from "../../styles/components/UList";

const WhatIsAssetMantle = () => {
  return (
    <section className="section_4">
      <div className="section_4__element">
        <h2>What is AssetMantle?</h2>
        <p>
          AssetMantle is a one-of-a-kind platform to facilitate commerce for
          your NFTs.
        </p>
        <UList data={DATA.section4.left.list} />
      </div>
      <div className="section_4__element">
        <img src="/images/landing/section/spiral_of_nft.png" alt="" />
      </div>
    </section>
  );
};

export default WhatIsAssetMantle;
