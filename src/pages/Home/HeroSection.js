import React from "react";
import { useTranslation } from "react-i18next";
// import "../../translations/i18n";

import styled from "styled-components";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";

// Import Swiper styles
import "swiper/swiper-bundle.css";
import "swiper/modules/effect-coverflow/effect-coverflow.min.css";

// import required modules
import { EffectCoverflow } from "swiper";

export default function HeroSection() {
  const { t } = useTranslation();

  const SLIDES = [
    {
      image: "hero_image_1.png",
      avatar: "hero_avatar_1.png",
      name: "Dreamyvisuals  ",
      profile: "Forest Ruins",
    },
    {
      image: "hero_image_2.png",
      avatar: "hero_avatar_2.png",
      name: "shainefer",
      profile: "Break",
    },
    {
      image: "hero_image_3.png",
      avatar: "hero_avatar_3.png",
      name: "Igor Kozhanov ",
      profile: "Red",
    },
    {
      image: "hero_image_4.png",
      avatar: "hero_avatar_4.png",
      name: "ORBICS",
      profile: "Orbics",
    },
    {
      image: "hero_image_5.png",
      avatar: "hero_avatar_1.png",
      name: "Sourav paul",
      profile: "David",
    },
  ];

  return (
    <section className="section_hero">
      <div className="section_hero__slide">
        <Slide>
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2,
              slideShadows: false,
            }}
            loop={true}
            modules={[EffectCoverflow]}
            className="mySwiper"
          >
            {React.Children.toArray(
              SLIDES.map((data) => (
                <SwiperSlide>
                  <img
                    className="img"
                    src={`/images/landing/hero/${data.image}`}
                    alt=""
                  />
                  <div className="slide__active__contents">
                    <div className="slide__active__contents__container">
                      <div className="slide__active__contents__container_image">
                        <img src={`/images/landing/hero/${data.avatar}`} alt={`${data.name}'s avatar`} />
                      </div>
                      <div className="slide__active__contents__container_details">
                        <h4>{data.name}</h4>
                        <p>{data.profile}</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))
            )}
          </Swiper>
        </Slide>

        {/* <div className="section_hero__left_box2">
          <img src="/images/hero_avatar_1.png" alt="NFT" />
        </div> */}
      </div>
      <div className="section_hero__description">
        <h1>{t("HERO_TITLE")}</h1>
        <p>{t("HERO_DESCRIPTION")}</p>
      </div>
    </section>
  );
}

const Slide = styled.div`
  .swiper-slide {
    width: 397px;
    position: relative;
    overflow: hidden;
    border-radius: 20px;
    img {
      width: 100%;
      height: auto;
    }
    .slide__active__contents {
      display: none;
    }
    @media (max-width: 420px) {
      width: 90%;
    }
  }
  .swiper-slide.swiper-slide-visible.swiper-slide-active {
    .slide__active__contents {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      color: var(--gray);
      background: linear-gradient(
        0deg,
        #000000 0%,
        rgba(129, 129, 129, 0) 39.58%
      );
      &__container {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 20px 22px;
        gap: 13px;
        margin-top: auto;
        &_image {
          width: 65px;
          height: 65px;
          border-radius: 50%;
          img{
            width: 100%;
            height: auto;
            border-radius: 50%;
          }
        }
        &_details {
          display: flex;
          flex-direction: column;
          gap: 0px;
          h4 {
            color: var(--yellow);
            text-transform: capitalize;
          }
          p {
            font: var(--p-m);
            color: var(--gray);
          }
        }
      }
    }
  }
`;

// export default HeroSection;
