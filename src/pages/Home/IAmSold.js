import React from "react";
import { ButtonPrimary } from "../../components/Buttons";
import DATA from "../../data/homeData.json";

const IAmSold = () => {
  return (
    <section className="section_6">
      <div className="section_6__element">
        <h2>{DATA.section6.h2}</h2>
        <p>{DATA.section6.p_l}</p>
      </div>
      <ButtonPrimary
        text={DATA.section6.bp}
        href={DATA.section6.href}
        targetBlank={true}
      />
    </section>
  );
};

export default IAmSold;
