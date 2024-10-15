import React from "react";
import { CgArrowTopRightR } from "react-icons/cg";
import { BPdotsSquare, DMSans } from "@/config/fonts/LocalImports";

export default function Builder() {
  const DATA = [
    {
      title: "Github",
      title_icon: <CgArrowTopRightR />,
      href: "https://github.com/AssetMantle",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at lacinia tortor. ",
    },
    {
      title: "Documentation",
      title_icon: <CgArrowTopRightR />,
      href: "https://docs.assetmantle.one/",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at lacinia tortor. ",
    },
    {
      title: "Explorer",
      title_icon: <CgArrowTopRightR />,
      href: "https://explorer.assetmantle.one/",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at lacinia tortor. ",
    },
  ];

  return (
    <section className="am-builder-parent" id="builder">
      <div className={`am-container am-builder ${BPdotsSquare.className}`}>
        <div className="content">
          <h2>builder</h2>
          <div className="list">
            {React.Children.toArray(
              DATA?.map((item) => (
                <div className="option">
                  <div className="dot">
                    <span></span>
                  </div>
                  <div className="content">
                    <h3>
                      <a
                        href={item?.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item?.title}
                        {item?.title_icon}
                      </a>
                    </h3>
                    <p className={`${DMSans.className}`}>{item?.details}</p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
