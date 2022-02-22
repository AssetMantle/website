import React from "react";

import DATA from "../../data/homeData.json";

import { ButtonSecondary } from "../../components/Buttons";

const NeedConvencing = () => {
  return (
    <section className="section_convincing">
      <div className="section_convincing__element">
        <img
          src="/images/landing/section/messageIdea.png"
          alt="message button"
        />
      </div>
      <div className="section_convincing__element">
        <h2>Um, i need some convincing!</h2>
        <p>
          No sweat. It’s a new space and we understand you have questions. Let’s
          take a digital walk and answer them!
        </p>
      </div>
      <div className="section_convincing__element">
        <ButtonSecondary
          text="Take a Tour"
          href={DATA.convincing.href && DATA.convincing.href}
        />
      </div>
    </section>
  );
};

export default NeedConvencing;
