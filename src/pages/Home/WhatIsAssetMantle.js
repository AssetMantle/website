import React from "react";
import UList from "../../styles/components/UList";

const WhatIsAssetMantle = () => {
  const data = [
    "Sign up, mint, and start selling in 5 minutes or less!",
    "Option to turn anything into an NFT (AssetMantle supports various formats and kinds).",
    "Royalty splits make creative collaborations easier.",
    "'Trade Room' for accessible communication between creators and collectors.",
    "Integrated analytics for improved marketing.",
    "Batch listing and minting.",
    "Auctions and secondary sales.",
  ];

  return (
    <section className="section_WhatIsAssetMantle">
      <div className="section_WhatIsAssetMantle__element">
        <h2>What is AssetMantle?</h2>
        <p>
          AssetMantle is a one-of-a-kind platform to facilitate commerce for
          your NFTs.
        </p>
        <UList data={data} />
      </div>
      <div className="section_WhatIsAssetMantle__element">
        <img src="/images/landing/section/spiral_of_nft.png" alt="" />
      </div>
    </section>
  );
};

export default WhatIsAssetMantle;
