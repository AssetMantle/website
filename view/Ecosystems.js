import React from "react";
import { CgArrowTopRightR } from "react-icons/cg";
import { BPdotsSquare, DMSans } from "@/config/fonts/LocalImports";

export default function Ecosystems() {
  const DATA = {
    left: [
      {
        title: "Others",
        title_icon: <CgArrowTopRightR />,
        href: "",
      },
      {
        title: "Others",
        title_icon: <CgArrowTopRightR />,
        href: "",
      },
      {
        title: "Others",
        title_icon: <CgArrowTopRightR />,
        href: "",
      },
      {
        title: "Others",
        title_icon: <CgArrowTopRightR />,
        href: "",
      },
    ],
    right: [
      {
        title: "Others",
        title_icon: <CgArrowTopRightR />,
        href: "",
      },
      {
        title: "Others",
        title_icon: <CgArrowTopRightR />,
        href: "",
      },
      {
        title: "Others",
        title_icon: <CgArrowTopRightR />,
        href: "",
      },
      {
        title: "Others",
        title_icon: <CgArrowTopRightR />,
        href: "",
      },
    ],
  };

  return (
    <section className="am-ecosystems-parent" id="ecosystems">
      <div className={`am-container am-ecosystems ${BPdotsSquare.className}`}>
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
    </section>
  );
}
