import React from "react";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

const Testimonial = () => {
  const DaTa = [
    {
      pm6: "Lorem ipsum dolor",
      pm: "“Lorem ipsum dolor sit amet, consectetur adipiscin elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”",
      img: "Mask Group",
      namePl6: "User long name",
      psd: "Dolor sit amet",
    },
    {
      pm6: "Lorem ipsum dolor",
      pm: "“Lorem ipsum dolor sit amet, consectetur adipiscin elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”",
      img: "Mask Group",
      namePl6: "User long name",
      psd: "Dolor sit amet",
    },
    {
      pm6: "Lorem ipsum dolor",
      pm: "“Lorem ipsum dolor sit amet, consectetur adipiscin elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”",
      img: "Mask Group",
      namePl6: "User long name",
      psd: "Dolor sit amet",
    },
  ];

  return (
    <section className="section_testimonial">
      <h2>Hear what people have to say </h2>
      <p>
        People who have tried AssetMantle are rocking it, whether they are
        creators or collectors
      </p>
      <div className="section_testimonial_slick">
        <Splide
          options={{
            type: "slide",
            pagination: false,
            perPage: 2,
            perMove: 1,
            speed: 400,
            interval: 3,
            gap: "24px",
            breakpoints: {
              548: {
                perPage: 1,
              },
            },
          }}
        >
          {React.Children.toArray(
            DaTa.map((data) => (
              <SplideSlide>
                <div className="section_testimonial_slick__option">
                  <p className="testimonial_title">{data.pm6}</p>
                  <p className="testimonial_details">{data.pm}</p>
                  <div className="testimonial_owner">
                    <div className="testimonial_owner__element">
                      <img src={`/images/landing/prof_img.png`} alt="" />
                    </div>
                    <div className="testimonial_owner__element">
                      <p className="testimonial_owner__element_name">
                        {data.namePl6}
                      </p>
                      <p className="testimonial_owner__element_details">
                        {data.psd}
                      </p>
                    </div>
                  </div>
                </div>
              </SplideSlide>
            ))
          )}
        </Splide>
      </div>
    </section>
  );
};

export default Testimonial;
