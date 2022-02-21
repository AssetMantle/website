import React, { useState } from "react";
import { ButtonSecondary } from "../../components/Buttons";
import DATA from "../../data/homeData.json";
import UList from "../../styles/components/UList";

const GettingStarted = () => {
  const [option, setOption] = useState(0);

  return (
    <section className="section_8">
      <h2>{DATA.section8.h2}</h2>
      <p>{DATA.section8.p_m}</p>
      <div className="section_8__element">
        <div className="section_8__element_title">
          <div
            className="section_8__element_title__option"
            onClick={() => setOption(0)}
          >
            <div className="section_8__element_title__option_img">
              <img src={`/images/${DATA.section8.options[0].img}.png`} alt="" />
            </div>
            <h3 className={option === 0 ? "active" : undefined}>
              {DATA.section8.options[0].name}
            </h3>
          </div>
          <div
            className="section_8__element_title__option"
            onClick={() => setOption(1)}
          >
            <div className="section_8__element_title__option_img">
              <img src={`/images/${DATA.section8.options[1].img}.png`} alt="" />
            </div>
            <h3 className={option === 1 ? "active" : undefined}>
              {DATA.section8.options[1].name}
            </h3>
          </div>
        </div>
        <div className="section_8__element_body">
          {option === 0 && (
            <>
              <h2>{DATA.section8.options[0].h2}</h2>
              <p>{DATA.section8.options[0].p_l}</p>
              <UList data={DATA.section8.options[0].list} />
            </>
          )}
        </div>
        <div className="section_8__element_button">
          <ButtonSecondary text={DATA.section8.options[option].button} />
        </div>
      </div>
    </section>
  );
};

export default GettingStarted;
