import React from "react";
import { CgArrowTopRightR } from "react-icons/cg";
import { BPdotsSquare, DMSans } from "@/config/fonts/LocalImports";

export default function Business() {
  const DATA = [
    {
      title: "MantleWorks",
      title_icon: <CgArrowTopRightR />,
      href: "https://mantleworks.one",
      details:
        "MantleWorks is revolutionizing enterprise resource utilization by transforming untapped assets into valuable digital assets. Built on AssetMantle’s six proprietary IPs, its assetization infrastructure provides digital assets with digitally enfrocable ownership rights across industries such as healthcare, real estate, ESG, and unified loyalty programs, unlocking hidden value and commercial potential within these sectors.",
    },
  ];

  return (
    <section className="am-business-parent" id="business">
      <div className={`am-container am-business ${BPdotsSquare.className}`}>
        <div className="content">
          <h2>business</h2>
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
