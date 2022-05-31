import React from "react";
import { useTranslation } from "react-i18next";
// import "../../translations/i18n";

import styled from "styled-components";

// icons
import { MdVerified } from "react-icons/md";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";

// Import Swiper styles
import "swiper/swiper-bundle.css";
import "swiper/modules/effect-coverflow/effect-coverflow.min.css";
import "swiper/modules/navigation/navigation.min.css";

// import required modules
import { EffectCoverflow, Navigation } from "swiper";

export default function HeroSection() {
  const { t } = useTranslation();

  const SLIDES = [
    {
      image: "hero_image_1.png",
      avatar: "hero_avatar_1.png",
      name: "Dreamyvisuals  ",
      social: "https://twitter.com/dreamyvisualz",
      profile: "Forest Ruins",
    },
    {
      image: "hero_image_2.png",
      avatar: "hero_avatar_2.png",
      name: "shainefer",
      social: "https://twitter.com/Shai_Nefer_",
      profile: "Break",
    },
    {
      image: "hero_image_3.png",
      avatar: "hero_avatar_3.png",
      name: "Igor Kozhanov ",
      social: "https://twitter.com/Igor211988189",
      profile: "Red",
    },
    {
      image: "hero_image_4.png",
      avatar: "hero_avatar_4.png",
      name: "ORBICS",
      social: "https://twitter.com/OrbicsNFT?t=KRA-mPDPPop5L6opSYjUtg&s=09",
      profile: "Orbics",
    },
    {
      image: "hero_image_5.png",
      avatar: "hero_avatar_5.png",
      name: "Gojuku",
      social: "https://twitter.com/Gojuku_",
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
            navigation={true}
            loop={true}
            modules={[EffectCoverflow, Navigation]}
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
                    <a
                      href={data.social}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="slide__active__contents__container"
                      onClick={(e) => !data.social && e.preventDefault()}
                    >
                      <div className="slide__active__contents__container_image">
                        <img
                          src={`/images/landing/hero/${data.avatar}`}
                          alt={`${data.name}'s avatar`}
                        />
                      </div>
                      <div className="slide__active__contents__container_details">
                        <h4>
                          {data.name}{" "}
                          <span>
                            <MdVerified />
                          </span>
                        </h4>
                        <p>{data.profile}</p>
                      </div>
                    </a>
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
        text-decoration: none;
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
          img {
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
            font-family: var(--font-secondary);
            font-weight: 700;
            color: var(--yellow);
            text-transform: capitalize;
            display: flex;
            align-items: flex-end;
            gap: 4px;
            span {
              font-size: 16px;
              display: flex;
              align-items: center;
              padding-bottom: 5px;
              justify-content: center;
            }
          }
          p {
            font: var(--p-s);
            color: var(--gray);
          }
        }
      }
    }
  }
  .swiper-button-next,
  .swiper-button-prev {
    color: var(--yellow);
    @media (min-width: 549px) {
      height: 62px;
      width: 62px;
      background-image: url("/images/landing/hero/left.svg");
      background-position: center;
      background-repeat: no-repeat;
      background-size: contain;
      &::after {
        opacity: 0;
      }
    }
  }
  .swiper-button-next {
    @media (min-width: 549px) {
      background-image: url("/images/landing/hero/right.svg");
    }
  }
`;

// export default HeroSection;
