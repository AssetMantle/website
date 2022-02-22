import React from "react";
import DATA from "../../data/homeData.json";

const Difference = () => {
  return (
    <section className="section__am_diff">
      <h2>The AssetMantle Difference</h2>
      <p>
        AssetMantle brings you never-before features that enhance the experience
        of buying and selling NFTs
      </p>
      <div className="section__am_diff__element">
        {DATA.amDif.contents &&
          React.Children.toArray(
            DATA.amDif.contents.map((data) => (
              <div className="section__am_diff__element_content">
                <img
                  src={`/images/landing/section/${data.img && data.img}.png`}
                  alt={data.img && data.img}
                />
                <div className="section__am_diff__element_content__right">
                  <h3>{data.h3 && data.h3}</h3>
                  <p>{data.p_m && data.p_m}</p>
                </div>
              </div>
            ))
          )}
      </div>
      {/* <p className="section__am_diff__link">
          {DATA.amDif.p_l2} <a href={DATA.amDif.href}>{DATA.amDif.link}</a>
        </p> */}
    </section>
  );
};

export default Difference;
