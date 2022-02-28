import React from "react";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { StoreBox } from "../../components/StoreBox";
import { useTranslation } from "react-i18next";

const Stores = () => {
  const { t } = useTranslation();

  const featuredStore = [
    {
      viewerImage: "/images/landing/store/1.png",
      imageGrid: [
        "/images/landing/store/2.png",
        "/images/landing/store/3.png",
        "/images/landing/store/4.png",
      ],
      profileImage: "/images/landing/store/profile.png",
      name: "Lorem ipsum dolor sit",
      description:
        "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    },
    {
      viewerImage: "/images/landing/store/5.png",
      imageGrid: [
        "/images/landing/store/6.png",
        "/images/landing/store/7.png",
        "/images/landing/store/8.png",
      ],
      profileImage: "/images/landing/store/profile.png",
      name: "Lorem ipsum dolor sit",
      description:
        "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    },
    {
      viewerImage: "/images/landing/store/9.png",
      imageGrid: [
        "/images/landing/store/10.png",
        "/images/landing/store/11.png",
        "/images/landing/store/12.png",
      ],
      profileImage: "/images/landing/store/profile.png",
      name: "Lorem ipsum dolor sit",
      description:
        "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    },
  ];

  const newStore = [
    {
      viewerImage: "/images/landing/store/13.png",
      imageGrid: [
        "/images/landing/store/14.png",
        "/images/landing/store/3.png",
        "/images/landing/store/16.png",
      ],
      profileImage: "/images/landing/store/profile.png",
      name: "Lorem ipsum dolor sit",
      description:
        "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    },
    {
      viewerImage: "/images/landing/store/17.png",
      imageGrid: [
        "/images/landing/store/6.png",
        "/images/landing/store/7.png",
        "/images/landing/store/8.png",
      ],
      profileImage: "/images/landing/store/profile.png",
      name: "Lorem ipsum dolor sit",
      description:
        "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    },
    {
      viewerImage: "/images/landing/store/21.png",
      imageGrid: [
        "/images/landing/store/22.png",
        "/images/landing/store/23.png",
        "/images/landing/store/12.png",
      ],
      profileImage: "/images/landing/store/profile.png",
      name: "Lorem ipsum dolor sit",
      description:
        "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    },
  ];

  const popularStore = [
    {
      viewerImage: "/images/landing/store/25.png",
      imageGrid: [
        "/images/landing/store/2.png",
        "/images/landing/store/3.png",
        "/images/landing/store/4.png",
      ],
      profileImage: "/images/landing/store/profile.png",
      name: "Lorem ipsum dolor sit",
      description:
        "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    },
    {
      viewerImage: "/images/landing/store/29.png",
      imageGrid: [
        "/images/landing/store/6.png",
        "/images/landing/store/7.png",
        "/images/landing/store/8.png",
      ],
      profileImage: "/images/landing/store/profile.png",
      name: "Lorem ipsum dolor sit",
      description:
        "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    },
    {
      viewerImage: "/images/landing/store/33.png",
      imageGrid: [
        "/images/landing/store/10.png",
        "/images/landing/store/11.png",
        "/images/landing/store/36.png",
      ],
      profileImage: "/images/landing/store/profile.png",
      name: "Lorem ipsum dolor sit",
      description:
        "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    },
  ];

  const sliderOption = {
    type: "slide",
    pagination: false,
    perPage: 3,
    perMove: 1,
    speed: 400,
    interval: 3,
    breakpoints: {
      1330: {
        perPage: 2,
      },
      948: {
        perPage: 1,
      },
    },
  };

  return (
    <section className="section_stores">
      <h2>{t("STORES_TITLE")}</h2>
      <p>{t("STORES_DESCRIPTION")}</p>
      <h3 className="section_stores__title">
        {t("STORES_STORE_1")}
        <span
          className="section_stores__title__link_span"
          id="featured_stores"
        ></span>
      </h3>
      <div className="section_stores__element">
        <Splide options={sliderOption}>
          {React.Children.toArray(
            featuredStore.map((data) => (
              <SplideSlide>
                <StoreBox
                  viewerImage={data.viewerImage}
                  gridImage1={data.imageGrid[0]}
                  gridImage2={data.imageGrid[1]}
                  gridImage3={data.imageGrid[2]}
                  profileImage={data.profileImage}
                  name={data.name}
                  description={data.description}
                />
              </SplideSlide>
            ))
          )}
        </Splide>
      </div>
      <h3 className="section_stores__title">
        {t("STORES_STORE_2")}
        <span
          className="section_stores__title__link_span"
          id="new_stores"
        ></span>
      </h3>
      <div className="section_stores__element">
        <Splide options={sliderOption}>
          {React.Children.toArray(
            newStore.map((data) => (
              <SplideSlide>
                <StoreBox
                  viewerImage={data.viewerImage}
                  gridImage1={data.imageGrid[0]}
                  gridImage2={data.imageGrid[1]}
                  gridImage3={data.imageGrid[2]}
                  profileImage={data.profileImage}
                  name={data.name}
                  description={data.description}
                />
              </SplideSlide>
            ))
          )}
        </Splide>
      </div>
      <h3 className="section_stores__title">
        {t("STORES_STORE_3")}
        <span
          className="section_stores__title__link_span"
          id="popular_stores"
        ></span>
      </h3>
      <div className="section_stores__element">
        <Splide options={sliderOption}>
          {React.Children.toArray(
            popularStore.map((data) => (
              <SplideSlide>
                <StoreBox
                  viewerImage={data.viewerImage}
                  gridImage1={data.imageGrid[0]}
                  gridImage2={data.imageGrid[1]}
                  gridImage3={data.imageGrid[2]}
                  profileImage={data.profileImage}
                  name={data.name}
                  description={data.description}
                />
              </SplideSlide>
            ))
          )}
        </Splide>
      </div>
    </section>
  );
};

export default Stores;
