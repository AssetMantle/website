import React from "react";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

import DATA from "../../data/homeData.json";

import { ButtonSecondary } from "../../components/Buttons";
import { useTranslation } from "react-i18next";

const WhatIsNFT = () => {
  const { t } = useTranslation();

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
        <h2>{t("WHAT_IS_NFT_TITLE")}</h2>
        <p>{t("WHAT_IS_NFT_DESCRIPTION")}</p>
        <h3>{t("WHAT_IS_NFT_SUB_TITLE")}</h3>
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
          text={t("TELL_ME_MORE")}
          href={DATA.wNFT.href && DATA.wNFT.href}
        />
      </section>
    </>
  );
};

export default WhatIsNFT;
