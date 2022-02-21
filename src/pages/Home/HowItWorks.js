import React, { useState } from "react";
import DATA from "../../data/homeData.json";

const HowItWorks = () => {
  const [option, setOption] = useState(DATA.section5.options[0].name);
  return (
    <section className="section_5">
      <h2>{DATA.section5.h2}</h2>
      <p>{DATA.section5.p_l}</p>
      <div className="section_5__element one">
        {DATA.section5.options &&
          React.Children.toArray(
            DATA.section5.options.map((data) => (
              <div className="section_5__element_options">
                <h3
                  className={option === data.name ? "active" : ""}
                  onClick={() => setOption(data.name)}
                  tabIndex="0"
                  onKeyPress={(e) => e.key === "Enter" && setOption(data.name)}
                  role="button"
                >
                  {data.name}
                </h3>
              </div>
            ))
          )}
      </div>
      {option && (
        <div className="section_5__element two__storebuilder">
          {DATA.section5.options &&
            React.Children.toArray(
              DATA.section5.options
                .filter((e) => e.name === option)[0]
                .content.map((data) => (
                  <div className="section_5__element_content">
                    <img
                      src={`/images/${data.img}.png`}
                      alt={data.h3}
                      className="section_5__element_content__img"
                    />
                    <h3 className="section_5__element_content__title">
                      {data.h3}
                    </h3>
                    <p className="section_5__element_content__description">
                      {data.p_m}
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
