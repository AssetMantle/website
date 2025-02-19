import { BPdotsSquare } from "@/config/fonts/LocalImports";
import React from "react";

export default function SlideIndicator({ indicator }) {
  const sectionMap = [
    {
      title: "metrics",
    },
    {
      title: "business",
    },
    {
      title: "builder",
    },
    {
      title: "user",
    },
    {
      title: "Ecosystem",
    },
    // {
    //   title: "metrics",
    // },
  ];

  return (
    <div className="am-slideIndicator">
      {React.Children.toArray(
        sectionMap.map((el, ind) => (
          <button
            className={`indicator ${BPdotsSquare.className} mw-${indicator}${
              indicator === ind + 1 ? " active" : ""
            }${indicator === 0 ? " hide" : ""}`}
            onClick={() =>
              window &&
              window.innerHeight &&
              window.scrollTo(0, window.innerHeight * (ind + 1))
            }
          >
            {el?.title}
          </button>
        ))
      )}
    </div>
  );
}
