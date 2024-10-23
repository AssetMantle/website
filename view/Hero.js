import { BPdotsSquare } from "@/config/fonts/LocalImports";
import React, { useState, useEffect } from "react";

export default function Hero({ indicator }) {
  const [Show, setShow] = useState(false);

  useEffect(() => {
    if (indicator === 0) {
      const timeout = setTimeout(() => setShow(true), 6500);

      return () => clearTimeout(timeout);
    } else setShow(false);
  }, [indicator]);

  return (
    <section id="hero" className="am-hero-bg">
      <div className="timeline"></div>
      <div className="am-container am-hero">
        <h1 className={`${BPdotsSquare.className}${Show ? " active" : ""}`}>
          Assetization Infrastructure Layer
        </h1>
      </div>
    </section>
  );
}
