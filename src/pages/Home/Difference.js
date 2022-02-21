import React from "react";
import DATA from "../../data/homeData.json";

const Difference = () => {
  return (
    <section className="am_diff">
      <h2>{DATA.amDif.h2}</h2>
      <p>{DATA.amDif.p_l}</p>
      <div className="am_diff__element">
        {React.Children.toArray(
          DATA.amDif.contents.map((data) => (
            <div className="am_diff__element_content">
              <img src={`/images/${data.img}.png`} alt="" />
              <div className="am_diff__element_content__right">
                <h3>{data.h3}</h3>
                <p>{data.p_m}</p>
              </div>
            </div>
          ))
        )}
      </div>
      {/* <p className="am_diff__link">
          {DATA.amDif.p_l2} <a href={DATA.amDif.href}>{DATA.amDif.link}</a>
        </p> */}
    </section>
  );
};

export default Difference;
