import React from "react";
import DATA from "../../data/homeData.json";
import { ButtonSecondary } from "../../components/Buttons";

const NeedConvencing = () => {
  return (
    <section className="section_7">
      <div className="section_7__element">
        <img
          src={`/images/${DATA.section7.leftImg}.png`}
          alt="message button"
        />
      </div>
      <div className="section_7__element">
        <h2>{DATA.section7.mid.h2}</h2>
        <p>{DATA.section7.mid.p_l}</p>
      </div>
      <div className="section_7__element">
        <ButtonSecondary text={DATA.section7.btnS} />
      </div>
    </section>
  );
};

export default NeedConvencing;
