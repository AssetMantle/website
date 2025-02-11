"use client";
import React, { useState, useEffect } from "react";
import Footer from "@/layout/Footer";
import Header from "@/layout/Header";
import SlideIndicator from "@/layout/SlideIndicator";
import Hero from "@/view/Hero";
import Metrics from "@/view/Metrics";
import Business from "@/view/Business";
import Builder from "@/view/Builder";
import User from "@/view/User";
import Ecosystems from "@/view/Ecosystems";
import GlobalGameCanvas from "@/components/games/GlobalGameCanvas";
import Pixelate from "@/components/animations/Pixelate";

export default function Home() {
  const [Position, setPosition] = useState(0);
  const [Animate, setAnimate] = useState(false);

  useEffect(() => {
    if (window) {
      window.addEventListener("scroll", () => {
        window.innerHeight &&
          window.scrollY &&
          setPosition(Math.round(window.scrollY / window.innerHeight));
      });
    }
  }, []);

  useEffect(() => {
    setAnimate(true);
    const to = setTimeout(() => setAnimate(false), 400);

    return () => {
      clearTimeout(to);
    };
  }, [Position]);

  return (
    <>
      <Header />

      <GlobalGameCanvas indicator={Position} />
      <main className="am-bg-grid">
        <Hero indicator={Position} />
        <Metrics />
        <Business />
        <Builder />
        <User />
        <Ecosystems />
      </main>

      {/* {Animate && <div className={"am-pixelate"}></div>} */}
      {Position < 1 && <Pixelate menuIsActive={Animate} />}

      <SlideIndicator indicator={Position} />
      <Footer indicator={Position} />
    </>
  );
}
