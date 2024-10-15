import { BPdotsSquare } from "@/config/fonts/LocalImports";
import React from "react";

export default function Metrics() {
  const Stats = [
    {
      title: "Transactions",
      number: "9,655,088",
    },
    {
      title: "Accounts",
      number: "101,190",
    },
    {
      title: "Identities Named",
      number: "42,870",
    },
    {
      title: "Asset Classes",
      number: "1",
    },
  ];

  return (
    <section className="am-metrics-parent" id="metrics">
      <div className={`am-container am-metrics ${BPdotsSquare.className}`}>
        <div className="content">
          <h2>metrics</h2>
          <div className="list">
            {React.Children.toArray(
              Stats?.map((stat) => (
                <div className="option">
                  <div className="dot">
                    <span></span>
                  </div>
                  <div className="content">
                    <h3>{stat?.title}</h3>
                    <p>{stat?.number}</p>
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
