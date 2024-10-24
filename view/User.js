import React from "react";
import { CgArrowTopRightR } from "react-icons/cg";
import { BPdotsSquare, DMSans } from "@/config/fonts/LocalImports";

export default function User() {
  const DATA = [
    {
      title: "MantleWallet",
      title_icon: <CgArrowTopRightR />,
      href: "https://wallet.assetmantle.one/",
      details: "Transact, Stake, Farm, Bridge, and more",
    },
    {
      title: "MantlePlace",
      title_icon: <CgArrowTopRightR />,
      href: "https://marketplace.assetmantle.one/",
      details:
        "Low gas fees, cross-chain compatibility, decentralized identities, and more",
    },
    {
      title: "Ami Names",
      title_icon: <CgArrowTopRightR />,
      href: "https://names.assetmantle.one/",
      details: "Universal Verifiable Credential",
    },
    {
      title: "Others",
      title_icon: <CgArrowTopRightR />,
      href: "",
    },
  ];

  return (
    <section className="am-user-parent" id="user">
      <div className={`am-container am-user ${BPdotsSquare.className}`}>
        <div className="content">
          <h2>user</h2>
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
                    {item?.details && (
                      <p className={`${DMSans.className}`}>{item?.details}</p>
                    )}
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
