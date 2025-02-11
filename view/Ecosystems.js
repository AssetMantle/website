import React from "react";
import { CgArrowTopRightR } from "react-icons/cg";
import { BPdotsSquare, DMSans } from "@/config/fonts/LocalImports";

export default function Ecosystems() {
  const DATA = {
    left: [
      {
        title: "$MNTL",
        title_icon: <CgArrowTopRightR />,
        title_icon_visibility: true,
        href: "https://app.osmosis.zone/?from=USDC&to=MNTL",
      },
      {
        title: "InterNFT",
        title_icon: <CgArrowTopRightR />,
        title_icon_visibility: true,
        href: "https://internft.github.io/",
      },
      {
        title: "Validators",
        title_icon: <CgArrowTopRightR />,
        title_icon_visibility: true,
        href: "https://www.mintscan.io/asset-mantle/validators",
      },
      {
        title: "MantleBuilder",
        title_icon: <CgArrowTopRightR />,
        title_icon_visibility: true,
        href: "https://docs.assetmantle.one/MantleBuilder_Overview/",
      },
    ],
    right: [
      {
        title: "Asguard",
        title_icon: <CgArrowTopRightR />,
        title_icon_visibility: true,
        href: "https://www.asguard.network/",
      },
      {
        title: "LoyaltyLabs",
        title_icon: <CgArrowTopRightR />,
        title_icon_visibility: false,
        href: "",
      },
      {
        title: "Artist4Web3",
        title_icon: <CgArrowTopRightR />,
        title_icon_visibility: true,
        href: "https://artists4web3.studio/",
      },
      {
        title: "Ingrained Logic",
        title_icon: <CgArrowTopRightR />,
        title_icon_visibility: true,
        href: "https://www.ingrainedlogic.com/",
      },
    ],
  };

  return (
    <section className="am-ecosystems-parent" id="ecosystems">
      <div className={`am-container am-ecosystems ${BPdotsSquare.className}`}>
        <div className="content">
          <h2>Ecosystem</h2>
          <div className="container">
            <div className="content left">
              <div className="list">
                {React.Children.toArray(
                  DATA?.left?.map((item) => (
                    <div className="option">
                      <div className="content">
                        <h3>
                          {item?.href ? (
                            <a
                              href={item?.href}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <span
                                style={{
                                  visibility: item?.title_icon_visibility
                                    ? "visible"
                                    : "hidden",
                                }}
                              >
                                {item?.title_icon}
                              </span>
                              <span>{item?.title}</span>
                            </a>
                          ) : (
                            <p>
                              <span
                                style={{
                                  visibility: item?.title_icon_visibility
                                    ? "visible"
                                    : "hidden",
                                }}
                              >
                                {item?.title_icon}
                              </span>
                              <span>{item?.title}</span>
                            </p>
                          )}
                        </h3>
                        {item?.details && (
                          <p className={`${DMSans.className}`}>
                            {item?.details}
                          </p>
                        )}
                      </div>
                      <div className="dot">
                        <span></span>
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
                          {item?.href ? (
                            <a
                              href={item?.href}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <span>{item?.title}</span>
                              <span
                                style={{
                                  visibility: item?.title_icon_visibility
                                    ? "visible"
                                    : "hidden",
                                }}
                              >
                                {item?.title_icon}
                              </span>
                            </a>
                          ) : (
                            <p>
                              <span>{item?.title}</span>
                              <span
                                style={{
                                  visibility: item?.title_icon_visibility
                                    ? "visible"
                                    : "hidden",
                                }}
                              >
                                {item?.title_icon}
                              </span>
                            </p>
                          )}
                        </h3>
                        {item?.details && (
                          <p className={`${DMSans.className}`}>
                            {item?.details}
                          </p>
                        )}
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
