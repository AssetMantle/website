import { BPdotsSquare } from "@/config/fonts/LocalImports";
import React from "react";

export default function Hero() {
  return (
    <section id="hero" className="am-hero-bg">
      <div className="timeline"></div>
      <div className="am-container am-hero">
        <h1 className={`${BPdotsSquare.className}`}>
          Assetization Infrastructure Layer
        </h1>
      </div>
    </section>
  );
}
