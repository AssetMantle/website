import React, { useState } from "react";

import DATA from "../../data/homeData.json";

import { ButtonSecondary } from "../../components/Buttons";
import UList from "../../styles/components/UList";

const GettingStarted = () => {
  const [option, setOption] = useState(0);

  const List1 = [
    `No more delays. Our plug and play technology empowers you to mint and sell with enhanced speed.`,
    `No more limits. Create and buy any kind of NFT from our wide range. Plus its all seamlessly interoperable with any platform/chain.`,
    `No more generic looks. Enjoy complete customization with the drag and drop interface of our plug and play technology.`,
    `No more invisibility. Boost your personal brand with pubic listings, artist shoutouts, audience engagement, and journey sharing.`,
    `No more paying extra. Get near-zero gas fees, mint for free, and get financial autonomy by controlling payment types and royalties.`,
    `No more snags. When in doubt, just reach out to a vibrant community of experts, influncers, and like-minded enthusiasts.`,
  ];

  const List2 = [
    `Browse and indulge in a wide, exciting range of NFTs including audio, video and text`,
    `Get 100% proof of ownership of what you buy that sits on the secure blockchain`,
    `High degree of authenticity ensures your NFTs will be immune to removals or fraud`,
    `It’s so easy for you to transfer and trade NFTs with other enthusiasts`,
    `Access global markets and find the coolest NFTs with no agents or commissions`,
    `It’s super convenient because you get digital files that offer permanent storage and easy sharing and exchange`,
  ];

  return (
    <section className="section_gettingStarted">
      <h2>Getting started with AssetMantle</h2>
      <p>
        Our plug and play technology makes it super easy for you to build,
        launch, promote and buy NFTs. Just choose your preference and let’s
        amplify your NFT game.
      </p>
      <div className="section_gettingStarted__element">
        <div className="section_gettingStarted__element_title">
          <div
            className="section_gettingStarted__element_title__option"
            onClick={() => setOption(0)}
          >
            <div className="section_gettingStarted__element_title__option_img">
              <img src={`/images/landing/section/paintingImg.png`} alt="" />
            </div>
            <h3 className={option === 0 ? "active" : undefined}>Creator</h3>
          </div>
          <div
            className="section_gettingStarted__element_title__option"
            onClick={() => setOption(1)}
          >
            <div className="section_gettingStarted__element_title__option_img">
              <img src={`/images/landing/section/collector.png`} alt="" />
            </div>
            <h3 className={option === 1 ? "active" : undefined}>Collector</h3>
          </div>
        </div>
        <div className="section_gettingStarted__element_body">
          <h2>how does AssetMantle help you</h2>
          <p>We amplify your NFT game by plugging every gap!</p>
          {option === 0 ? (
            <UList data={List1} />
          ) : (
            option === 1 && <UList data={List2} />
          )}
        </div>
        <div className="section_gettingStarted__element_button">
          <ButtonSecondary
            text="Tell Me More"
            href={DATA.gettingStarted.href && DATA.gettingStarted.href}
          />
        </div>
      </div>
    </section>
  );
};

export default GettingStarted;
