import React from "react";

const Overview = () => {
  return (
    <section className="section_overview">
      <h2>
        Become a part of the booming NFT community<a href="#Source">*</a>
      </h2>
      <div className="section_overview_element_con">
        <div className="section_overview__element">
          <img src={`/images/landing/section/sold.png`} alt="world icon" />
          <h2>
            22 billion+
            <br /> Sales in USD
          </h2>
        </div>
        <div className="section_overview__element">
          <img src={`/images/landing/section/cart.png`} alt="world icon" />
          <h2>
            35.6 million+
            <br /> Total Sales
          </h2>
        </div>
        <div className="section_overview__element">
          <img src={`/images/landing/section/wallet.png`} alt="world icon" />
          <h2>
            3 million+
            <br /> Active Wallets
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Overview;
