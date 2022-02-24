import React, { useState } from "react";
import DATA from "../../data/homeData.json";

const HowItWorks = () => {
  const [option, setOption] = useState(DATA.howItWorks.options[0].name);
  return (
    <section className="section_howItWorks">
      <span className="section_howItWorks__link_span" id="how_it_works"></span>
      <h2>How it works</h2>
      <p>
        Create your own store in a few steps using MantleBuilder or browse
        through the vast collection of NFTs in MantlePlace
      </p>
      <div className="section_howItWorks__element one">
        <div className="section_howItWorks__element_options">
          <h3
            className={option === "MantleBuilder" ? "active" : undefined}
            onClick={() => setOption("MantleBuilder")}
            tabIndex="0"
            onKeyPress={(e) => e.key === "Enter" && setOption("MantleBuilder")}
            role="button"
          >
            MantleBuilder
          </h3>
        </div>
        <div className="section_howItWorks__element_options">
          <h3
            className={option === "MantlePlace" ? "active" : undefined}
            onClick={() => setOption("MantlePlace")}
            tabIndex="0"
            onKeyPress={(e) => e.key === "Enter" && setOption("MantlePlace")}
            role="button"
          >
            MantlePlace
          </h3>
        </div>
      </div>
      {option && (
        <div className="section_howItWorks__element two__storebuilder">
          {DATA.howItWorks.options &&
            React.Children.toArray(
              DATA.howItWorks.options
                .filter((e) => e.name === option)[0]
                .content.map((data) => (
                  <div className="section_howItWorks__element_content">
                    <img
                      src={`/images/landing/section/${
                        data.img && data.img
                      }.png`}
                      alt={data.h3 && data.h3}
                      className={`section_howItWorks__element_content__img ${
                        data.img && data.img === "engage" ? "engage" : ""
                      }`}
                    />
                    <h3 className="section_howItWorks__element_content__title">
                      {data.h3 && data.h3}
                    </h3>
                    <p className="section_howItWorks__element_content__description">
                      {data.p_m && data.p_m}
                    </p>
                  </div>
                ))
            )}
        </div>
      )}
    </section>
  );
};

export default HowItWorks;
