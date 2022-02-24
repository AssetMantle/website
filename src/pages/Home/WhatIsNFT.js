import React from "react";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

import DATA from "../../data/homeData.json";

import { ButtonSecondary } from "../../components/Buttons";

const WhatIsNFT = () => {
  const slickImageList = [
    // /images/landing/
    {
      src: "youtube.png",
      placeHolder: "youtube",
    },
    {
      src: "games.png",
      placeHolder: "games",
    },
    {
      src: "image.png",
      placeHolder: "image",
    },
    {
      src: "video.png",
      placeHolder: "video",
    },
    {
      src: "text.png",
      placeHolder: "text",
    },
    {
      src: "sounds.png",
      placeHolder: "sound",
    },
  ];
  return (
    <>
      <section className="section_w__nft">
        <span className="section_w__nft__link_span" id="whats_an_NFT"></span>
        <h2>Hold on, what’s an NFT?</h2>
        <p>
          What is an NFT? Why is it relevant? NFT stands for non-fungible token.
          It’s the digital equivalent of owning cool things in the physical
          world, like sexy sneakers or a Van Gogh. Like them, NFTs are unique,
          non-interchangeable units of data stored on the blockchain. They are
          photos, videos, or audio. They provide public proof of authenticity or
          ownership. But that does not restrict the sharing or copying of the
          digital file. Many consider NFTs to be the future of owning, flaunting
          and sharing things on the net!
        </p>
        <h3>NFTs come in various forms such as:</h3>
      </section>
      <section className="section_slick__left">
        <Splide
          options={{
            rewind: false,
            hasAutoplayControls: false,
            perPage: 11,
            autoplay: true,
            type: "loop",
            speed: 800,
            easing: "ease",
            perMove: 1,
            arrows: false,
            pagination: false,
            drag: false,
            interval: 1,
            direction: "ltr",
            breakpoints: {
              1024: {
                perPage: 9,
              },
              768: {
                perPage: 6,
              },
              548: {
                perPage: 4,
              },
              410: {
                perPage: 3,
              },
            },
            autoScroll: {
              speed: 2,
            },
          }}
        >
          {React.Children.toArray(
            slickImageList.map((data) => (
              <SplideSlide>
                <img
                  src={`/images/landing/${data.src}`}
                  alt={data.placeHolder}
                />
              </SplideSlide>
            ))
          )}
          {React.Children.toArray(
            slickImageList.map((data) => (
              <SplideSlide>
                <img
                  src={`/images/landing/${data.src}`}
                  alt={data.placeHolder}
                />
              </SplideSlide>
            ))
          )}
        </Splide>
        <Splide
          options={{
            rewind: false,
            hasAutoplayControls: false,
            perPage: 11,
            autoplay: true,
            type: "loop",
            speed: 800,
            easing: "ease",
            perMove: 1,
            arrows: false,
            pagination: false,
            drag: false,
            interval: 1,
            direction: "rtl",
            breakpoints: {
              1024: {
                perPage: 9,
              },
              768: {
                perPage: 6,
              },
              548: {
                perPage: 4,
              },
              410: {
                perPage: 3,
              },
            },
            autoScroll: {
              speed: 2,
            },
          }}
        >
          {React.Children.toArray(
            slickImageList.map((data) => (
              <SplideSlide>
                <img
                  src={`/images/landing/${data.src}`}
                  alt={data.placeHolder}
                />
              </SplideSlide>
            ))
          )}
          {React.Children.toArray(
            slickImageList.map((data) => (
              <SplideSlide>
                <img
                  src={`/images/landing/${data.src}`}
                  alt={data.placeHolder}
                />
              </SplideSlide>
            ))
          )}
        </Splide>
      </section>
      <section className="section_w__nft section_w__nft_button">
        <ButtonSecondary
          text="Tell me more"
          href={DATA.wNFT.href && DATA.wNFT.href}
        />
      </section>
    </>
  );
};

export default WhatIsNFT;
