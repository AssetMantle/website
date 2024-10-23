import React from "react";
import { CgArrowTopRightR } from "react-icons/cg";
import { BPdotsSquare, DMSans } from "@/config/fonts/LocalImports";

export default function Ecosystems() {
  const DATA = {
    left: [
      {
        title: "$MNTL",
        title_icon: <CgArrowTopRightR />,
        href: "https://app.osmosis.zone/?from=USDC&to=MNTL",
      },
      {
        title: "InterNFT",
        title_icon: <CgArrowTopRightR />,
        href: "https://internft.github.io/",
      },
      {
        title: "Validators",
        title_icon: <CgArrowTopRightR />,
        href: "https://www.mintscan.io/asset-mantle/validators",
      },
      {
        title: "MantleBuilder",
        title_icon: <CgArrowTopRightR />,
        href: "https://docs.assetmantle.one/MantleBuilder_Overview/",
      },
    ],
    right: [
      {
        title: "Asguard",
        title_icon: <CgArrowTopRightR />,
        href: "https://www.asguard.network/",
      },
      {
        title: "LoyaltyLabs",
        title_icon: "",
        href: "",
      },
      {
        title: "Artist4Web3",
        title_icon: <CgArrowTopRightR />,
        href: "https://artists4web3.org/",
      },
      {
        title: "Ingrained Logic",
        title_icon: <CgArrowTopRightR />,
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
                          <a
                            href={item?.href}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <span>{item?.title_icon}</span>
                            <span>{item?.title}</span>
                          </a>
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
                          <a
                            href={item?.href}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <span>{item?.title}</span>
                            <span>{item?.title_icon}</span>
                          </a>
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
