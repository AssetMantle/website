import React from "react";
import DATA from "../../data/homeData.json";
import { ButtonSecondary } from "../../components/Buttons";

const RoadMap = () => {
  return (
    <section className="section_roadMap">
      <div className="section_roadMap__element">
        <img src="/images/landing/section/roadmap.png" alt="" />
      </div>
      <div className="section_roadMap__element">
        <h2>Want to know more about our journey?</h2>
        <p>Check out our roadmap</p>
      </div>
      <div className="section_roadMap__element bu">
        <ButtonSecondary
          text="Roadmap"
          href={DATA.RoadMap.href && DATA.RoadMap.href}
        />
      </div>
    </section>
  );
};

export default RoadMap;
