import React from "react";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

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
        <h2>Hold on, what’s an NFT?</h2>
        <p>
          A non-fungible token (NFT) is a unique and non-interchangeable unit of
          data stored on a digital ledger (blockchain). NFTs can be associated
          with reproducible digital files such as photos, videos, and audio.
          NFTs use a digital ledger to provide a public certificate of
          authenticity or proof of ownership, but it does not restrict the
          sharing or copying of the underlying digital file.
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
        <ButtonSecondary text="Tell me more" />
      </section>
    </>
  );
};

export default WhatIsNFT;
