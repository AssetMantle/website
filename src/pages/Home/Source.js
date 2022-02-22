import React from "react";
import DATA from "../../data/homeData.json";

const Source = () => {
  return (
    <section className="section_source">
      <span id="Source"></span>
      <p>
        *Source:{" "}
        <a
          href={DATA.source.href && DATA.source.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          NFT Market History
        </a>
      </p>
    </section>
  );
};

export default Source;
