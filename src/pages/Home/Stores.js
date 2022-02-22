import React from "react";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

const Stores = () => {
  return (
    <section className="section_stores">
      <h2>Our Stores</h2>
      <p>
        Discover an awesome range of NFTs from games, art, collectibles, and
        more. Get ready to raise those digital envy meters!
      </p>
      <h3>Featured Stores</h3>
      <div className="section_stores__element">
        <Splide
          options={{
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
          }}
        >
          <SplideSlide>
            <div className="section_stores__element_card" tabIndex="0">
              <div className="section_stores__element_card__viewer">
                <img src="/images/landing/store/1.png" alt="" />
              </div>
              <div className="section_stores__element_card__grid">
                <img src="/images/landing/store/2.png" alt="" />
                <img src="/images/landing/store/3.png" alt="" />
                <img src="/images/landing/store/4.png" alt="" />
              </div>
              <div className="section_stores__element_card__profile">
                <img src="/images/landing/store/profile.png" alt="" />
                <div className="section_stores__element_card__profile_details">
                  <h4>Lorem ipsum dolor sit </h4>
                  <p>
                    Consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore.
                  </p>
                </div>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="section_stores__element_card" tabIndex="0">
              <div className="section_stores__element_card__viewer">
                <img src="/images/landing/store/5.png" alt="" />
              </div>
              <div className="section_stores__element_card__grid">
                <img src="/images/landing/store/6.png" alt="" />
                <img src="/images/landing/store/7.png" alt="" />
                <img src="/images/landing/store/8.png" alt="" />
              </div>
              <div className="section_stores__element_card__profile">
                <img src="/images/landing/store/profile.png" alt="" />
                <div className="section_stores__element_card__profile_details">
                  <h4>Lorem ipsum dolor sit </h4>
                  <p>
                    Consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore.
                  </p>
                </div>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="section_stores__element_card" tabIndex="0">
              <div className="section_stores__element_card__viewer">
                <img src="/images/landing/store/9.png" alt="" />
              </div>
              <div className="section_stores__element_card__grid">
                <img src="/images/landing/store/10.png" alt="" />
                <img src="/images/landing/store/11.png" alt="" />
                <img src="/images/landing/store/12.png" alt="" />
              </div>
              <div className="section_stores__element_card__profile">
                <img src="/images/landing/store/profile.png" alt="" />
                <div className="section_stores__element_card__profile_details">
                  <h4>Lorem ipsum dolor sit </h4>
                  <p>
                    Consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore.
                  </p>
                </div>
              </div>
            </div>
          </SplideSlide>
        </Splide>
      </div>
      <h3>New Stores</h3>
      <div className="section_stores__element">
        <Splide
          options={{
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
          }}
        >
          <SplideSlide>
            <div className="section_stores__element_card" tabIndex="0">
              <div className="section_stores__element_card__viewer">
                <img src="/images/landing/store/5.png" alt="" />
              </div>
              <div className="section_stores__element_card__grid">
                <img src="/images/landing/store/6.png" alt="" />
                <img src="/images/landing/store/7.png" alt="" />
                <img src="/images/landing/store/8.png" alt="" />
              </div>
              <div className="section_stores__element_card__profile">
                <img src="/images/landing/store/profile.png" alt="" />
                <div className="section_stores__element_card__profile_details">
                  <h4>Lorem ipsum dolor sit </h4>
                  <p>
                    Consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore.
                  </p>
                </div>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="section_stores__element_card" tabIndex="0">
              <div className="section_stores__element_card__viewer">
                <img src="/images/landing/store/9.png" alt="" />
              </div>
              <div className="section_stores__element_card__grid">
                <img src="/images/landing/store/10.png" alt="" />
                <img src="/images/landing/store/11.png" alt="" />
                <img src="/images/landing/store/12.png" alt="" />
              </div>
              <div className="section_stores__element_card__profile">
                <img src="/images/landing/store/profile.png" alt="" />
                <div className="section_stores__element_card__profile_details">
                  <h4>Lorem ipsum dolor sit </h4>
                  <p>
                    Consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore.
                  </p>
                </div>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="section_stores__element_card" tabIndex="0">
              <div className="section_stores__element_card__viewer">
                <img src="/images/landing/store/1.png" alt="" />
              </div>
              <div className="section_stores__element_card__grid">
                <img src="/images/landing/store/2.png" alt="" />
                <img src="/images/landing/store/3.png" alt="" />
                <img src="/images/landing/store/4.png" alt="" />
              </div>
              <div className="section_stores__element_card__profile">
                <img src="/images/landing/store/profile.png" alt="" />
                <div className="section_stores__element_card__profile_details">
                  <h4>Lorem ipsum dolor sit </h4>
                  <p>
                    Consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore.
                  </p>
                </div>
              </div>
            </div>
          </SplideSlide>
        </Splide>
      </div>
      <h3>Popular Stores</h3>
      <div className="section_stores__element">
        <Splide
          options={{
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
          }}
        >
          <SplideSlide>
            <div className="section_stores__element_card" tabIndex="0">
              <div className="section_stores__element_card__viewer">
                <img src="/images/landing/store/5.png" alt="" />
              </div>
              <div className="section_stores__element_card__grid">
                <img src="/images/landing/store/6.png" alt="" />
                <img src="/images/landing/store/7.png" alt="" />
                <img src="/images/landing/store/8.png" alt="" />
              </div>
              <div className="section_stores__element_card__profile">
                <img src="/images/landing/store/profile.png" alt="" />
                <div className="section_stores__element_card__profile_details">
                  <h4>Lorem ipsum dolor sit </h4>
                  <p>
                    Consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore.
                  </p>
                </div>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="section_stores__element_card" tabIndex="0">
              <div className="section_stores__element_card__viewer">
                <img src="/images/landing/store/1.png" alt="" />
              </div>
              <div className="section_stores__element_card__grid">
                <img src="/images/landing/store/2.png" alt="" />
                <img src="/images/landing/store/3.png" alt="" />
                <img src="/images/landing/store/4.png" alt="" />
              </div>
              <div className="section_stores__element_card__profile">
                <img src="/images/landing/store/profile.png" alt="" />
                <div className="section_stores__element_card__profile_details">
                  <h4>Lorem ipsum dolor sit </h4>
                  <p>
                    Consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore.
                  </p>
                </div>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="section_stores__element_card" tabIndex="0">
              <div className="section_stores__element_card__viewer">
                <img src="/images/landing/store/9.png" alt="" />
              </div>
              <div className="section_stores__element_card__grid">
                <img src="/images/landing/store/10.png" alt="" />
                <img src="/images/landing/store/11.png" alt="" />
                <img src="/images/landing/store/12.png" alt="" />
              </div>
              <div className="section_stores__element_card__profile">
                <img src="/images/landing/store/profile.png" alt="" />
                <div className="section_stores__element_card__profile_details">
                  <h4>Lorem ipsum dolor sit </h4>
                  <p>
                    Consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore.
                  </p>
                </div>
              </div>
            </div>
          </SplideSlide>
        </Splide>
      </div>
    </section>
  );
};

export default Stores;
