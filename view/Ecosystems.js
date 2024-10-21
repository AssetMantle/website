import React from "react";
import { CgArrowTopRightR } from "react-icons/cg";
import { BPdotsSquare, DMSans } from "@/config/fonts/LocalImports";

export default function Ecosystems() {
  const DATA = {
    left: [
      {
        title: "InterNFT",
        title_icon: <CgArrowTopRightR />,
        href: "https://internft.github.io/",
      },
      {
        title: "Validators",
        title_icon: <CgArrowTopRightR />,
        href: "",
      },
      {
        title: "MantleLabs",
        title_icon: <CgArrowTopRightR />,
        href: "",
      },
      // {
      //   title: "Others",
      //   title_icon: <CgArrowTopRightR />,
      //   href: "",
      // },
    ],
    right: [
      {
        title: "Artist4Web3",
        title_icon: <CgArrowTopRightR />,
        href: "https://artists4web3.org/",
      },
      {
        title: "Asgurard",
        title_icon: <CgArrowTopRightR />,
        href: "https://www.asguard.network/",
      },
      {
        title: "MantleBuilder",
        title_icon: <CgArrowTopRightR />,
        href: "",
      },
      // {
      //   title: "Others",
      //   title_icon: <CgArrowTopRightR />,
      //   href: "",
      // },
    ],
  };

  return (
    <section className="am-ecosystems-parent" id="ecosystems">
      <div className={`am-container am-ecosystems ${BPdotsSquare.className}`}>
        <div className="content">
          <h2>ecosystems</h2>
          <div className="container">
            <div className="content left">
              <div className="list">
                {React.Children.toArray(
                  DATA?.left?.map((item) => (
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
            <div className="content right">
              <div className="list">
                {React.Children.toArray(
                  DATA?.right?.map((item) => (
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
        </div>
      </div>
    </section>
  );
}
